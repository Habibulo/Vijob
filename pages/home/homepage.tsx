import { useJobContext } from "@/context/JobContext";
import jobData from "@/libs/src/data.json/job.sample.json";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Search, RefreshCcw } from "lucide-react";
import { BottomNav } from "@/libs/components/Homepage/BottomNav";
import { JobCard } from "@/libs/components/Homepage/Card";
import { Job } from "@/libs/types/job";
import AOS from 'aos';
import 'aos/dist/aos.css';
import LanguageSwitcher from "@/libs/components/Language/LangSwitcher";
import translateText from "../api/translate";


// Simulated API call to fetch jobs
/** FETCHING DATA FROM BACKEND **/

const fetchJobs = async (page: number): Promise<Job[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
  const jobsPerPage = 8; // Now fetching 8 jobs at once
  const startIndex = (page - 1) * jobsPerPage; // Calculate the start index based on the page number
  const endIndex = startIndex + jobsPerPage; // Calculate the end index
  const jobs = jobData.slice(startIndex, endIndex); // Slice the data based on page and jobsPerPage
  return jobs;
};
interface HomePageProps {
  content: string;
}
export default function Home(props: HomePageProps) {
  const { jobs, setJobs, page, setPage, hasMore, setHasMore, lastClickedJobId } = useJobContext();
  const [loading, setLoading] = useState(false);
  const { ref, inView } = useInView();
  const [isChecked, setIsChecked] = useState(false);
  const [translatedContent, setTranslatedContent] = useState(props.content);
	const [targetLang, setTargetLang] = useState('kr'); // Default language is English
  /** LIFECYCLE **/

	useEffect(() => {
		AOS.init({
			duration: 1200, // Animation duration (ms)
			once: true, // Whether animation should happen only once
		});
	}, []);
  
  useEffect(() => {
    // This effect will be triggered when new jobs are loaded
    if (jobs.length > 0) {
      AOS.refresh(); // Recalculate AOS animations for updated DOM
    }
  }, [jobs]); // Trigger AOS.refresh whenever the jobs list is updated

  useEffect(() => {
    const loadMore = async () => {
      if (!loading && hasMore && inView) {
        setLoading(true);
        const newJobs = await fetchJobs(page);
        if (newJobs.length === 0) {
          setHasMore(false); // No more jobs, stop fetching
        } else {
          setJobs([...jobs, ...newJobs]);
          setPage(page + 1); // Increase the page number
        }
        setLoading(false);
      }
    };
  
    loadMore();
  }, [inView, loading, hasMore, page]);
  useEffect(() => {
    // Check if a job was clicked before and we have its ID
    if (lastClickedJobId) {
      const clickedJobElement = document.getElementById(lastClickedJobId);
      if (clickedJobElement) {
        // Scroll to the job
        clickedJobElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [lastClickedJobId]); // This effect runs whenever the last clicked job ID changes

/** HANDLERS **/

  const handleButtonClick = () => {
    setIsChecked((prev) => !prev); // Toggle the state
  };
  const [content, setContent] = useState('Welcome to my website');

  const handleTranslate = async (lang: string) => {
    setTargetLang(lang); // Update the target language

    try {
      const res = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: 'Welcome to my website', targetLang: lang }),
      });

      if (!res.ok) {
        throw new Error('Translation failed');
      }

      const data = await res.json();
      setTranslatedContent(data.translatedText);
    } catch (error) {
      console.error(error);
      setTranslatedContent('Error occurred while translating');
    }
    
    // Translate job data
    const translatedJobs = await Promise.all(
      jobs.map(async (job) => {
        const translatedTitle = await translateText(job.i18nTitle.EN_US, lang);
        const translatedDescription = await translateText(job.i18nDescription.EN_US, lang);
        return {
          ...job,
          title: translatedTitle,
          description: translatedDescription,
        };
      })
    );

    setJobs(translatedJobs); // Update jobs with translated data
  };
  return (
    <div className="w-fill bg-white pb-20 ">
      {/* Header */}
      <header className="sticky top-0 bg-white z-10 shadow-sm">
				<div data-aos="fade-up">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold">{translatedContent}</h1> {/* Translated Content */}
            <span className="text-blue-500">Jobs</span>
          </div>
          <div className="flex items-center gap-2">
          <LanguageSwitcher onTranslate={handleTranslate} />
          <Search className="w-6 h-6 text-gray-500" />
          </div>
        </div>

        <div className="flex items-center px-4 pb-4 space-x-2">
          <button className="flex items-center space-x-1 bg-gray-100 px-3 py-1 rounded-full">
            <RefreshCcw className="w-4 h-4" />
            <span>Initialize</span>
          </button>
          <button className="flex items-center space-x-1 bg-gray-100 px-3 py-1 rounded-full">
            <span>Occupation</span>
          </button>
        </div>

        </div>
      </header>

      {/* Welcome Section */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <img
                className="text-blue-500"
                src="/images/foreeder-desk.blue.svg"
              ></img>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Welcome!</h2>
            </div>
          </div>
          <button 
            className="flex-shrink-0 group relative flex flex-row-reverse justify-start items-center gap-1 py-2"
            onClick={handleButtonClick} 
          >
            <img className="flex-shrink-0 size-4 bg-contain bg-no-repeat" src={isChecked ? '/icons/checked.blue.svg' : '/icons/checked-small.blue.svg'}  ></img>
            <label htmlFor="closed" className="text-sm text-gray-600">
              Open Jobs
            </label>
          </button>
        </div>
      </div>

      {/* Job Listings */}
      <div className="m-2 grid grid-cols-2 md:grid-cols-2 gap-4  ">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}

        {/* End of results */}
        {!hasMore && (
          <div className="text-center text-gray-500 py-4">
            No more jobs to load
          </div>
        )}
      </div>
      {/* Loading indicator */}
      <div ref={ref} className="flex justify-center items-center">
        {loading && (
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
        )}
      </div>
      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}

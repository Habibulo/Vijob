import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Job } from "@/libs/types/job";
import jobData from "@/libs/src/data.json/job.sample.json";
import JobDetails from "@/libs/components/JobDetail/jobDetails";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Details = () => {
  /** STATES **/
  const router = useRouter();
  const { id } = router.query; // Get the job ID from the query
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  /** LIFECYCLE **/

  useEffect(() => {
    if (id) {
      const jobIndex = jobData.findIndex((job) => job.id === Number(id));
      if (jobIndex >= 0) {
        setCurrentJobIndex(jobIndex);
        setJob(jobData[jobIndex]);
      } else {
        setError("Job not found");
      }
      setLoading(false);
    }
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  /** HANDLERS **/
  const handleNextJob = async () => {
    if (currentJobIndex < jobData.length - 1) {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 300));
      setCurrentJobIndex((prev) => prev + 1);
      setJob(jobData[currentJobIndex + 1]);
      setIsLoading(false);
    }
  };

  const handlePrevJob = async () => {
    if (currentJobIndex > 0) {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 300));
      setCurrentJobIndex((prev) => prev - 1);
      setJob(jobData[currentJobIndex - 1]);
      setIsLoading(false);
    }
  };
  const handleBackClick = () => {
    router.back(); // This will go back to the previous page in the browser's history stack
  };

  return (
    <>
      <div className="max-w-[470px] w-full mx-auto p-4 bg-white rounded-lg shadow-md relative">
        <div className="flex items-start justify-between">
          <div>
            <a 
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6 cursor-pointer"
              onClick={handleBackClick}
            >
              <img className="w-6 h-6" src="/icons/back.48x48.png" alt="" />
            </a>
          </div>
          <div className="justify-between gap-2">
            <Link href="/" legacyBehavior>
              <a className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6 cursor-pointer">
                <img className="w-6 h-6" src="/icons/share.svg" alt="" />
              </a>
            </Link>
            <Link href="/" legacyBehavior>
              <a className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6 cursor-pointer">
                <img className="w-6 h-6" src="/icons/more.48x48.png" alt="" />
              </a>
            </Link>
          </div>
        </div>
        <div className="p-1 mb-12">
          {job ? (
            <JobDetails
              job={job}
              prevJob={
                currentJobIndex > 0 ? jobData[currentJobIndex - 1] : null
              }
              nextJob={
                currentJobIndex < jobData.length - 1
                  ? jobData[currentJobIndex + 1]
                  : null
              }
              onNextJob={handleNextJob}
              onPrevJob={handlePrevJob}
              isFirst={currentJobIndex === 0}
              isLast={currentJobIndex === jobData.length - 1}
              isLoading={isLoading}
            />
          ) : (
            <div>No job details found.</div>
          )}
        </div>
        <div
          className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[470px] "
          style={{ boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              className="w-full h-16 text-white text-lg bg-blue-600 hover:bg-blue-700"
              size="lg"
            >
              Call
            </Button>
            <Button
              variant="outline"
              className="w-full h-16 text-white text-lg bg-blue-600 hover:bg-blue-700"
              size="lg"
            >
              Send SMS
            </Button>
          </div>
        </div>
      </div>
    </>
  );    
};

export default Details;

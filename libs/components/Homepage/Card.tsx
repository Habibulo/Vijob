import { Job } from "@/libs/types/job"
import { Badge, Building2, Clock, MapPin, Wallet } from "lucide-react"
import { useJobContext } from "@/context/JobContext";
import router from "next/router"

interface JobCardProps {
  job: Job
}

export function JobCard({ job }: JobCardProps) {
  const { setLastClickedJobId } = useJobContext();

  const handleClick = () => {
    // Store the clicked job ID in the context
    setLastClickedJobId(job.id);
    router.push({ pathname: '/home/details/', query: { id: job?.id } })
  }
  
  const imagePath = '/icons/nav-setting.48x48.png'
  return (
    <div data-aos="fade-up">
    <div 
      onClick={handleClick}
      className="cursor-pointer"
    >
    <div className="bg-white rounded-lg shadow-sm border p-4 hover:shadow-xl transition-shadow w-full h-auto flex flex-col">
      <div className="flex bg-gray-100 text-orange-400 text-[10px] font-medium rounded-md mb-2">
      <Badge className="w-4 h-4 mr-2" />
        {job?.business?.name}
      </div>

      <div className="bg-purple-50 text-purple-700 rounded-md mb-2 flex items-center">
        <Clock className="w-4 h-4 mr-2" />
        <span className=" text-[10px]">{job.startDate}</span>
      </div>

      <div className=" bg-green-50 text-green-700 flex items-center   text-[10px]  mb-2">
        <Wallet className="w-4 h-4 mr-2" />
        <span>
          {job.workWeekDays} {job.payAmount.toLocaleString()} KRW
        </span>
      </div>

      <div className="bg-orange-50 flex items-center justify-between">
        <div className=" text-red-600 flex items-center  text-[10px]">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{job.address.roadAddress}</span>
        </div>
      </div>
      <div className="flex mt-2">
        <div className="flex items-center text-[10px]">
          <Building2 className="w-4 h-4 mr-1" />
          <span className="bg-black text-white  text-[8px] px-2 py-0.5 rounded-full">{job.business.name}</span>
        </div>
      </div>
      <div className="flex mt-2 ">
        <div className="flex items-center text-[10px] gap-1">
        <img
          src={imagePath}
          // `${REACT_APP_API_URL}/${job?.memberData?.memberImage}`
          className="w-4 h-4 rounded-full object-cover hover:scale-110 transition-transform duration-300"
        />
          <span className="bg-black text-white  text-[8px] px-2 py-0.5 rounded-full">{job.i18nTitle.KO_KR}</span>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}


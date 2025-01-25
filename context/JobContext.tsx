import { Job } from "@/libs/types/job";
import { createContext, useContext, useState, ReactNode } from "react";

interface JobContextType {
  jobs: Job[];
  page: number;
  hasMore: boolean;
  lastClickedJobId: any | null; 
  setJobs: (jobs: Job[]) => void;
  setPage: (page: number) => void;
  setHasMore: (hasMore: boolean) => void;
  setLastClickedJobId: (id: any | null) => void;
}

const JobContext = createContext<JobContextType | undefined>(undefined);

export const JobProvider = ({ children }: { children: ReactNode }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [lastClickedJobId, setLastClickedJobId] = useState<string | null>(null);

  return (
    <JobContext.Provider value={{ jobs, page, hasMore, lastClickedJobId, setJobs, setPage, setHasMore, setLastClickedJobId, }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobContext = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error("useJobContext must be used within a JobProvider");
  }
  return context;
};

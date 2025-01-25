import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Star,
  Share2,
  MoreVertical,
  Briefcase,
  ThumbsUp,
  GraduationCap,
  Sparkles,
  Smile,
  Shield,
  UserPlus,
  Umbrella,
  MapPin,
  Copy,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Job } from "@/libs/types/job";

interface JobDetailsProps {
  job: Job;
  prevJob: Job | null;
  nextJob: Job | null;
  onNextJob: () => void;
  onPrevJob: () => void;
  isFirst: boolean;
  isLast: boolean;
  isLoading: boolean;
}

export default function JobDetails(props: JobDetailsProps) {
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "right"
  );
  const {
    job,
    prevJob,
    nextJob,
    onNextJob,
    onPrevJob,
    isFirst,
    isLast,
    isLoading,
  } = props;

  const handleNext = () => {
    setSlideDirection("right");
    onNextJob();
  };

  const handlePrev = () => {
    setSlideDirection("left");
    onPrevJob();
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto ">
      <div className="absolute left-0 top-64 -translate-y-1/2 z-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePrev}
          disabled={isFirst}
          className="rounded-full bg-white shadow-lg hover:bg-gray-100"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>

      <div className="absolute right-0 top-64 -translate-y-1/2 z-10 ">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleNext}
          disabled={isLast}
          className="rounded-full bg-white shadow-lg hover:bg-gray-100"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={job.id}
          initial={{
            opacity: 0,
            x: slideDirection === "right" ? 200 : -200,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: slideDirection === "right" ? -200 : 200,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-none shadow-xl">
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1">
                  <h1 className="text-2xl font-bold mb-2">
                    {job.i18nTitle.KO_KR}
                  </h1>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{job.address.roadAddress}</span>
                    <span className="px-2 py-1 rounded-full bg-gray-100 text-xs">
                      {job.business.address.jibunAddress}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Share2 className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="font-medium">{job.business.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>{job.business.establishedDate}</span>
                </div>
                <div className="text-2xl font-bold text-primary">
                  {job.payAmount.toLocaleString()} {job.payAmount}
                  <span className="text-sm font-normal text-muted-foreground ml-1">
                    /{job.startDate}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-white rounded-lg text-center">
                  <div className="text-4xl mb-2">🎓</div>
                  <p className="text-sm">
                    {job.address.addressDetail
                      ? "Education Required"
                      : "No Education Required"}
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg text-center">
                  <div className="text-4xl mb-2">⭐</div>
                  <p className="text-sm">
                    {job.business.address.addressDetail
                      ? "Experience Required"
                      : "No Experience Required"}
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <div className="max-w-2xl mx-auto p-4 space-y-8">
            {/* Requirements Section */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ThumbsUp className="w-6 h-6" />
                  <h2 className="text-xl font-bold">We prefer these people!</h2>
                </div>
                <Button variant="outline">View More</Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-6 text-center space-y-2">
                    <div className="bg-gray-100 p-4 rounded-lg inline-block">
                      <GraduationCap className="w-8 h-8" />
                    </div>
                    <p className="font-medium">No Educational Requirement</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center space-y-2">
                    <div className="bg-gray-100 p-4 rounded-lg inline-block">
                      <Sparkles className="w-8 h-8" />
                    </div>
                    <p className="font-medium">No Experience Required</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center space-y-2">
                    <div className="bg-gray-100 p-4 rounded-lg inline-block">
                      <Smile className="w-8 h-8" />
                    </div>
                    <p className="font-medium">
                      No Korean Language Proficiency Required
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Benefits Section */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6">🎁</div>
                  <h2 className="text-xl font-bold">
                    We provide these things!
                  </h2>
                </div>
                <Button variant="outline">View More</Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-6 text-center space-y-2">
                    <div className="bg-gray-100 p-4 rounded-lg inline-block">
                      <Shield className="w-8 h-8" />
                    </div>
                    <p className="font-medium">Four Major Social Insurances</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center space-y-2">
                    <div className="bg-gray-100 p-4 rounded-lg inline-block">
                      <UserPlus className="w-8 h-8" />
                    </div>
                    <p className="font-medium">Additional Allowances</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center space-y-2">
                    <div className="bg-gray-100 p-4 rounded-lg inline-block">
                      <Umbrella className="w-8 h-8" />
                    </div>
                    <p className="font-medium">Rest Support</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Location Section */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-6 h-6" />
                <h2 className="text-xl font-bold">
                  {job.address.jibunAddress}
                </h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm">
                    {job.address.roadAddress}{" "}
                    {job.business.address.addressDetail}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <Copy className="w-4 h-4" />
                    Copy address
                  </Button>
                </div>

                <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25867.098915951767!2d128.68632810247993!3d35.86402299180927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35660bba427bf179%3A0x1fc02da732b9072f!2sGeumhogangbyeon-ro%2C%20Dong-gu%2C%20Daegu!5e0!3m2!1suz!2skr!4v1695537640704!5m2!1suz!2skr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </section>

            {/* Details Section */}
            <section className="space-y-4 mb-4">
              <div className="flex items-center gap-2">
                <Briefcase className="w-6 h-6" />
                <h2 className="text-xl font-bold">Details</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-6 h-6" />
                  <strong>
                    <h3 className="text-xl font-bold ">Job Description</h3>
                  </strong>
                </div>
                <p className="text-lg">
                  {job.i18nDescription.KO_KR} {job.i18nTitle.KO_KR}
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

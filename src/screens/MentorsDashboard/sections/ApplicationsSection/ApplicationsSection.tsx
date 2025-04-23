import {
  ArrowUpRightIcon,
  CalendarIcon,
  ClockIcon,
  MoreVerticalIcon,
} from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

// Define meeting data for reusability
const meetingData = [
  {
    id: 1,
    image: "/rectangle-12322.png",
    status: "ongoing",
    title: "Weekly Meeting - Product Demo Review with Testers",
    date: "Mon. Jul 30, 2024",
    time: "9:00 - 11:00AM",
    studyGroup: "UX Strategy  Study group",
    mentors: [
      { image: "/ellipse-13-3.png", alt: "Mentor 1" },
      { image: "/ellipse-25.png", alt: "Mentor 2" },
      { image: "/ellipse-23-2.png", alt: "Mentor 3" },
    ],
    joinEnabled: true,
  },
  {
    id: 2,
    image: "/rectangle-12322-1.png",
    status: "upcoming",
    title: "Weekly Meeting - Product Demo Review with Testers",
    date: "Mon. Jul 30, 2024",
    time: "9:00 - 11:00AM",
    studyGroup: "UX Strategy  Study group",
    mentors: [
      { image: "/ellipse-13-3.png", alt: "Mentor 1" },
      { image: "/ellipse-25.png", alt: "Mentor 2" },
      { image: "/ellipse-23-2.png", alt: "Mentor 3" },
    ],
    joinEnabled: false,
  },
  {
    id: 3,
    image: "/rectangle-12322-2.png",
    status: "ongoing",
    title: "Weekly Meeting - Product Demo Review with Testers",
    date: "Mon. Jul 30, 2024",
    time: "9:00 - 11:00AM",
    studyGroup: "UX Strategy  Study group",
    mentors: [
      { image: "/ellipse-13-3.png", alt: "Mentor 1" },
      { image: "/ellipse-25.png", alt: "Mentor 2" },
      { image: "/ellipse-23-2.png", alt: "Mentor 3" },
    ],
    joinEnabled: true,
  },
];

export const ApplicationsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[762px] bg-white rounded-[10.52px] overflow-hidden">
      <header className="flex items-center justify-between px-[38px] py-[6px] relative">
        <div className="flex items-center gap-2">
          <img className="w-[11px] h-2.5" alt="Vector" src="/vector.svg" />
          <h2 className="font-['Chivo',Helvetica] font-bold text-[#b0b0b0] text-base">
            Group Calls
          </h2>
        </div>

        <div className="font-['Chivo',Helvetica] font-semibold text-[#6f01d0] text-[12.3px] tracking-[-0.06px] cursor-pointer">
          See all
        </div>

        <MoreVerticalIcon className="w-[18px] h-[18px] text-gray-500 absolute right-3 top-4" />
      </header>

      <div className="flex gap-[7px] p-[6px] overflow-x-auto">
        {meetingData.map((meeting) => (
          <Card
            key={meeting.id}
            className="flex-shrink-0 w-[270px] bg-[#f9f7ff] rounded-[9.7px] border-none"
          >
            <CardContent className="p-[12.93px] space-y-[6.47px]">
              <img
                className="w-full h-[68.7px] rounded-[5px] object-cover"
                alt="Meeting banner"
                src={meeting.image}
              />

              <div className="flex items-center">
                <Badge
                  className={`flex items-center gap-[5px] px-5 py-[2.5px] rounded-[14.99px] ${
                    meeting.status === "ongoing"
                      ? "bg-[#29c10033] text-[#1e8a00]"
                      : "bg-[#dfdcff] text-[#1b09e1]"
                  }`}
                >
                  <div
                    className={`w-[6.24px] h-[6.24px] rounded-[3.12px] ${
                      meeting.status === "ongoing"
                        ? "bg-[#1e8a00]"
                        : "bg-[#1b09e1]"
                    }`}
                  />
                  <span className="font-normal text-[10px] tracking-[-0.20px]">
                    {meeting.status === "ongoing" ? "Ongoing" : "Upcoming"}
                  </span>
                </Badge>
              </div>

              <div className="h-[40.16px]">
                <h3 className="font-['Chivo',Helvetica] font-normal text-font-colour text-[16.8px]">
                  {meeting.title}
                </h3>
              </div>

              <Separator className="bg-grey-300" />

              <div className="space-y-[9.7px]">
                <div className="flex items-center">
                  <div className="flex items-center gap-[5.66px] pr-[7.27px] border-r-[0.81px] border-[#d0d5dd]">
                    <CalendarIcon className="w-[11.17px] h-[11.17px] text-[#595463]" />
                    <span className="font-['Chivo',Helvetica] font-medium text-[#595463] text-[8.1px]">
                      {meeting.date}
                    </span>
                  </div>

                  <div className="flex items-center gap-[5.66px] pl-[10px]">
                    <ClockIcon className="w-[11.31px] h-[11.31px] text-[#595463]" />
                    <span className="font-['Chivo',Helvetica] font-medium text-[#595463] text-[8.1px]">
                      {meeting.time}
                    </span>
                  </div>
                </div>

                <div className="flex items-start justify-between px-[6.47px]">
                  <div className="flex flex-col">
                    <div className="w-[11.52px] h-[11.52px] rounded-full bg-[url(..//frame-1321317355-2.png)] bg-cover" />
                    <div className="flex flex-col gap-[1.62px]">
                      <span className="font-['Chivo',Helvetica] font-normal text-[#a194bf] text-[6.5px] tracking-[-0.13px]">
                        Study Group
                      </span>
                      <span className="font-['Chivo',Helvetica] font-semibold text-[#595564] text-[8.1px]">
                        {meeting.studyGroup}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[1.62px]">
                    <span className="font-['Chivo',Helvetica] font-normal text-[#a194bf] text-[6.5px] tracking-[-0.13px]">
                      Mentors
                    </span>
                    <div className="flex items-center">
                      {meeting.mentors.map((mentor, index) => (
                        <img
                          key={index}
                          className={`w-[41.22px] h-[41.22px] object-cover rounded-full ${
                            index > 0 ? "ml-[-7.5px]" : ""
                          }`}
                          alt={mentor.alt}
                          src={mentor.image}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-[26.3px] pt-2">
                <Button
                  variant="outline"
                  className="h-[32.43px] rounded-[7.01px] border-[0.88px] border-[#6f01d0] text-[#6f01d0] font-medium text-[12.3px]"
                >
                  View Participants
                </Button>

                <Button
                  className={`h-[34.19px] rounded-[7.01px] ${
                    meeting.joinEnabled ? "bg-[#6f01d0]" : "bg-[#6f01d04c]"
                  } text-white font-medium text-[12.3px]`}
                >
                  Join Now
                  <ArrowUpRightIcon className="w-[21.04px] h-[21.04px] ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

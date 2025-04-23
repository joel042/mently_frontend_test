import { MoreHorizontalIcon, PlusIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";

// Data for mentors
const mentors = [
  {
    id: 1,
    name: "Maxwell Smith",
    role: "Product Designer",
    avatar: "/ellipse-56-5.png",
  },
  {
    id: 2,
    name: "Adeati Samuel",
    role: "Product Designer",
    avatar: "/ellipse-57-1.png",
  },
];

// Data for recent activities
const activities = [
  {
    id: 1,
    title: "KYC Verification",
    description: "45 new persons just signed up on Mently.",
    time: "25 minutes Ago",
    avatar: "/ellipse-56-7.png",
  },
  {
    id: 2,
    title: "New User Sign Up!",
    description: "45 new persons just signed up on Mently.",
    time: "25 minutes Ago",
    avatar: "/ellipse-57.png",
  },
  {
    id: 3,
    title: "Withdrawal Request",
    description: "Mardian requested a withdrawal.",
    time: "25 minutes Ago",
    avatar: "/ellipse-57-1.png",
  },
];

export const GroupCallsSection = (): JSX.Element => {
  return (
    <div className="flex flex-col w-80 gap-4">
      {/* Mentors Card */}
      <Card className="w-full">
        <CardHeader className="px-6 py-0 pt-3 flex flex-row items-center justify-between">
          <CardTitle className="font-bold text-base text-[#b0b0b0] [font-family:'Chivo',Helvetica]">
            Mentors
          </CardTitle>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="w-6 h-6 rounded-xl border-[1.14px] border-solid border-[#9c92a6] p-0"
            >
              <PlusIcon className="h-3.5 w-3.5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
              <MoreHorizontalIcon className="h-[18px] w-[18px]" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="px-6 pt-4 pb-6 flex flex-col gap-4">
          {mentors.map((mentor) => (
            <div
              key={mentor.id}
              className="flex items-center justify-between py-2 border-b border-[#f3f3f3]"
            >
              <div className="flex items-center gap-2">
                <img
                  className="w-8 h-8 object-cover rounded-full"
                  alt={`${mentor.name}'s avatar`}
                  src={mentor.avatar}
                />
                <div className="flex flex-col gap-0.5">
                  <div className="[font-family:'Chivo',Helvetica] font-bold text-gray-2 text-[14.4px] leading-[21.6px]">
                    {mentor.name}
                  </div>
                  <div className="[font-family:'Chivo',Helvetica] font-normal text-[#7d8da6] text-[10px]">
                    {mentor.role}
                  </div>
                </div>
              </div>
              <Button
                size="sm"
                className="bg-[#6f01d0] text-[#f0edff] rounded-2xl px-3 py-1 h-auto text-xs tracking-[-0.06px]"
              >
                Message
              </Button>
            </div>
          ))}
          <Button
            variant="outline"
            className="w-full bg-[#ddd6fb] text-[#6f01d0] font-semibold rounded-3xl border-none hover:bg-[#d0c6f9] hover:text-[#6f01d0]"
          >
            See all
          </Button>
        </CardContent>
      </Card>

      {/* Recent Activities Card */}
      <Card className="w-full">
        <CardHeader className="px-6 py-0 pt-3 flex flex-row items-center justify-between">
          <CardTitle className="font-bold text-base text-[#b0b0b0] [font-family:'Chivo',Helvetica]">
            Recent Activities
          </CardTitle>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-[#6f01d0] tracking-[-0.07px] [font-family:'Chivo',Helvetica]">
              See all
            </span>
            <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
              <MoreHorizontalIcon className="h-[18px] w-[18px]" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="px-6 pt-4 pb-6 flex flex-col gap-4">
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className={`flex items-start gap-2 py-1 ${
                index < activities.length - 1 ? "border-b border-[#f0efef]" : ""
              }`}
            >
              <img
                className="w-8 h-8 object-cover rounded-full"
                alt={`Activity icon`}
                src={activity.avatar}
              />
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1.5">
                  <div className="[font-family:'Chivo',Helvetica] font-bold text-rich-black text-sm leading-4">
                    {activity.title}
                  </div>
                  <div className="[font-family:'Chivo',Helvetica] font-normal text-navy-grey text-xs leading-[14px]">
                    {activity.description}
                  </div>
                </div>
                <div className="[font-family:'Chivo',Helvetica] font-light text-navy-grey text-xs leading-5">
                  {activity.time}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

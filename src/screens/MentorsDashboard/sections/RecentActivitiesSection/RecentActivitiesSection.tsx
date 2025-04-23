import { MoreVerticalIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";

// Application data for mentors and students
const mentorApplications = [
  {
    id: 1,
    name: "Maxwell Smith",
    email: "maxwellsmith@gmail.com",
    image: "/ellipse-56-5.png",
    tags: [
      {
        text: "Product Designer",
        className: "bg-[#f3ecf9] text-[#9984a7] border-[#dccded]",
      },
      {
        text: "4years Experience",
        className: "bg-[#e7fcfa] text-[#58938e] border-[#a1bcba]",
      },
      {
        text: "Lagos, Nigeria",
        className: "bg-[#e3ecf9] text-[#8096b5] border-[#abbee0]",
        hasIcon: true,
      },
      {
        text: "GMT +1",
        className: "bg-[#f4f4f4] text-[#595463] border-[#c8c8c8]",
      },
    ],
  },
];

const studentApplications = [
  {
    id: 1,
    name: "Adeati Samuel",
    email: "maxwellsmith@gmail.com",
    image: "/ellipse-57-1.png",
  },
  {
    id: 2,
    name: "Maxwell Smith",
    email: "maxwellsmith@gmail.com",
    image: "/ellipse-56-5.png",
  },
  {
    id: 3,
    name: "Adeati Samuel",
    email: "maxwellsmith@gmail.com",
    image: "/ellipse-57-1.png",
    isEmailLink: true,
  },
  {
    id: 4,
    name: "Maxwell Smith",
    email: "maxwellsmith@gmail.com",
    image: "/ellipse-56-5.png",
  },
];

export const RecentActivitiesSection = (): JSX.Element => {
  return (
    <Card className="flex flex-col w-full h-full">
      <CardHeader className="flex flex-row items-center justify-between p-4">
        <div className="flex items-center gap-2.5">
          <img className="w-[11px] h-2.5" alt="Vector" src="/vector.svg" />
          <h3 className="font-['Chivo',Helvetica] font-bold text-[#b0b0b0] text-base">
            Applications
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-['Chivo',Helvetica] font-semibold text-[#6f01d0] text-sm tracking-[-0.07px]">
            See all
          </span>
          <MoreVerticalIcon className="w-[18px] h-[18px] text-gray-500" />
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-5 p-4 pt-0">
        {/* Mentors Section */}
        <div className="flex flex-col gap-2">
          <div className="px-6 py-2">
            <span className="font-['Chivo',Helvetica] font-normal text-[#7d8da6] text-[10px]">
              Mentors
            </span>
          </div>

          <div className="flex flex-col">
            {mentorApplications.map((mentor) => (
              <div key={mentor.id} className="border-b border-[#dadada] pb-6">
                <div className="flex items-center justify-between py-4">
                  <div className="flex items-center gap-4">
                    <Checkbox className="w-3.5 h-[13px] rounded-sm border-[#a4a4a4]" />
                    <img
                      className="w-8 h-8 object-cover rounded-full"
                      alt={mentor.name}
                      src={mentor.image}
                    />
                    <div className="flex flex-col gap-0.5">
                      <span className="font-['Chivo',Helvetica] font-bold text-gray-2 text-[14.4px] leading-[21.6px]">
                        {mentor.name}
                      </span>
                      <span className="font-['Chivo',Helvetica] font-normal text-[#7d8da6] text-[10px]">
                        {mentor.email}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-[6.11px]">
                    <Button
                      variant="outline"
                      className="h-auto px-[24.42px] py-[9.77px] bg-[#ffeded] text-[#d83535] rounded-[6.11px] border-[0.61px] border-[#cf9696] hover:bg-[#ffeded] hover:text-[#d83535]"
                    >
                      <span className="font-['Chivo',Helvetica] font-medium text-[9.8px]">
                        Reject
                      </span>
                    </Button>
                    <Button className="h-auto px-[24.42px] py-[9.77px] bg-[#6f01d0] text-white rounded-[6.11px] hover:bg-[#6f01d0]/90">
                      <span className="font-['Chivo',Helvetica] font-medium text-[9.8px]">
                        Accept
                      </span>
                    </Button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-[3.46px] pl-[26.38px]">
                  {mentor.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className={`h-[19px] px-[3.46px] py-0 rounded-[5.19px] border-[0.86px] ${tag.className}`}
                    >
                      {tag.hasIcon && (
                        <img
                          className="w-[12.78px] h-[7.78px]"
                          alt="Vector"
                          src="/vector-1.svg"
                        />
                      )}
                      <span className="font-['Chivo',Helvetica] font-medium text-[8.6px] leading-[22.5px]">
                        {tag.text}
                      </span>
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Students Section */}
        <div className="flex flex-col gap-2">
          <div className="px-6 py-2">
            <span className="font-['Chivo',Helvetica] font-normal text-[#7d8da6] text-[10px]">
              Students
            </span>
          </div>

          <div className="flex flex-col">
            {studentApplications.map((student) => (
              <div
                key={student.id}
                className="border-b border-[#dadada] py-4 last:border-0"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Checkbox className="w-3.5 h-[13px] rounded-sm border-[#a4a4a4]" />
                    <img
                      className="w-8 h-8 object-cover rounded-full"
                      alt={student.name}
                      src={student.image}
                    />
                    <div className="flex flex-col gap-0.5">
                      <span className="font-['Chivo',Helvetica] font-bold text-gray-2 text-[14.4px] leading-[21.6px]">
                        {student.name}
                      </span>
                      {student.isEmailLink ? (
                        <a
                          className="font-['Chivo',Helvetica] font-normal text-[#7d8da6] text-[10px] underline"
                          href={`mailto:${student.email}`}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {student.email}
                        </a>
                      ) : (
                        <span className="font-['Chivo',Helvetica] font-normal text-[#7d8da6] text-[10px]">
                          {student.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-[6.11px]">
                    <Button
                      variant="outline"
                      className="h-auto px-[24.42px] py-[9.77px] bg-[#ffeded] text-[#d83535] rounded-[6.11px] border-[0.61px] border-[#cf9696] hover:bg-[#ffeded] hover:text-[#d83535]"
                    >
                      <span className="font-['Chivo',Helvetica] font-medium text-[9.8px]">
                        Reject
                      </span>
                    </Button>
                    <Button className="h-auto px-[24.42px] py-[9.77px] bg-[#6f01d0] text-white rounded-[6.11px] hover:bg-[#6f01d0]/90">
                      <span className="font-['Chivo',Helvetica] font-medium text-[9.8px]">
                        Accept
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

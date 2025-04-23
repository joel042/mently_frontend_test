import { MenuIcon, SettingsIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

export const UserProfileSection = (): JSX.Element => {
  // Program data for mapping
  const programs = [
    {
      id: 1,
      title: "Fundamentals of User interface & Experience",
      type: "Bootcamp",
      typeColor: "#0077ff",
      typeBgColor: "#d3dff2",
      description:
        "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
      image: "/rectangle-12322-3.png",
      hasMentors: true,
      host: null,
      buttons: ["View Details", "Analysis"],
    },
    {
      id: 2,
      title: "Colour Hack Practical Group Call",
      type: "Group Call",
      typeColor: "#008000",
      typeBgColor: "#d3f2d3",
      description:
        "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
      image: "/rectangle-12322-3.png",
      hasMentors: false,
      host: {
        name: "Faith Okolo",
        avatar: "/man-438081-960-720.png",
      },
      buttons: ["View Details", "Analyis"],
    },
    {
      id: 3,
      title: "Colour Hack Practical Group Call",
      type: "Group Call",
      typeColor: "#008000",
      typeBgColor: "#d3f2d3",
      description:
        "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
      image: "/rectangle-12322-4.png",
      hasMentors: false,
      host: {
        name: "Self",
        avatar: "/man-438081-960-720-1.png",
      },
      buttons: ["View Details", "Assign Mentor"],
    },
  ];

  return (
    <Card className="w-[329px] rounded-[12.04px] overflow-hidden">
      <CardContent className="p-0">
        <div className="flex items-center justify-between p-[12.04px] mx-2">
          <div className="flex items-center gap-3.5">
            <MenuIcon className="w-4 h-4" />
            <div className="font-bold text-[#b0b0b0] text-base">Programs</div>
          </div>
          <div className="flex items-center">
            <span className="text-[12.3px] font-semibold text-[#6f01d0]">
              See all
            </span>
            <img
              className="w-[18px] h-[18px] ml-1"
              alt="More"
              src="/tdesign-more.svg"
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-[11px] px-4 py-2">
          <div className="text-[#908c9c] text-[11.3px] font-medium">Filter</div>
          <div className="flex items-center">
            <Select>
              <SelectTrigger className="w-20 h-[23px] px-[9.65px] py-[6.43px] text-[11.3px] font-medium border-[#e1e7ec] rounded-[3.22px]">
                <SelectValue placeholder="Active" />
              </SelectTrigger>
            </Select>
          </div>
        </div>

        <div className="flex flex-col px-3.5 gap-2 mt-2">
          {programs.map((program) => (
            <Card
              key={program.id}
              className="shadow-[0px_4.93px_5.17px_#afaaaa4c] rounded-[9.85px] p-[13.14px]"
            >
              <CardContent className="p-0 space-y-[6.57px]">
                <div className="relative h-[69.8px] rounded-[6.57px] overflow-hidden">
                  {program.id === 1 ? (
                    <div className="h-full w-full [background:linear-gradient(180deg,rgba(12,12,12,0.55)_0%,rgba(0,0,0,0.69)_100%),url(..//program-banner-with-image.png)_50%_50%_/_cover]">
                      <SettingsIcon className="absolute w-[13px] h-[13px] top-2 right-2" />
                    </div>
                  ) : (
                    <>
                      <img
                        className="w-full h-full object-cover"
                        alt="Program banner"
                        src={program.image}
                      />
                    </>
                  )}

                  <div className="absolute top-[18px] left-[23px] flex flex-col w-56 gap-[6.57px]">
                    <div className="text-white font-bold text-[16.4px] leading-tight">
                      {program.title}
                    </div>
                  </div>

                  <Badge
                    className="absolute top-16 left-[21px] px-[9.85px] py-[1.64px] rounded-[9.85px] bg-opacity-100"
                    style={{
                      backgroundColor: program.typeBgColor,
                      color: program.typeColor,
                    }}
                  >
                    <div className="flex items-center gap-[3.28px]">
                      <div
                        className="w-[4.11px] h-[4.11px] rounded-[2.05px]"
                        style={{ backgroundColor: program.typeColor }}
                      />
                      <span className="font-bold text-[6.6px] tracking-[-0.13px]">
                        {program.type}
                      </span>
                    </div>
                  </Badge>
                </div>

                <div className="text-grey-grey-3 text-[10px] tracking-[-0.20px]">
                  {program.description}
                </div>

                <div className="flex items-end justify-between w-full">
                  {program.hasMentors ? (
                    <div className="flex items-center gap-[5.56px]">
                      <div className="inline-flex items-center relative">
                        <img
                          className="w-[69.53px] h-[69.53px] mt-[-25.03px] mb-[-30.59px] ml-[-20.86px] mr-[-15.30px] relative object-cover"
                          alt="Mentor"
                          src="/ellipse-13-3.png"
                        />
                        <img
                          className="w-[69.53px] h-[69.53px] mt-[-25.03px] mb-[-30.59px] ml-[-15.17px] mr-[-25.03px] relative object-cover"
                          alt="Mentor"
                          src="/ellipse-18.png"
                        />
                        <img
                          className="w-[69.53px] h-[69.53px] mt-[-25.03px] mb-[-30.59px] ml-[-5.17px] mr-[-34.76px] relative object-cover"
                          alt="Mentor"
                          src="/ellipse-25.png"
                        />
                      </div>
                      <div className="font-semibold text-[#6b6b6b] text-[8.3px] leading-[9.7px]">
                        Mentors
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <img
                        className="w-5 h-5"
                        alt="Host avatar"
                        src={program.host?.avatar}
                      />
                      <div className="ml-[6px] text-grey-grey-3 text-[8.2px] tracking-[-0.16px]">
                        Hosted By: {program.host?.name}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-[5.26px]">
                    <Button
                      variant="outline"
                      className="h-[22.17px] px-[15.77px] py-[5.26px] rounded-[2.63px] border-[0.66px] border-[#6f01d0] text-[#6f01d0] text-[8px]"
                    >
                      {program.buttons[0]}
                    </Button>
                    <Button className="h-[22.17px] px-[15.77px] py-[5.26px] rounded-[2.63px] bg-[#6f01d0] text-grey-white text-[8px]">
                      {program.buttons[1]}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

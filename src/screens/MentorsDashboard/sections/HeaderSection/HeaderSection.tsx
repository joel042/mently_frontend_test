import { BellIcon, ChevronDownIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="w-full h-[82px] bg-[#fdfdfd] shadow-[0px_2px_4px_#00000010] flex items-center justify-end px-6">
      <div className="flex items-center gap-6">
        <div className="relative">
          <BellIcon className="w-6 h-6 text-gray-600" />
          <Badge className="absolute w-2 h-2 p-0 rounded-full bg-[#6f01d0] top-0 right-0" />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Avatar className="w-11 h-11">
                <AvatarImage src="/user-image.png" alt="User image" />
                <AvatarFallback>TF</AvatarFallback>
              </Avatar>

              <div className="absolute w-8 h-[26px] top-2 left-[7px]">
                <div className="relative h-[26px]">
                  <img
                    className="absolute w-8 h-[25px] top-0 left-0"
                    alt="Path"
                    src="/path-1294.svg"
                  />
                  <div className="absolute w-[26px] h-[23px] top-[3px] left-1">
                    <div className="relative h-[23px]">
                      <img
                        className="absolute w-4 h-[11px] top-0 left-2.5"
                        alt="Group"
                        src="/group-445.png"
                      />
                      <img
                        className="absolute w-[15px] h-[11px] top-3 left-0"
                        alt="Group"
                        src="/group-446.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="font-['Chivo',Helvetica] font-normal text-neutral-700 text-sm">
                Techrity&nbsp;&nbsp;Foun...
              </div>
              <div className="font-['Chivo',Helvetica] font-normal text-primaryprimary-3 text-xs">
                Member
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-[19px] h-[18px] bg-[#6f01d0] rounded">
            <ChevronDownIcon className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};

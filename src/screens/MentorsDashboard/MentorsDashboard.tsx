import { BookIcon, LayoutGridIcon, RowsIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { ApplicationsSection } from "./sections/ApplicationsSection/ApplicationsSection";
import { GroupCallsSection } from "./sections/GroupCallsSection/GroupCallsSection";
import { HeaderSection } from "./sections/HeaderSection";
import { RecentActivitiesSection } from "./sections/RecentActivitiesSection";
import { SideNavigationSection } from "./sections/SideNavigationSection";
import { UserProfileSection } from "./sections/UserProfileSection";
import { UserStatisticsSection } from "./sections/UserStatisticsSection";

export const MentorsDashboard = (): JSX.Element => {
  return (
    <div className="bg-[#f4f5fa] flex flex-row justify-center w-full min-h-screen">
      <div className="bg-[#f4f5fa] w-full max-w-[1440px] relative flex flex-col">
        {/* Side Navigation */}
        <div className="fixed w-60 h-full left-0 top-0 z-10">
          <SideNavigationSection />
          <div className="flex max-w-[207px] w-[207px] items-center gap-8 px-8 py-4 mt-[212px] ml-4 rounded-lg">
            <BookIcon className="w-5 h-5 text-greygrey-4" />
            <div className="font-['Chivo',Helvetica] font-normal text-greygrey-4 text-base">
              Programs
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-60 flex-1">
          {/* Header */}
          <HeaderSection />

          {/* Manage Widgets */}
          <div className="flex items-center gap-[23px] absolute top-[99px] right-[40px]">
            <div className="flex items-center gap-6">
              <RowsIcon className="w-6 h-6" />
              <LayoutGridIcon className="w-[30px] h-[26px]" />
            </div>
            <div className="font-['Chivo',Helvetica] font-bold text-[#1f0954] text-base">
              Manage Widgets
            </div>
          </div>

          {/* Welcome Banner */}
          <div className="w-full max-w-[1100px] h-[51px] mt-36 mx-auto bg-[#6f01cf] rounded flex items-center justify-between px-7">
            <div className="flex items-center">
              <div className="font-['Chivo',Helvetica] font-semibold text-white text-[26.2px] leading-[36.7px] tracking-[-0.07px]">
                Welcome Aboard, Blessing 👋
              </div>
              <div className="ml-4 font-['Chivo',Helvetica] font-semibold text-[#bdbdbd] text-xl tracking-[-0.20px] leading-7">
                We&apos;re thrilled to have you join Techrity Team!
              </div>
            </div>
            <Button className="h-[39px] bg-white text-[#1f0954] hover:bg-gray-100 rounded-lg">
              <span className="font-['Chivo',Helvetica] font-bold text-base">
                Update Profile
              </span>
            </Button>
          </div>

          {/* Dashboard Grid Layout */}
          <div className="grid grid-cols-12 gap-4 mt-4 px-4 pb-8">
            {/* Left Column */}
            <div className="col-span-3">
              <UserProfileSection />
              <div className="mt-4">
                <UserStatisticsSection />
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-9">
              <div className="mb-4">
                <ApplicationsSection />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <RecentActivitiesSection />
                <GroupCallsSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import {
  AwardIcon,
  BarChartIcon,
  BookOpenIcon,
  ClipboardListIcon,
  LayoutDashboardIcon,
  LayoutGridIcon,
  LogOutIcon,
  MessageSquareIcon,
  SettingsIcon,
  UserSquareIcon,
  UsersIcon,
  WalletIcon,
} from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Switch } from "../../../../components/ui/switch";

export const SideNavigationSection = (): JSX.Element => {
  // Navigation items data for mapping
  const navigationItems = [
    {
      icon: <LayoutDashboardIcon className="w-5 h-5" />,
      label: "Dashboard",
      active: true,
    },
    { icon: <BookOpenIcon className="w-5 h-5" />, label: "Programs" },
    { icon: <MessageSquareIcon className="w-5 h-5" />, label: "Activities" },
    { icon: <UsersIcon className="w-6 h-6" />, label: "Users" },
    {
      icon: <ClipboardListIcon className="w-5 h-5" />,
      label: "Forums",
      textColor: "#c2c2c2",
    },
    { icon: <WalletIcon className="w-5 h-5" />, label: "Finances" },
    { icon: <AwardIcon className="w-6 h-6" />, label: "Rewards" },
    {
      icon: <BarChartIcon className="w-6 h-6" />,
      label: "Analytics",
      badge: {
        text: "Coming Soon",
        color: "primaryprimary-6",
        bgColor: "#0214bd38",
      },
    },
    { icon: <SettingsIcon className="w-6 h-6" />, label: "Settings" },
  ];

  return (
    <nav className="w-60 h-full bg-[#340260] flex flex-col">
      {/* Logo section */}
      <div className="flex items-center gap-[21px] p-9 relative">
        <img
          className="w-[116px] h-[27px] object-cover"
          alt="Techrity Logo"
          src="/t4g23-style-guide-v2-updated-2.png"
        />
        <LayoutGridIcon className="w-6 h-6 text-white absolute right-4" />
      </div>

      {/* Navigation items */}
      <div className="flex flex-col items-start gap-2 px-4 mt-8">
        {navigationItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className={`w-full flex items-center justify-start gap-8 px-8 py-4 rounded-lg ${
              item.active ? "bg-grey-white" : "hover:bg-white/10"
            }`}
          >
            {item.icon}
            <span
              className={`font-normal text-base ${
                item.active
                  ? "text-[#1f0954]"
                  : item.textColor
                    ? item.textColor
                    : "text-greygrey-4"
              }`}
            >
              {item.label}
            </span>

            {item.badge && (
              <Badge className="ml-auto px-1 py-0.5 bg-[#0214bd38] text-primaryprimary-6 rounded-[50px]">
                <span className="text-[10px]">{item.badge.text}</span>
              </Badge>
            )}
          </Button>
        ))}

        {/* Log Out button */}
        <Button
          variant="ghost"
          className="w-full flex items-center justify-start gap-8 px-8 py-4 mt-4 rounded-lg hover:bg-white/10"
        >
          <LogOutIcon className="w-5 h-5 text-greygrey-4" />
          <span className="font-normal text-base text-greygrey-4">Log Out</span>
        </Button>
      </div>

      {/* Help desk section */}
      <div className="mx-2.5 mt-auto mb-8 p-4 bg-[#ffffff1f] rounded-lg flex flex-col">
        <div className="flex items-start">
          <UserSquareIcon className="w-5 h-5 text-white" />
        </div>
        <p className="mt-6 font-bold text-xs text-grey-white">
          Got some questions, enquiries or need help?
        </p>
        <a
          href="#"
          className="mt-4 font-normal text-[10px] text-secondarysecondary-3 underline"
        >
          Visit Mently Help Desk Here
        </a>
      </div>

      {/* Switch to classic mode */}
      <div className="flex items-center justify-between px-4 mb-4">
        <span className="font-bold text-xs text-[#f2f2f2]">
          Switch to Classic Mode
        </span>
        <Switch className="rotate-180" />
      </div>
    </nav>
  );
};

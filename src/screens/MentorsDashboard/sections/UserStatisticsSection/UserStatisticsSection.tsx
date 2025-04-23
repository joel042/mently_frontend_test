import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

export const UserStatisticsSection = (): JSX.Element => {
  // User statistics data
  const userData = {
    total: 240,
    categories: [
      { name: "Students", count: 200, color: "#62b2fd" },
      { name: "Mentors", count: 8, color: "#9bdfc4" },
      { name: "Programs", count: 22, color: "#f99bab" },
      { name: "Others", count: 10, color: "#ffb44f" },
    ],
  };

  return (
    <Card className="w-full max-w-[770px] h-80 bg-white rounded-2xl">
      <CardHeader className="flex flex-row items-center justify-between px-6 py-3 border-b border-[#e1e7ec]">
        <CardTitle className="font-semibold text-lg text-font-colour">
          Users
        </CardTitle>

        <Select defaultValue="all">
          <SelectTrigger className="w-auto h-9 px-3 py-2 border border-solid border-[#e1e7ec] rounded">
            <SelectValue
              placeholder="All"
              className="font-medium text-sm text-font-colour"
            >
              All
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="students">Students</SelectItem>
            <SelectItem value="mentors">Mentors</SelectItem>
            <SelectItem value="programs">Programs</SelectItem>
            <SelectItem value="others">Others</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>

      <CardContent className="flex flex-row items-center justify-between p-6 bg-[#e7ddff4c] rounded-b-xl">
        <div className="relative w-[180px] h-[180px]">
          {/* Donut chart SVG elements */}
          <div className="absolute w-[180px] h-[180px] top-0 left-0">
            <img
              className="absolute w-[90px] h-[180px] top-0 left-0"
              alt="Students segment"
              src="/ellipse-1.svg"
            />
            <img
              className="absolute w-[90px] h-[90px] top-[90px] left-[90px]"
              alt="Mentors segment"
              src="/ellipse-2.svg"
            />
            <img
              className="absolute w-14 h-[73px] top-[17px] left-[124px]"
              alt="Programs segment"
              src="/ellipse-3.svg"
            />
            <img
              className="absolute w-[42px] h-[42px] top-0.5 left-[101px]"
              alt="Others segment"
              src="/ellipse-4.svg"
            />
            <img
              className="absolute w-[17px] h-[33px] top-0 left-[90px]"
              alt="Chart connector"
              src="/ellipse-5.svg"
            />
          </div>

          {/* Center text */}
          <div className="absolute flex flex-col items-center justify-center w-full h-full top-0 left-0">
            <span className="font-bold text-2xl text-[#222529]">
              {userData.total}
            </span>
            <span className="opacity-85 font-normal text-xs text-font-colour">
              Users
            </span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-3 ml-5">
          {userData.categories.map((category, index) => (
            <div
              key={index}
              className="flex items-center justify-between w-[111px]"
            >
              <div className="flex items-center gap-1">
                <div
                  className="w-[8.4px] h-[8.4px] rounded-full"
                  style={{ backgroundColor: category.color }}
                />
                <span className="font-normal text-[10px] text-font-colour leading-3">
                  {category.name}
                </span>
              </div>
              <span className="font-bold text-xs text-font-colour leading-[14px]">
                {category.count}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

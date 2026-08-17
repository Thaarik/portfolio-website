"use client";
import { BriefcaseBusinessIcon, ChevronDown, SchoolIcon } from "lucide-react";
import { useState } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export interface ExperienceCardProps {
  theme: string | undefined;
  styleType: string;
  date: string;
  visible: boolean;
  title: string;
  company?: string | null;
  school?: string | null;
  location: string;
  description: string;
  notes?: string | null;
}

export const ExperienceCard = ({
  theme,
  styleType,
  date,
  visible,
  title,
  location,
  company,
  school,
  notes,
}: ExperienceCardProps) => {
  const [open, setOpen] = useState(false);

  const getBackgroundColor = () => {
    if (styleType === "education") {
      return theme === "light" ? "#ffe682" : "#16151F";
    }
    return theme === "light" ? "#89ffb2" : "#46173C";
  };

  const getTextColor = () => {
    return theme === "light" ? "#000000" : "#ffffff";
  };

  const getBorderColor = () => {
    if (styleType === "education") {
      return theme === "light" ? "#ffe682" : "#16151F";
    }
    return theme === "light" ? "#89ffb2" : "#46173C";
  };

  const icon =
    styleType === "work" ? <BriefcaseBusinessIcon /> : <SchoolIcon />;

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: getBackgroundColor(),
        color: getTextColor(),
        padding: "0",
        borderRadius: "8px",
        boxShadow:
          theme === "dark"
            ? "0 4px 6px -1px rgba(0, 0, 0, 0.5)"
            : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      }}
      contentArrowStyle={{
        borderRight: `7px solid ${getBorderColor()}`,
      }}
      iconStyle={{
        background: getBackgroundColor(),
        color: getTextColor(),
      }}
      date={date}
      icon={icon}
      visible={visible}
    >
      <div
        className="px-4 pt-4 pb-4"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <h3 className="vertical-timeline-element-title text-xl font-bold mb-2">
          {title}
        </h3>
        <p className="text-sm font-medium opacity-90 mb-1">
          {company ? company : school}
        </p>
        <p className="text-xs opacity-75">{location}</p>

        <Accordion
          type="single"
          collapsible
          value={open ? "item-1" : ""}
          className="mt-4 w-full"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger
              className={cn(
                "transition-all duration-300 hover:no-underline",
                theme === "dark" ? "text-white" : "text-gray-900",
              )}
              style={{ color: getTextColor() }}
            >
              <span className="flex items-center gap-2">
                <span className="text-sm font-semibold">
                  Hover to know more
                </span>
                <ChevronDown className="h-4 w-4 transition-transform duration-200" />
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed">
              <p className="opacity-90  whitespace-pre-line">{notes}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </VerticalTimelineElement>
  );
};

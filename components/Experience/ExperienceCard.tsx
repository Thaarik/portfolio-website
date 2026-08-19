"use client";
import { BriefcaseBusinessIcon, ChevronDown, SchoolIcon } from "lucide-react";
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
  const isLight = theme === "light";

  const getBackgroundColor = () => {
    if (styleType === "education") {
      return isLight
        ? "linear-gradient(135deg, #fef9c3 0%, #fffbeb 100%)"
        : "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)";
    }
    return isLight
      ? "linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%)"
      : "linear-gradient(135deg, #3b2a4d 0%, #2b1d3a 100%)";
  };

  const getTextColor = () => {
    return isLight ? "#0f172a" : "#ffffff";
  };

  const getBorderColor = () => {
    if (styleType === "education") {
      return isLight ? "#fde68a" : "#334155";
    }
    return isLight ? "#bae6fd" : "#5b3f73";
  };

  const noteItems =
    notes
      ?.split("\n")
      .map((line) => line.trim())
      .filter(Boolean) ?? [];

  const icon =
    styleType === "work" ? <BriefcaseBusinessIcon /> : <SchoolIcon />;

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: getBackgroundColor(),
        color: getTextColor(),
        padding: "0",
        borderRadius: "12px",
        border: `1px solid ${getBorderColor()}`,
        boxShadow: isLight
          ? "0 8px 20px -6px rgba(15, 23, 42, 0.12)"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.5)",
      }}
      contentArrowStyle={{
        borderRight: `7px solid ${getBorderColor()}`,
      }}
      iconStyle={{
        background: isLight ? "#ffffff" : "#2b1d3a",
        color: getTextColor(),
        border: `1px solid ${getBorderColor()}`,
        boxShadow: `0 0 0 4px ${getBorderColor()}33`,
      }}
      date={date}
      icon={icon}
      visible={visible}
    >
      <div className="px-4 pt-4 pb-4">
        <h3 className="vertical-timeline-element-title text-xl font-bold mb-2">
          {title}
        </h3>
        <p className="text-sm font-medium opacity-90 mb-1">
          {company ? company : school}
        </p>
        <p className="text-xs opacity-75">{location}</p>

        <Accordion type="single" collapsible className="mt-2 w-full">
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger
              className={cn(
                "transition-all duration-300 hover:no-underline",
                isLight ? "text-gray-900" : "text-white",
              )}
              style={{ color: getTextColor() }}
            >
              <span className="flex items-center gap-2">
                <span className="text-sm font-semibold">
                  Click to know more
                </span>
                <ChevronDown className="h-4 w-4 transition-transform duration-200" />
              </span>
            </AccordionTrigger>
            <AccordionContent>
              {noteItems.length > 1 ? (
                <ul className="space-y-2 opacity-90">
                  {noteItems.map((line, index) => (
                    <li key={index} className="flex gap-2 leading-relaxed">
                      <span className="shrink-0" aria-hidden>
                        •
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="whitespace-pre-line opacity-90 leading-relaxed">
                  {notes}
                </p>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </VerticalTimelineElement>
  );
};

"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

const menuItems = [
  {
    title: "GETTING STARTED",
    items: ["How to Get Started"],
  },
  {
    title: "GUIDED WALKTHROUGHS",
    items: ["Guided Walkthroughs"],
  },
  {
    title: "DEVDAY 2024",
    items: ["DEVDAY 2024"],
  },
  {
    title: "SESSION MANAGEMENT",
    items: ["SESSION MANAGEMENT"],
  },
  {
    title: "CONNECTIVITY MANAGEMENT",
    items: ["CONNECTIVITY MANAGEMENT"],
  },
  {
    title: "API ENDPOINTS",
    subtitle: "SEND & TRACK",
    items: ["Barcode", "Confirming", "Labelling", "Shipment", "ShippingStatus"],
  },
  {
    title: "PRIVATE NETWORK / MEC",
    items: ["PRIVATE NETWORK / MEC"],
  },
  {
    title: "EDGE TRANSPORTATION EXCHANGE",
    items: ["EDGE TRANSPORTATION EXCHANGE"],
  },
  {
    title: "DEVDAY 2023",
    items: ["DEVDAY 2023"],
  },
];

export default function MenuAccordion() {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [activeSubItem, setActiveSubItem] = useState<string | null>(null);

  return (
    <Accordion.Root
      type="single"
      collapsible
      value={openItem ?? undefined}
      onValueChange={(val) => setOpenItem(val === openItem ? null : val)}
      className="w-full space-y-1 font-sans text-sm"
    >
      {menuItems.map((section) => (
        <Accordion.Item key={section.title} value={section.title}>
          <Accordion.Header>
            <Accordion.Trigger
              className={twMerge(
                `w-full whitespace-normal leading-snug min-h-8 py-1 px-2 flex items-center justify-between text-sm font-normal text-left rounded`,
                openItem === section.title
                  ? "bg-sidebar-accent text-sidebar-primary"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground"
              )}
            >
              {section.title}
              <ChevronDown
                className={twMerge(
                  "h-4 w-4 transition-transform duration-200",
                  openItem === section.title && "rotate-180"
                )}
              />
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content className="pt-1 pb-2 pl-4 pr-2">
            {section.subtitle && (
              <div className="px-2 pb-1 text-xs font-semibold text-muted-foreground">
                {section.subtitle}
              </div>
            )}
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => setActiveSubItem(item)}
                    className={twMerge(
                      `w-full px-2 text-sm text-left rounded flex items-start justify-start whitespace-normal leading-snug min-h-8 py-1`,
                      activeSubItem === item
                        ? "bg-sidebar-accent text-white font-semibold"
                        : "text-sidebar-foreground font-normal hover:bg-sidebar-accent hover:text-sidebar-foreground"
                    )}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}

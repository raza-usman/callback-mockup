import { ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ServiceAccordion from "./common/ServiceAccordion";

const Sidebar = () => {
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
      items: [
        "Barcode",
        "Confirming",
        "Labelling",
        "Shipment",
        "ShippingStatus",
      ],
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

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border h-screen overflow-y-auto">
      <div className="p-4">
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search"
            className="pl-10 bg-sidebar-accent border-sidebar-border text-sidebar-foreground placeholder:text-muted-foreground"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-muted-foreground">
            Ctrl + K
          </span>
        </div>

        <nav className="space-y-4">
          {/* {menuItems.map((section, index) => (
            <div key={index} className="space-y-2">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                {section.title}
              </div>
              {section.subtitle && (
                <div className="text-xs text-muted-foreground uppercase tracking-wide ml-2">
                  {section.subtitle}
                </div>
              )}
              <div className="space-y-1">
                {section.items.map((item, itemIndex) => (
                  <Button
                    key={itemIndex}
                    variant="ghost"
                    className={`w-full justify-start text-sm font-normal h-8 px-2 ${
                      item === "Confirming"
                        ? "bg-sidebar-accent text-sidebar-primary"
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground"
                    }`}
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>
          ))} */}
          <ServiceAccordion />
        </nav>

        <div className="mt-8 pt-4 border-t border-sidebar-border">
          <div className="text-xs text-muted-foreground">
            Built with <span className="font-semibold">APIMatic</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

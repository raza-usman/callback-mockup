import { ChevronRight, Lock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { callbackData } from "@/data/callbackData";
import ResponseSection from "./ResponseSection";

const MainContent = () => {
  const [showProperties, setShowProperties] = useState(false);

  const displayedFields = showProperties
    ? callbackData
    : callbackData.slice(0, 4);
  return (
    <div className="flex-[1.5_1_0%] p-6 overflow-y-auto w-full bg-background h-[96vh]">
      {/* Header */}
      <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-6">
        <span>Connectivity Management</span>
        <ChevronRight className="w-4 h-4" />
        <span>API Endpoints</span>
        <ChevronRight className="w-4 h-4" />
        <span>Device Management</span>
        <ChevronRight className="w-4 h-4" />
        <span>Update Device Id</span>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-semibold text-foreground mb-4">
        Update Device Id
      </h1>
      <p className="mb-6">
        Changes the identifier of a 3G or 4G device to match hardware changes
        made for a line of service. Use this request to transfer the line of
        service and the MDN to new hardware, or to change the MDN.
      </p>
      {/* HTTP Method */}
      <div className="flex items-center space-x-3 mb-8 w-full">
        <pre className="block overflow-x-auto bg-gray-900 text-[#4d4d4c] p-6 w-full">
          <code className="whitespace-pre language-http">
            <span className="text-[#8959a8]">PUT</span>
            <span> </span>
            <span className="text-[#718c00]">/m2m/v1/devices/</span>
            <span className="text-[#4271ae]">serviceType</span>
            <span className="text-[#718c00]">/actions/deviceId</span>
          </code>
        </pre>
      </div>

      {/* Callback Section */}
      <Card className="p-4 mb-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="callbacks" className="border-0">
            <AccordionTrigger className="text-sm font-medium no-underline hover:no-underline">
              Callback
            </AccordionTrigger>
            <AccordionContent>
              <Accordion type="single" collapsible className="w-full">
                {/* Callback 1 - Change Device Identifier */}
                <AccordionItem value="callback-1" className="border-0">
                  <AccordionTrigger className="text-sm no-underline hover:no-underline">
                    Change Device Identifier Callback
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pl-4">
                      <div>
                        <span className="text-sm font-medium text-foreground">
                          Name:
                        </span>
                        <span className="ml-2 text-sm text-muted-foreground">
                          Change Device Identifier
                        </span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-foreground">
                          Description:
                        </span>
                        <span className="ml-2 text-sm text-muted-foreground">
                          Callback for updating device identifier
                        </span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-foreground">
                          Callback Response:
                        </span>
                        <div className="mt-2 bg-code-bg rounded-lg p-4">
                          <div className="space-y-2 font-mono text-sm">
                            {displayedFields.map((field, index) => (
                              <div key={index}>
                                <div className="mt-4">
                                  <span className="text-foreground">
                                    {field.name}
                                  </span>
                                  <span className="ml-4 text-syntax-string">
                                    {field.type}
                                  </span>
                                </div>
                                <div className="ml-4 text-xs text-muted-foreground">
                                  {field.description}
                                </div>
                              </div>
                            ))}
                            <div
                              className="text-primary text-xs ml-4 cursor-pointer hover:underline"
                              onClick={() => setShowProperties(!showProperties)}
                            >
                              <Badge variant="secondary">
                                {showProperties ? "- Show Less" : "+ Show All"}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
      {/* Authentication Section */}
      <Card className="p-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Lock className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium">Authentication</span>
          </div>
        </div>
      </Card>

      {/* API Code Playground */}
      <h2 className="text-lg font-semibold text-foreground mb-4">
        API Code Playground
      </h2>

      {/* Customer Section - Now Collapsible */}
      <Accordion
        type="single"
        collapsible
        className="w-full mb-6"
        defaultValue="customer"
      >
        <AccordionItem value="customer">
          <Card className="p-4">
            <AccordionTrigger className="flex items-center justify-between mb-4 p-0 hover:no-underline">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">Customer</span>
                <Badge variant="outline" className="text-xs">
                  REQUIRED
                </Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {/* Customer Fields */}
              <div className="space-y-6">
                {/* Collection Location */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">
                      CollectionLocation
                    </span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    String
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    REQUIRED
                  </Badge>
                  <div className="text-sm text-muted-foreground">
                    Code of delivery location at PostNL Pakketten
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Constraints: <span className="italic">Minimum Length:</span>{" "}
                    6, <span className="italic">Maximum Length:</span> 6
                  </div>
                  <input
                    type="text"
                    className="w-full bg-secondary border border-border rounded px-3 py-2 text-sm"
                    defaultValue="123456"
                  />
                </div>

                {/* Contact Person */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">ContactPerson</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    String
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    REQUIRED
                  </Badge>
                  <div className="text-sm text-muted-foreground">
                    Name of customer contact person
                  </div>
                  <input
                    type="text"
                    className="w-full bg-secondary border border-border rounded px-3 py-2 text-sm"
                    defaultValue="Janssen"
                  />
                </div>

                {/* Customer Code */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">CustomerCode</span>
                    <Badge variant="outline" className="text-xs">
                      String
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      REQUIRED
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Customer code as known at PostNL Pakketten
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Constraints: <span className="italic">Minimum Length:</span>{" "}
                    1, <span className="italic">Maximum Length:</span> 6
                  </div>
                  <input
                    type="text"
                    className="w-full bg-secondary border border-border rounded px-3 py-2 text-sm"
                    defaultValue="25"
                  />
                </div>
              </div>
            </AccordionContent>
          </Card>
        </AccordionItem>
      </Accordion>
      <ResponseSection />
    </div>
  );
};

export default MainContent;

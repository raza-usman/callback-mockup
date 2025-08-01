import React, { useState } from "react";
import { Card } from "../ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { callbackData } from "@/data/callbackData";
import { Badge } from "../ui/badge";

function Callback() {
  const [showProperties, setShowProperties] = useState(false);

  const displayedFields = showProperties
    ? callbackData
    : callbackData.slice(0, 4);
  return (
    <Card className="p-4 mb-6">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="callbacks" className="border-0">
          <AccordionTrigger className="text-sm font-medium no-underline hover:no-underline">
            Callback Information
          </AccordionTrigger>
          <AccordionContent>
            <Accordion type="single" collapsible className="w-full">
              {/* Callback 1 - Change Device Identifier */}
              <AccordionItem
                value="callback-1"
                className="border rounded-[5px] px-[15px] py-0"
              >
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
  );
}

export default Callback;

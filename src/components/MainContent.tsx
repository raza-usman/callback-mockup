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

const MainContent = () => {
  const [showProperties1, setShowProperties1] = useState(false);
  const [showProperties2, setShowProperties2] = useState(true); // Second one starts expanded
  const [showProperties3, setShowProperties3] = useState(false);
  return (
    <div className="flex-[1.5_1_0%] p-6 overflow-y-auto w-full bg-background h-[96vh]">
      {/* Header */}
      <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
        <span>API Endpoints</span>
        <ChevronRight className="w-4 h-4" />
        <span>Send Track</span>
        <ChevronRight className="w-4 h-4" />
        <span className="text-foreground">Confirming</span>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-semibold text-foreground mb-6">
        Confirm Shipment
      </h1>

      {/* HTTP Method */}
      <div className="flex items-center space-x-3 mb-8">
        <Badge className="bg-method-post text-white font-medium px-3 py-1">
          POST
        </Badge>
        <span className="text-sm font-mono text-method-post">
          /shipment/v2/confirm
        </span>
      </div>

      {/* Callback Section */}
      <Card className="p-4 mb-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="callbacks">
            <AccordionTrigger className="text-sm font-medium no-underline hover:no-underline">
              Callback
            </AccordionTrigger>
            <AccordionContent>
              <Accordion type="single" collapsible className="w-full">
                {/* Callback 1 - Shipment Created */}
                <AccordionItem value="callback-1">
                  <AccordionTrigger className="text-sm no-underline hover:no-underline">
                    Shipment Created Callback
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pl-4">
                      <div>
                        <span className="text-sm font-medium text-foreground">
                          Name:
                        </span>
                        <span className="ml-2 text-sm text-muted-foreground">
                          Shipment Created
                        </span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-foreground">
                          Description:
                        </span>
                        <span className="ml-2 text-sm text-muted-foreground">
                          Webhook callback triggered when a new shipment is
                          created
                        </span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-foreground">
                          Callback Payload:
                        </span>
                        <div className="mt-2 bg-code-bg rounded-lg p-4">
                          <div className="space-y-2 font-mono text-sm">
                            <div>
                              <span className="text-foreground">event</span>
                              <span className="text-syntax-string ml-4">
                                string
                              </span>
                              <Badge variant="outline" className="ml-2 text-xs">
                                Required
                              </Badge>
                            </div>
                            <div className="text-muted-foreground text-xs ml-4">
                              The type of event that occurred
                            </div>

                            <div className="mt-4">
                              <span className="text-foreground">timestamp</span>
                              <span className="text-syntax-string ml-4">
                                string
                              </span>
                              <Badge variant="outline" className="ml-2 text-xs">
                                Required
                              </Badge>
                            </div>
                            <div className="text-muted-foreground text-xs ml-4">
                              ISO 8601 timestamp when the event occurred
                            </div>

                            <div className="mt-4">
                              <span className="text-foreground">data</span>
                              <span className="text-syntax-keyword ml-4">
                                object
                              </span>
                              <Badge variant="outline" className="ml-2 text-xs">
                                Required
                              </Badge>
                            </div>
                            <div className="text-muted-foreground text-xs ml-4">
                              The event data containing shipment details
                            </div>
                            <div
                              className="text-primary text-xs ml-4 cursor-pointer hover:underline"
                              onClick={() =>
                                setShowProperties1(!showProperties1)
                              }
                            >
                              <Badge variant="secondary">
                                {showProperties1
                                  ? "- Hide 3 properties"
                                  : "+ Show 3 properties"}
                              </Badge>
                            </div>

                            {showProperties1 && (
                              <div className="ml-8 mt-2 space-y-2">
                                <div>
                                  <span className="text-foreground">
                                    shipment_id
                                  </span>
                                  <span className="text-syntax-string ml-4">
                                    string
                                  </span>
                                  <Badge
                                    variant="outline"
                                    className="ml-2 text-xs"
                                  >
                                    Required
                                  </Badge>
                                </div>
                                <div className="text-muted-foreground text-xs ml-4">
                                  Unique identifier for the shipment
                                </div>

                                <div className="mt-4">
                                  <span className="text-foreground">
                                    tracking_number
                                  </span>
                                  <span className="text-syntax-string ml-4">
                                    string
                                  </span>
                                  <Badge
                                    variant="outline"
                                    className="ml-2 text-xs"
                                  >
                                    Required
                                  </Badge>
                                </div>
                                <div className="text-muted-foreground text-xs ml-4">
                                  Tracking number for the shipment
                                </div>

                                <div className="mt-4">
                                  <span className="text-foreground">
                                    status
                                  </span>
                                  <span className="text-syntax-string ml-4">
                                    string
                                  </span>
                                  <Badge
                                    variant="outline"
                                    className="ml-2 text-xs"
                                  >
                                    Required
                                  </Badge>
                                </div>
                                <div className="text-muted-foreground text-xs ml-4">
                                  Current status of the shipment
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Callback 2 - Shipment Updated */}
                <AccordionItem value="callback-2">
                  <AccordionTrigger className="text-sm no-underline hover:no-underline">
                    Shipment Updated Callback
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pl-4">
                      <div>
                        <span className="text-sm font-medium text-foreground">
                          Name:
                        </span>
                        <span className="ml-2 text-sm text-muted-foreground">
                          Shipment Status Update
                        </span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-foreground">
                          Description:
                        </span>
                        <span className="ml-2 text-sm text-muted-foreground">
                          Webhook callback triggered when shipment status
                          changes
                        </span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-foreground">
                          Callback Payload:
                        </span>
                        <div className="mt-2 bg-code-bg rounded-lg p-4">
                          <div className="space-y-2 font-mono text-sm">
                            <div>
                              <span className="text-foreground">event</span>
                              <span className="text-syntax-string ml-4">
                                string
                              </span>
                              <Badge variant="outline" className="ml-2 text-xs">
                                Required
                              </Badge>
                            </div>
                            <div className="text-muted-foreground text-xs ml-4">
                              The type of event that occurred
                            </div>

                            <div className="mt-4">
                              <span className="text-foreground">timestamp</span>
                              <span className="text-syntax-string ml-4">
                                string
                              </span>
                              <Badge variant="outline" className="ml-2 text-xs">
                                Required
                              </Badge>
                            </div>
                            <div className="text-muted-foreground text-xs ml-4">
                              ISO 8601 timestamp when the event occurred
                            </div>

                            <div className="mt-4">
                              <span className="text-foreground">data</span>
                              <span className="text-syntax-keyword ml-4">
                                object
                              </span>
                              <Badge variant="outline" className="ml-2 text-xs">
                                Required
                              </Badge>
                            </div>
                            <div className="text-muted-foreground text-xs ml-4">
                              The event data containing shipment details
                            </div>
                            <div
                              className="text-primary text-xs ml-4 cursor-pointer hover:underline"
                              onClick={() =>
                                setShowProperties2(!showProperties2)
                              }
                            >
                              <Badge variant="secondary">
                                {showProperties2
                                  ? "- Hide 3 properties"
                                  : "+ Show 3 properties"}
                              </Badge>
                            </div>

                            {showProperties2 && (
                              <div className="ml-8 mt-2 space-y-2">
                                <div>
                                  <span className="text-foreground">
                                    shipment_id
                                  </span>
                                  <span className="text-syntax-string ml-4">
                                    string
                                  </span>
                                  <Badge
                                    variant="outline"
                                    className="ml-2 text-xs"
                                  >
                                    Required
                                  </Badge>
                                </div>
                                <div className="text-muted-foreground text-xs ml-4">
                                  Unique identifier for the shipment
                                </div>

                                <div className="mt-4">
                                  <span className="text-foreground">
                                    tracking_number
                                  </span>
                                  <span className="text-syntax-string ml-4">
                                    string
                                  </span>
                                  <Badge
                                    variant="outline"
                                    className="ml-2 text-xs"
                                  >
                                    Required
                                  </Badge>
                                </div>
                                <div className="text-muted-foreground text-xs ml-4">
                                  Tracking number for the shipment
                                </div>

                                <div className="mt-4">
                                  <span className="text-foreground">
                                    status
                                  </span>
                                  <span className="text-syntax-string ml-4">
                                    string
                                  </span>
                                  <Badge
                                    variant="outline"
                                    className="ml-2 text-xs"
                                  >
                                    Required
                                  </Badge>
                                </div>
                                <div className="text-muted-foreground text-xs ml-4">
                                  Current status of the shipment
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Callback 3 - Shipment Delivered */}
                <AccordionItem value="callback-3">
                  <AccordionTrigger className="text-sm no-underline hover:no-underline">
                    Shipment Delivered Callback
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pl-4">
                      <div>
                        <span className="text-sm font-medium text-foreground">
                          Name:
                        </span>
                        <span className="ml-2 text-sm text-muted-foreground">
                          Shipment Delivered
                        </span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-foreground">
                          Description:
                        </span>
                        <span className="ml-2 text-sm text-muted-foreground">
                          Webhook callback triggered when shipment is
                          successfully delivered
                        </span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-foreground">
                          Callback Payload:
                        </span>
                        <div className="mt-2 bg-code-bg rounded-lg p-4">
                          <div className="space-y-2 font-mono text-sm">
                            <div>
                              <span className="text-foreground">event</span>
                              <span className="text-syntax-string ml-4">
                                string
                              </span>
                              <Badge variant="outline" className="ml-2 text-xs">
                                Required
                              </Badge>
                            </div>
                            <div className="text-muted-foreground text-xs ml-4">
                              The type of event that occurred
                            </div>

                            <div className="mt-4">
                              <span className="text-foreground">timestamp</span>
                              <span className="text-syntax-string ml-4">
                                string
                              </span>
                              <Badge variant="outline" className="ml-2 text-xs">
                                Required
                              </Badge>
                            </div>
                            <div className="text-muted-foreground text-xs ml-4">
                              ISO 8601 timestamp when the event occurred
                            </div>

                            <div className="mt-4">
                              <span className="text-foreground">data</span>
                              <span className="text-syntax-keyword ml-4">
                                object
                              </span>
                              <Badge variant="outline" className="ml-2 text-xs">
                                Required
                              </Badge>
                            </div>
                            <div className="text-muted-foreground text-xs ml-4">
                              The event data containing shipment details
                            </div>
                            <div
                              className="text-primary text-xs ml-4 cursor-pointer hover:underline"
                              onClick={() =>
                                setShowProperties3(!showProperties3)
                              }
                            >
                              <Badge variant="secondary">
                                {showProperties3
                                  ? "- Hide 3 properties"
                                  : "+ Show 3 properties"}
                              </Badge>
                            </div>

                            {showProperties3 && (
                              <div className="mt-4 pl-4 border-l-2 border-border space-y-4">
                                <div>
                                  <div className="flex items-center gap-3 mb-2">
                                    <span className="text-sm font-medium text-foreground">
                                      shipment_id
                                    </span>
                                    <span className="text-syntax-string ml-4">
                                      string
                                    </span>
                                    <Badge variant="outline">Required</Badge>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    Unique identifier for the shipment
                                  </p>
                                </div>

                                <div>
                                  <div className="flex items-center gap-3 mb-2">
                                    <span className="text-sm font-medium text-foreground">
                                      tracking_number
                                    </span>
                                    <span className="text-syntax-string ml-4">
                                      string
                                    </span>
                                    <Badge variant="outline">Required</Badge>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    Tracking number for the shipment
                                  </p>
                                </div>

                                <div>
                                  <div className="flex items-center gap-3 mb-2">
                                    <span className="text-sm font-medium text-foreground">
                                      status
                                    </span>
                                    <span className="text-syntax-string ml-4">
                                      string
                                    </span>
                                    <Badge variant="outline">Required</Badge>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    Current status of the shipment
                                  </p>
                                </div>
                              </div>
                            )}
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

      {/* Responses Section */}
      <h2 className="text-xl font-semibold text-foreground mb-4">Responses</h2>
      <div className="mb-8 bg-card border border-border rounded px-3 py-2">
        {/* Status Code Tabs */}
        <div className="flex gap-2 mb-6 ">
          <div className="bg-card border border-border rounded px-3 py-2 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-status-200"></div>
            <span className="text-sm text-foreground">200</span>
          </div>
          <div className="bg-card border border-border rounded px-3 py-2 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-status-400"></div>
            <span className="text-sm text-foreground">400</span>
          </div>
          <div className="bg-card border border-border rounded px-3 py-2 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-status-401"></div>
            <span className="text-sm text-foreground">401</span>
          </div>
          <div className="bg-card border border-border rounded px-3 py-2 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-status-405"></div>
            <span className="text-sm text-foreground">405</span>
          </div>
          <div className="bg-card border border-border rounded px-3 py-2 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-status-429"></div>
            <span className="text-sm text-foreground">429</span>
          </div>
          <div className="bg-card border border-border rounded px-3 py-2 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-status-500"></div>
            <span className="text-sm text-foreground">500</span>
          </div>
        </div>

        {/* Response Content */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            A confirmation
          </h3>

          {/* Content Type */}
          <div className="border border-border rounded-lg p-3 mb-4">
            <span className="text-sm text-foreground">
              Content Type: application/json
            </span>
          </div>

          {/* Type */}
          <div className="mb-4">
            <div className="text-sm text-foreground mb-2">Type</div>
            <a href="#" className="text-primary hover:underline">
              Confirming Response
            </a>
          </div>

          {/* Code Block with Copy Button */}
          <div className="bg-code-background border border-border rounded-lg relative">
            <button className="absolute top-3 right-3 p-2 hover:bg-muted/20 rounded">
              <svg
                className="w-4 h-4 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>
            <pre className="text-sm font-mono text-foreground whitespace-pre-wrap p-4">
              <code
                dangerouslySetInnerHTML={{
                  __html: `{
  <span class="text-code-property">"ResponseShipments"</span>: [
    {
      <span class="text-code-property">"Errors"</span>: [],
      <span class="text-code-property">"Warnings"</span>: [
        {
          <span class="text-code-property">"code"</span>: <span class="text-code-string">"1280103"</span>,
          <span class="text-code-property">"description"</span>: <span class="text-code-string">"Address is unknown"</span>
        }
      ],
      <span class="text-code-property">"Barcode"</span>: <span class="text-code-string">"3SDEVC281677095"</span>
    }
  ]
}`,
                }}
              />
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;

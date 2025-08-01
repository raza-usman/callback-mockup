import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../ui/badge";

function Webhook() {
  const [webhookPayloadOpen, setWebhookPayloadOpen] = useState(true);
  const [showProperties, setShowProperties] = useState(false);
  return (
    <div className="mb-8">
      <div
        className="flex items-center justify-between cursor-pointer mb-4"
        onClick={() => setWebhookPayloadOpen(!webhookPayloadOpen)}
      >
        <div>
          <h2 className="text-xl font-semibold text-foreground">
            Webhook Payload
          </h2>
          <p className="text-sm text-muted-foreground">
            Request was successful
          </p>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground transition-transform ${
            webhookPayloadOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {webhookPayloadOpen && (
        <div className="bg-card border border-border rounded-lg p-6 space-y-6">
          {/* event */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-medium text-foreground">event</span>
              <Badge variant="outline">string</Badge>
              <Badge variant="outline">Required</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              The type of event that occurred
            </p>
          </div>

          {/* timestamp */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-medium text-foreground">
                timestamp
              </span>
              <Badge variant="outline">string</Badge>
              <Badge variant="outline">Required</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              ISO 8601 timestamp when the event occurred
            </p>
          </div>

          {/* data */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-medium text-foreground">data</span>
              <Badge variant="outline">object</Badge>
              <Badge variant="outline">Required</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              The event data containing shipment details
            </p>
            <button
              className="text-primary text-sm hover:underline mt-1"
              onClick={() => setShowProperties(!showProperties)}
            >
              {showProperties ? "- Hide 3 properties" : "+ Show 3 properties"}
            </button>

            {showProperties && (
              <div className="mt-4 pl-4 border-l-2 border-border space-y-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-medium text-foreground">
                      shipment_id
                    </span>
                    <Badge variant="outline">string</Badge>
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
                    <Badge variant="outline">string</Badge>
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
                    <Badge variant="outline">string</Badge>
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
      )}
    </div>
  );
}

export default Webhook;

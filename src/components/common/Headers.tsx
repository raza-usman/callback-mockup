import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../ui/badge";

function Headers() {
  const [headersOpen, setHeadersOpen] = useState(true);

  return (
    <div className="mb-8">
      <div
        className="flex items-center justify-between cursor-pointer mb-4"
        onClick={() => setHeadersOpen(!headersOpen)}
      >
        <h2 className="text-xl font-semibold text-foreground">Headers</h2>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground transition-transform ${
            headersOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {headersOpen && (
        <div className="bg-card border border-border rounded-lg p-6 space-y-6">
          {/* Content-Type */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-medium text-foreground">
                Content-Type
              </span>
              <Badge variant="outline">string</Badge>
              <Badge variant="outline">Required</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              The media type of the request body
            </p>
          </div>

          {/* X-Webhook-Event */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-medium text-foreground">
                X-Webhook-Event
              </span>
              <Badge variant="outline">string</Badge>
              <Badge variant="outline">Required</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              The type of event that triggered this webhook
            </p>
          </div>

          {/* X-Webhook-ID */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-medium text-foreground">
                X-Webhook-ID
              </span>
              <Badge variant="outline">string</Badge>
              <Badge variant="outline">Required</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Unique identifier for this webhook delivery
            </p>
          </div>

          {/* X-Signature */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-medium text-foreground">
                X-Signature
              </span>
              <Badge variant="outline">string</Badge>
              <Badge variant="outline">Required</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              HMAC signature for webhook verification
            </p>
          </div>

          {/* User-Agent */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-medium text-foreground">
                User-Agent
              </span>
              <Badge variant="outline">string</Badge>
              <Badge variant="outline">Required</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              User agent string identifying the webhook sender
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Headers;

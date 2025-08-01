import CodePanel, { CodeTab } from "@/components/CodePanel";
import Headers from "@/components/common/Headers";
import ResponseSection from "@/components/common/ResponseSection";
import Webhook from "@/components/common/Webhook";
import Layout from "@/components/Layout";
import { Coffee, Globe } from "lucide-react";

const codeTabs: CodeTab[] = [
    {
      id: "http",
      label: "HTTP",
      icon: <Globe className="w-4 h-4" />,
      code: `{
  "first_name": "first_name8",
  "last_name": "last_name6", 
  "email": "email8",
  "cc_emails": "cc_emails8",
  "organization": "organization2",
  "reference": "reference4",
  "address": "address4",
  "address_2": "address_22"
}`
    },
    {
      id: "java",
      label: "Java",
      icon: <Coffee className="w-4 h-4" />,
      code: `{
  "Barcode": "3SDEVC903942795"
}`
    },
    {
      id: "dotnet",
      label: ".NET",
      icon: <div className="w-4 h-4 bg-purple-500 rounded text-xs flex items-center justify-center text-white font-bold">.N</div>,
      code: `{
  "first_name": "first_name8",
  "last_name": "last_name6",
  "email": "email8"
}`
    },
    {
      id: "php",
      label: "PHP",
      icon: <div className="w-4 h-4 bg-blue-600 rounded text-xs flex items-center justify-center text-white font-bold">P</div>,
      code: `{
  "organization": "organization2",
  "reference": "reference4"
}`
    },
    {
      id: "python",
      label: "Python",
      icon: <div className="w-4 h-4 bg-green-600 rounded text-xs flex items-center justify-center text-white font-bold">P</div>,
      code: `{
  "address": "address4",
  "address_2": "address_22"
}`
    },
    {
      id: "ruby",
      label: "Ruby",
      icon: <div className="w-4 h-4 bg-red-600 rounded text-xs flex items-center justify-center text-white font-bold">R</div>,
      code: `{
  "cc_emails": "cc_emails8",
  "email": "email8"
}`
    }
  ];
  
const WebhookPage = () => {
  return (
    <Layout>
      <div className="flex-[1.5_1_0%] p-6 overflow-y-auto w-full bg-background h-[96vh] mb-10">
        <div className="max-w-4xl h-full">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Shipment Created
            </h1>
            <p className="text-muted-foreground">
              This webhook is triggered when a new shipment is created in the
              system.
            </p>
          </div>

          {/* Headers Section */}
          <Headers />

          {/* Webhook Payload Section */}
          <div className="mb-8">
            <Webhook />
          </div>

          {/* Responses Section */}
          <ResponseSection />
        </div>
      </div>
      {/* Right Code Panel */}
      <div className="h-full border-l border-border overflow-y-auto w-[535px]">
        <div className="p-6">
          <CodePanel codeTabs={codeTabs} />
        </div>
      </div>
    </Layout>
  );
};

export default WebhookPage;

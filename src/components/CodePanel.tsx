import { useState } from "react";
import { Globe, Coffee } from "lucide-react";

interface CodeTab {
  id: string;
  label: string;
  icon: JSX.Element;
  code: string;
}

const CodePanel = () => {
  const [activeTab, setActiveTab] = useState("http");

  const codeTabs: CodeTab[] = [
    {
      id: "http",
      label: "HTTP",
      icon: <Globe className="w-4 h-4" />,
      code: `curl -X PUT \
  --url 'https://thingspace.verizon.com/api/m2m/v1/devices/serviceType6/actions/deviceId'  \
  -H 'Accept: application/json' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {OAUTH_ACCESS_TOKEN}' \
  --data-raw '{
  "deviceIds": [
    {
      "id": "42590078891480000008",
      "kind": "iccid"
    }
  ],
  "deviceIdsTo": [
    {
      "id": "89148000000842590078",
      "kind": "iccid"
    }
  ],
  "change4gOption": "ChangeICCID",
  "zipCode": "98802",
  "servicePlan": "4G 2GB"
}'`,
    },
    {
      id: "java",
      label: "Java",
      icon: <Coffee className="w-4 h-4" />,
      code: `{
  "first_name": "first_name8",
  "last_name": "last_name6", 
  "email": "email8",
  "cc_emails": "cc_emails8",
  "organization": "organization2",
  "reference": "reference4",
  "address": "address4",
  "address_2": "address_22"
}`,
    },
    {
      id: "dotnet",
      label: ".NET",
      icon: (
        <div className="w-4 h-4 bg-purple-500 rounded text-xs flex items-center justify-center text-white font-bold">
          .N
        </div>
      ),
      code: `{
  "first_name": "first_name8",
  "last_name": "last_name6", 
  "email": "email8",
  "cc_emails": "cc_emails8",
  "organization": "organization2",
  "reference": "reference4",
  "address": "address4",
  "address_2": "address_22"
}`,
    },
    {
      id: "php",
      label: "PHP",
      icon: (
        <div className="w-4 h-4 bg-blue-600 rounded text-xs flex items-center justify-center text-white font-bold">
          P
        </div>
      ),
      code: `{
  "first_name": "first_name8",
  "last_name": "last_name6", 
  "email": "email8",
  "cc_emails": "cc_emails8",
  "organization": "organization2",
  "reference": "reference4",
  "address": "address4",
  "address_2": "address_22"
}`,
    },
    {
      id: "python",
      label: "Python",
      icon: (
        <div className="w-4 h-4 bg-green-600 rounded text-xs flex items-center justify-center text-white font-bold">
          P
        </div>
      ),
      code: `{
  "first_name": "first_name8",
  "last_name": "last_name6", 
  "email": "email8",
  "cc_emails": "cc_emails8",
  "organization": "organization2",
  "reference": "reference4",
  "address": "address4",
  "address_2": "address_22"
}`,
    },
    {
      id: "ruby",
      label: "Ruby",
      icon: (
        <div className="w-4 h-4 bg-red-600 rounded text-xs flex items-center justify-center text-white font-bold">
          R
        </div>
      ),
      code: `{
  "first_name": "first_name8",
  "last_name": "last_name6", 
  "email": "email8",
  "cc_emails": "cc_emails8",
  "organization": "organization2",
  "reference": "reference4",
  "address": "address4",
  "address_2": "address_22"
}`,
    },
  ];

  const formatCode = (code: string) => {
    return code.replace(
      /"([^"]+)":\s*"([^"]+)"/g,
      '<span class="text-code-property">"$1"</span>: <span class="text-code-string">"$2"</span>'
    );
  };

  return (
    <div className="bg-code-background rounded-lg border border-border overflow-hidden flex-1 h-[90vh] max-w-[520px]">
      {/* Tab Headers */}
      <div className="flex border-b border-border bg-card justify-between max-w-[520px]">
        {codeTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-full flex flex-col items-center gap-1 px-4 py-3 text-sm border-r border-border transition-colors ${
              activeTab === tab.id
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Code Content */}
      <div className="p-6 overflow-x-auto bg-[rgb(29,31,33)]">
        <pre className="text-sm text-foreground font-mono whitespace-pre-wrap">
          <code
            dangerouslySetInnerHTML={{
              __html: formatCode(
                codeTabs.find((tab) => tab.id === activeTab)?.code || ""
              ),
            }}
          />
        </pre>
      </div>
    </div>
  );
};

export default CodePanel;

import CodePanel, { CodeTab } from "@/components/CodePanel";
import Header from "@/components/Header";
import MainContent from "@/components/CallbackContent";
import Sidebar from "@/components/Sidebar";
import Layout from "@/components/Layout";
import { Coffee, Globe } from "lucide-react";

const codeTabs: CodeTab[] = [
    {
      id: 'http',
      label: 'HTTP',
      icon: <Globe className='w-4 h-4' />,
      code: `curl -X PUT \\
  --url 'https://thingspace.verizon.com/api/m2m/v1/devices/serviceType6/actions/deviceId'  \\
  -H 'Accept: application/json' \\
  -H 'Content-Type: application/json' \\
  -H 'Authorization: Bearer {OAUTH_ACCESS_TOKEN}' \\
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
    // Other language tabs (Java, PHP, etc.) remain unchanged
    {
      id: 'java',
      label: 'Java',
      icon: <Coffee className='w-4 h-4' />,
      code: `public class Example {
  public static void main(String[] args) {
    System.out.println("Hello Java");
  }
}`,
    },
  ];
const CallbackPage = () => {
  return (
    <Layout>
      <div className="flex-1 h-full overflow-y-auto">
        <MainContent />
      </div>

      {/* Right Code Panel */}
      <div className="h-full border-l border-border overflow-y-auto w-[535px]">
        <div className="p-6">
          <CodePanel codeTabs={codeTabs} panel={['Request', 'Response']} />
        </div>
      </div>
    </Layout>
  );
};

export default CallbackPage;

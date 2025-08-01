
import ResponseSection from "./common/ResponseSection";
import APIPlayground from "./common/APIPlayground";
import Authentication from "./common/Authentication";
import Breadcrumb from "./common/Breadcrumb";
import Callback from "./common/Callback";

const breadcrumb = [
  "Connectivity Management",
  "API Endpoints",
  "Device Management",
  "Update Device Id",
];

const MainContent = () => {

  return (
    <div className="flex-[1.5_1_0%] p-6 overflow-y-auto w-full bg-background h-[96vh]">
      {/* Header */}
      <Breadcrumb breadcrumbs={breadcrumb} />

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
      <Callback />
      {/* Authentication Section */}
      <Authentication />

      {/* API Code Playground */}
      <APIPlayground />
      <ResponseSection />
    </div>
  );
};

export default MainContent;

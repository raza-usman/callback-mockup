import { useState } from 'react';
import { Globe, Coffee, ClipboardCopy } from 'lucide-react';
import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/themes/prism-tomorrow.css';

interface CodeTab {
  id: string;
  label: string;
  icon: JSX.Element;
  code: string;
}

const CodePanel = () => {
  const [activeTab, setActiveTab] = useState('http');
  const [activePanel, setActivePanel] = useState<'request' | 'response'>(
    'request'
  );

  const languageTabs = [
    {
      id: 'http',
      label: 'HTTP',
      icon: <Globe className='w-5 h-5' />,
    },
    {
      id: 'java',
      label: 'Java',
      icon: <Coffee className='w-5 h-5' />,
    },
    {
      id: 'dotnet',
      label: '.NET',
      icon: (
        <div className='w-5 h-5 bg-purple-600 rounded text-xs text-white font-bold flex items-center justify-center'>
          .N
        </div>
      ),
    },
    {
      id: 'typescript',
      label: 'TypeScript',
      icon: (
        <div className='w-5 h-5 bg-sky-600 rounded text-xs text-white font-bold flex items-center justify-center'>
          TS
        </div>
      ),
    },
    {
      id: 'php',
      label: 'PHP',
      icon: (
        <div className='w-5 h-5 bg-indigo-700 rounded text-xs text-white font-bold flex items-center justify-center'>
          P
        </div>
      ),
    },
    {
      id: 'python',
      label: 'Python',
      icon: (
        <div className='w-5 h-5 bg-yellow-500 rounded text-xs text-white font-bold flex items-center justify-center'>
          Py
        </div>
      ),
    },
  ];

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

  const getHighlightedCode = (code: string, lang: string = 'bash') => {
    const grammar = Prism.languages[lang] || Prism.languages.bash;
    return Prism.highlight(code, grammar, lang);
  };

  const copyCode = () => {
    const code = codeTabs.find((tab) => tab.id === activeTab)?.code || '';
    navigator.clipboard.writeText(code);
  };

  return (
    <>
      <div className='w-full max-w-[520px]'>
        {/* Language Selector */}
        <div className='flex items-center justify-between  rounded-t-lg bg-[#1f2937] shadow-sm mb-8'>
          {/* Left Scroll */}
          <button className='px-2 text-muted-foreground hover:text-primary'>
            &#8249;
          </button>

          <div className='flex-1 overflow-x-auto'>
            <div className='flex justify-start whitespace-nowrap'>
              {languageTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center justify-center px-4 py-3 text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'text-blue-600 font-semibold border-b-2 border-blue-600 bg-blue-50'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.icon}
                  <span className='mt-1'>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Scroll */}
          <button className='px-2 text-muted-foreground hover:text-primary'>
            &#8250;
          </button>
        </div>
      </div>
      <div className='bg-code-background rounded-lg border border-border overflow-hidden flex-1 h-[70vh] max-w-[520px] relative'>
        {/* Request/Response Switch */}
        <div className='flex border-b border-border bg-muted text-sm font-medium'>
          {['Request', 'Response'].map((panel) => (
            <button
              key={panel}
              onClick={() =>
                setActivePanel(panel.toLowerCase() as 'request' | 'response')
              }
              className={`px-4 py-2 transition-colors ${
                activePanel === panel.toLowerCase()
                  ? 'text-white border-b-2 border-primary'
                  : 'text-muted-foreground hover:text-white'
              }`}
            >
              {panel}
            </button>
          ))}
        </div>

        {activePanel === 'request' && (
          <>
            {/* Language Tabs */}

            {/* Copy Button */}

            {/* Code Block */}
            <div className='p-6 overflow-x-auto bg-[#1f2937] scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900'>
              <pre className='text-sm font-mono whitespace-pre-wrap'>
                <code
                  className='language-bash'
                  dangerouslySetInnerHTML={{
                    __html: getHighlightedCode(
                      codeTabs.find((tab) => tab.id === activeTab)?.code || '',
                      activeTab === 'http' ? 'bash' : 'java'
                    ),
                  }}
                />
              </pre>
            </div>
          </>
        )}

        {activePanel === 'response' && (
          <div className='p-6 w-full overflow-auto bg-[rgb(29,31,33)] text-green-400 font-mono text-sm whitespace-pre-wrap h-full'>
            {`{
  "status": "success",
  "message": "SIM updated successfully"
}`}
          </div>
        )}
      </div>
    </>
  );
};

export default CodePanel;

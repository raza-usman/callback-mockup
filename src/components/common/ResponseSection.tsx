import React from "react";

function ResponseSection() {
  return (
    <>
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
  <span>{</span><br />
<span>  </span><span class="text-[#8959a8]">"username"</span><span>: </span><span class="text-[#718c00]">""</span>,<br />
<span>  </span><span class="text-[#8959a8]">"password"</span><span>: </span><span class="text-[#718c00]">""</span>,<br />
<span>  </span><span class="text-[#8959a8]">"requestId"</span><span>: </span><span class="text-[#718c00]">"a28892ea-6503-4aa7-bfa2-4cd45d42f61b"</span>,<br />
<span>  </span><span class="text-[#8959a8]">"deviceIds"</span>: [<br />
<span>    </span>{<br />
<span>      </span><span class="text-[#8959a8]">"id"</span><span>: </span><span class="text-[#718c00]">"22211315718"</span>,<br />
<span>      </span><span class="text-[#8959a8]">"kind"</span><span>: </span><span class="text-[#718c00]">"ESN"</span><br />
<span>    }</span><br />
<span>  ],</span><br />
<span>  </span><span class="text-[#8959a8]">"deviceResponse"</span>: {<br />
<span>    </span><span class="text-[#8959a8]">"changeIdentifierResponse"</span>: {<br />
<span>      </span><span class="text-[#8959a8]">"deviceIds"</span>: [<br />
<span>        </span>{<br />
<span>          </span><span class="text-[#8959a8]">"id"</span><span>: </span><span class="text-[#718c00]">"A1000001999990"</span>,<br />
<span>          </span><span class="text-[#8959a8]">"kind"</span><span>: </span><span class="text-[#718c00]">"iccid"</span><br />
<span>        }</span><br />
<span>      ],</span><br />
<span>      </span><span class="text-[#8959a8]">"servicePlan"</span><span>: </span><span class="text-[#718c00]">"M2M_4G"</span><br />
<span>    }</span><br />
<span>  },</span><br />
<span>  </span><span class="text-[#8959a8]">"status"</span><span>: </span><span class="text-[#718c00]">"Success"</span>,<br />
<span>  </span><span class="text-[#8959a8]">"callbackCount"</span><span>: </span><span class="text-[#f5871f]">1</span>,<br />
<span>  </span><span class="text-[#8959a8]">"maxCallbackThreshold"</span><span>: </span><span class="text-[#f5871f]">4</span><br />
        <span>}</span>
    }
  ]
}`,
                }}
              />
            </pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResponseSection;

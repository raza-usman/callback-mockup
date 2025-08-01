import React from "react";
import { Card } from "../ui/card";
import { Lock } from "lucide-react";

function Authentication() {
  return (
    <Card className="p-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Lock className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-medium">Authentication</span>
        </div>
      </div>
    </Card>
  );
}

export default Authentication;

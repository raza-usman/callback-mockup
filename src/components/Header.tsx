import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-foreground">GET SDK</span>
            <span className="text-sm text-muted-foreground">API Spec</span>
          </div>
        </div>

        {/* <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            {["HTTP", ".NET", "Java", "PHP", "Python", "Ruby"].map(
              (lang, index) => (
                <Button
                  key={lang}
                  variant={index === 0 ? "default" : "ghost"}
                  size="sm"
                  className={
                    index === 0
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }
                >
                  {lang}
                </Button>
              )
            )}
          </div>
        </div> */}
      </div>
    </header>
  );
};

export default Header;

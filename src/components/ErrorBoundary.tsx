import { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { WifiOff, RefreshCw, AlertTriangle } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      // Check if it's likely a network error (chunk load failure)
      const isNetworkError = 
        this.state.error?.message?.includes("Failed to fetch") || 
        this.state.error?.message?.includes("Importing a module script failed") ||
        this.state.error?.name === "ChunkLoadError" ||
        !navigator.onLine;

      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center bg-background">
          <div className="w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mb-6">
            {isNetworkError ? (
              <WifiOff className="w-12 h-12 text-muted-foreground" />
            ) : (
              <AlertTriangle className="w-12 h-12 text-destructive/80" />
            )}
          </div>
          <h1 className="text-3xl font-bold mb-4">
            {isNetworkError ? "Brak połączenia" : "Wystąpił błąd"}
          </h1>
          <p className="text-muted-foreground max-w-md mb-8 text-lg">
            {isNetworkError 
              ? "Nie udało się załadować części strony. Sprawdź swoje połączenie internetowe i spróbuj ponownie."
              : "Przepraszamy, wystąpił nieoczekiwany błąd aplikacji."}
          </p>
          <Button 
            onClick={() => window.location.reload()} 
            size="lg"
            className="gap-2 rounded-full"
          >
            <RefreshCw className="w-4 h-4" />
            Odśwież stronę
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

import { Toaster } from "@/components/ui/sonner";
import { VlyToolbar } from "../vly-toolbar-readonly.tsx";
import { InstrumentationProvider } from "@/instrumentation.tsx";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";
import { StrictMode, useEffect, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { ThemeProvider } from "next-themes";
import "./index.css";
import "./types/global.d.ts";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

// Lazy load route components for better code splitting
const Landing = lazy(() => import("./pages/Landing.tsx"));
const AuthPage = lazy(() => import("./pages/Auth.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const GalleryPage = lazy(() => import("./pages/Gallery.tsx"));
const MapDemo = lazy(() => import("./components/ui/expand-map-demo.tsx"));
const ParticleDemo = lazy(() => import("./components/ui/particle-effect-for-hero-demo.tsx"));
const ShareDemo = lazy(() => import("./components/ui/share-dialog-demo.tsx"));

// Simple loading fallback for route transitions
function RouteLoading() {
  return <LoadingSpinner />;
}

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);



function RouteSyncer() {
  const location = useLocation();
  useEffect(() => {
    window.parent.postMessage(
      { type: "iframe-route-change", path: location.pathname },
      "*",
    );
  }, [location.pathname]);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.data?.type === "navigate") {
        if (event.data.direction === "back") window.history.back();
        if (event.data.direction === "forward") window.history.forward();
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return null;
}


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <VlyToolbar />
    <InstrumentationProvider>
      <ConvexAuthProvider client={convex}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <BrowserRouter>
            <RouteSyncer />
            <Suspense fallback={<RouteLoading />}>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/auth" element={<AuthPage redirectAfterAuth="/" />} /> {/* TODO: change redirect after auth to correct page */}
                <Route path="/map-demo" element={<MapDemo />} />
                <Route path="/particle-demo" element={<ParticleDemo />} />
                <Route path="/share-demo" element={<ShareDemo />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
          <Toaster />
        </ThemeProvider>
      </ConvexAuthProvider>
    </InstrumentationProvider>
  </StrictMode>,
);
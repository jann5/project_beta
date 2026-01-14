import { Toaster } from "@/components/ui/sonner";
import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { ThemeProvider } from "next-themes";
import "./index.css";
import "./types/global.d.ts";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { CookieConsent } from "@/components/CookieConsent";
import Landing from "./pages/Landing.tsx";

// Lazy load route components for better code splitting
// Landing is now eager loaded for fastest initial paint
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const GalleryPage = lazy(() => import("./pages/Gallery.tsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.tsx"));
const MapDemo = lazy(() => import("./components/ui/expand-map-demo.tsx"));
const ParticleDemo = lazy(() => import("./components/ui/particle-effect-for-hero-demo.tsx"));
const ShareDemo = lazy(() => import("./components/ui/share-dialog-demo.tsx"));

// Simple loading fallback for route transitions
function RouteLoading() {
  return <LoadingSpinner />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <BrowserRouter>
        <ErrorBoundary>
          <Suspense fallback={<RouteLoading />}>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/map-demo" element={<MapDemo />} />
              <Route path="/particle-demo" element={<ParticleDemo />} />
              <Route path="/share-demo" element={<ShareDemo />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
        <CookieConsent />
      </BrowserRouter>
      <Toaster />
    </ThemeProvider>
  </StrictMode>,
);
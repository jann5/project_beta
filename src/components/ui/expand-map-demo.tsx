import { LocationMap } from "./expand-map";

export default function ExpandMapDemo() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-neutral-100 dark:bg-neutral-950 p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-4xl space-y-8 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Nasza Lokalizacja
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Zapraszamy do odwiedzenia nas w naszej siedzibie.
          </p>
        </div>

        <div className="w-full flex justify-center">
          <LocationMap />
        </div>
      </div>
    </div>
  );
}

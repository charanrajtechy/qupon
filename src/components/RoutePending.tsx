import { Skeleton } from "@/components/ui/skeleton";

export function RoutePending() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <Skeleton className="h-10 w-2/3 max-w-xl mb-4" />
      <Skeleton className="h-5 w-1/2 max-w-md mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-border p-4">
            <Skeleton className="h-28 w-full rounded-xl mb-4" />
            <Skeleton className="h-5 w-3/4 mb-2" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}

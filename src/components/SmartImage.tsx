import { useState, type ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  aspect?: string; // e.g. "16/9"
  rounded?: string; // e.g. "rounded-xl"
};

/**
 * <img> with a shimmering skeleton placeholder until it loads.
 * Falls back gracefully if the image errors.
 */
export function SmartImage({ className, aspect, rounded = "rounded-lg", onLoad, onError, ...rest }: Props) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div
      className={cn("relative overflow-hidden", rounded, className)}
      style={aspect ? { aspectRatio: aspect } : undefined}
    >
      {!loaded && !errored && (
        <div className={cn("absolute inset-0 animate-pulse bg-muted", rounded)} aria-hidden />
      )}
      {!errored && (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img
          {...rest}
          loading={rest.loading ?? "lazy"}
          decoding={rest.decoding ?? "async"}
          onLoad={(e) => {
            setLoaded(true);
            onLoad?.(e);
          }}
          onError={(e) => {
            setErrored(true);
            onError?.(e);
          }}
          className={cn(
            "h-full w-full object-cover transition-opacity duration-300",
            loaded ? "opacity-100" : "opacity-0",
          )}
        />
      )}
      {errored && (
        <div className={cn("absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground text-xs", rounded)}>
          Image unavailable
        </div>
      )}
    </div>
  );
}

import { defineConfig } from "@tanstack/start/config";
import vercel from "@tanstack/start-adapter-vercel";

export default defineConfig({
  routers: {
    server: {
      adapter: vercel(),
    },
  },
});

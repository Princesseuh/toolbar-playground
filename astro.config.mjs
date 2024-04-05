import { defineConfig } from "astro/config";
import integration from "./src/integration.ts";

// https://astro.build/config
export default defineConfig({
  integrations: [integration],
});

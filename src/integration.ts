import type { AstroIntegration } from "astro";

export default {
  name: "astro-plugin",
  hooks: {
    "astro:config:setup": ({ addDevToolbarApp }) => {
      addDevToolbarApp({
        id: "astro-plugin",
        name: "Astro Plugin",
        icon: "🚀",
        entrypoint: "./src/a-normal-app.ts",
      });

      addDevToolbarApp({
        id: "astro-preact-plugin",
        name: "Astro Preact Plugin",
        icon: "⚛️",
        entrypoint: "./src/a-preact-app.tsx",
      });
    },

    // No improvements here yet, will add a similar API to the one used in the app itself.
    "astro:server:setup": ({ server }) => {
      server.hot.on("ping", () => {
        server.hot.send("pong", "Hello, client!");
      });
    },
  },
} satisfies AstroIntegration;

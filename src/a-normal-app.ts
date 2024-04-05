import { defineToolbarApp } from "astro:toolbar";

export default defineToolbarApp({
  init(canvas, eventTarget, server) {
    const div = document.createElement("div");
    div.textContent = "Hello, Astro!";
    canvas.appendChild(div);

    const button = document.createElement("button");
    button.textContent = "Send Ping to Server";

    button.addEventListener("click", () => {
      // New:
      server.send("ping", "Hello, Server!");

      // Old:
      // if (import.meta.hot) {
      // 	import.meta.hot.send("ping", "Hello, Server!");
      // }
    });

    // New:
    server.on<string>("pong", (data) => {
      canvas.appendChild(document.createTextNode("Server answered: " + data));
      eventTarget.notify({ state: true, level: "error" });
    });

    // Old:
    // if (import.meta.hot) {
    //   import.meta.hot.on("pong", (data: string) => {
    //     canvas.appendChild(document.createTextNode("Server answered: " + data));
    //     eventTarget.dispatchEvent(
    //       new CustomEvent("notify", {
    //         detail: { state: true, level: "error" },
    //       })
    //     );
    //   });
    // }

    canvas.appendChild(button);
  },
});

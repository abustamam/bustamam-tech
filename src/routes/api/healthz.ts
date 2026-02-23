import { createFileRoute } from "@tanstack/react-router";
import { json } from "@tanstack/react-start";

export const Route = createFileRoute("/api/healthz")({
  server: {
    handlers: {
      GET: async () => {
        return json({ status: "ok" });
      },
    },
  },
});

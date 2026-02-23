import { createFileRoute } from "@tanstack/react-router";
import { json } from "@tanstack/react-start";
import { hostname } from "node:os";

function getServerId(): string {
  return (
    process.env.SERVER_ID ??
    process.env.INSTANCE_ID ??
    process.env.HOSTNAME ??
    hostname()
  );
}

export const Route = createFileRoute("/api/whoami")({
  server: {
    handlers: {
      GET: async () => {
        const serverId = getServerId();
        return json({
          message: `hello from server ${serverId}`,
          serverId,
          hostname: process.env.HOSTNAME ?? hostname(),
        });
      },
    },
  },
});

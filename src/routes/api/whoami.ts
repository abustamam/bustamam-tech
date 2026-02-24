import { createFileRoute } from "@tanstack/react-router";
import { json } from "@tanstack/react-start";

function getServerId(): string {
  return (
    process.env.SERVER_ID ?? 'unknown'
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
          pid: process.pid,
          time: new Date().toISOString(),
        });
      },
    },
  },
});
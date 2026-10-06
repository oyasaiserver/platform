import { useEffect, useRef } from "react";
import { useStore } from "../store/useStore";
import { api } from "../api/client";
import type { JobStatus } from "../types/api";

export function useJobProgress(jobId: string | null) {
  const setJobStatus = useStore((s) => s.setJobStatus);
  const setResult = useStore((s) => s.setResult);
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (!jobId) return;

    // Use the same host as the page (works with Vite proxy)
    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
    const wsUrl = `${protocol}//${window.location.host}/ws/${jobId}`;
    const ws = new WebSocket(wsUrl);
    wsRef.current = ws;

    ws.onmessage = async (event) => {
      const data = JSON.parse(event.data);
      if (data.ping) return;
      if (data.error) {
        setJobStatus({ status: "error", error: data.error } as JobStatus);
        return;
      }

      const status = data as JobStatus;
      setJobStatus(status);

      if (status.status === "complete") {
        try {
          const result = await api.getResult(jobId);
          setResult(result);
        } catch (e) {
          console.error("Failed to fetch result:", e);
        }
        ws.close();
      }
    };

    ws.onerror = () => {
      setJobStatus({ status: "error", error: "WebSocket connection failed" } as JobStatus);
    };

    return () => {
      ws.close();
      wsRef.current = null;
    };
  }, [jobId, setJobStatus, setResult]);
}

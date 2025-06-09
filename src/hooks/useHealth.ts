import { useQuery } from "@tanstack/react-query";
import type { Health } from "../types/health";

export function useHealth() {
  return useQuery({
    queryKey: ["health"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8080/actuator/health", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return (await response.json()) as Health;
    },
  });
}

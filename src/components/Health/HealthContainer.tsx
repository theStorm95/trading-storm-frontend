import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Health from "./Health";

const queryClient = new QueryClient();

export default function HealthContainer() {
  return (
    <QueryClientProvider client={queryClient}>
      <Health />
    </QueryClientProvider>
  );
}

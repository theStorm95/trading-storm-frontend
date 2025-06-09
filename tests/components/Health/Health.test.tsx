import { server } from "../../setupTests";
import { http, HttpResponse } from "msw";
import { render, screen } from "@testing-library/react";
import HealthContainer from "@/components/Health/HealthContainer";

describe("Health component", () => {
  it("should render on the screen", () => {
    server.use(
      http.get("http://localhost:8080/actuator/health", () => {
        return HttpResponse.json({ status: "UP" }, { status: 200 });
      })
    );

    render(<HealthContainer />);
    expect(screen.getByText(/backend/i)).toBeInTheDocument();
  });

  it("should render Up when the backend is healthy", async () => {
    server.use(
      http.get("http://localhost:8080/actuator/health", () => {
        return HttpResponse.json({ status: "UP" }, { status: 200 });
      })
    );

    render(<HealthContainer />);
    expect(await screen.findByText(/up/i)).toBeInTheDocument();
  });

  it("should render Down when the backend is unhealthy", async () => {
    server.use(
      http.get("http://localhost:8080/actuator/health", () => {
        return HttpResponse.json({ status: "DOWN" }, { status: 200 });
      })
    );

    render(<HealthContainer />);
    expect(await screen.findByText(/down/i)).toBeInTheDocument();
  });

  it("should render Down if the backend is unreachable", async () => {
    server.use(
      http.get("http://localhost:8080/actuator/health", () => {
        return HttpResponse.json({ status: "DOWN" }, { status: 503 });
      })
    );

    render(<HealthContainer />);
    expect(await screen.findByText(/down/i)).toBeInTheDocument();
  });
});

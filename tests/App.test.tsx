import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "@/App";

describe("App routing", () => {
  it("renders Health component at /health route", async () => {
    render(
      <MemoryRouter initialEntries={["/health"]}>
        <App />
      </MemoryRouter>
    );

    expect(await screen.findByText(/backend connection/i)).toBeInTheDocument();
  });

  it("does not render Health component at / route", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    const healthText = screen.queryByText(/backend connection/i);
    expect(healthText).not.toBeInTheDocument();
  });
});

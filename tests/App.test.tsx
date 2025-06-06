import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("App component", () => {
  it("renders Hello world", () => {
    render(<App />);

    expect(screen.getByText("Hello world!")).toBeInTheDocument();
  });
});

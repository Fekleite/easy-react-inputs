import { App } from "@/app";
import { render, screen } from "@testing-library/react";

describe("App", () => {
  it("should render the app", () => {
    render(<App />);

    expect(screen.getByText("Inputs Libs")).toBeInTheDocument();
  });
});

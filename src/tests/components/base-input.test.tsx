import { BaseInput } from "@/components/base-input";
import { render, screen } from "@testing-library/react";

describe("BaseInput", () => {
  it("should render the input", () => {
    render(<BaseInput />);

    expect(screen.getByTestId("easy-base-input")).toBeInTheDocument();
  });

  it("should render get the input by placeholder", () => {
    render(<BaseInput placeholder="Your name" />);

    expect(screen.getByPlaceholderText("Your name")).toBeInTheDocument();
  });

  it("should have the correct class names", () => {
    render(<BaseInput />);

    expect(screen.getByTestId("easy-base-input")).toHaveClass(
      "text-gray-700 text-sm outline-none placeholder:text-gray-400 disabled:bg-gray-200",
    );
  });

  it("should do classes merge correct", () => {
    render(<BaseInput className="w-32" />);

    expect(screen.getByTestId("easy-base-input")).toHaveClass(
      "text-gray-700 text-sm outline-none placeholder:text-gray-400 disabled:bg-gray-200 w-32",
    );
  });
});

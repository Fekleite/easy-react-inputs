import { TextInput } from "@/components/text-input";
import { render, screen } from "@testing-library/react";

describe("TextInput", () => {
  it("should render the input", () => {
    render(<TextInput />);

    expect(screen.getByTestId("text-input-container")).toBeInTheDocument();
  });

  it("should render the input with icon", () => {
    render(<TextInput type="email" withIcon />);

    expect(screen.getByTestId("text-input-icon")).toBeInTheDocument();
  });

  it("should not render the input with icon if doesn't have icon for the type", () => {
    render(<TextInput type="text" withIcon />);

    expect(screen.queryByTestId("text-input-icon")).not.toBeInTheDocument();
  });

  it("should change color when the input has error", () => {
    render(<TextInput type="email" error />);

    expect(screen.getByTestId("text-input-container").classList).toContain(
      "border-red-600",
    );
  });

  it("should change color when the input was success", () => {
    render(<TextInput type="email" success />);

    expect(screen.getByTestId("text-input-container").classList).toContain(
      "border-green-600",
    );
  });

  it("should change color when the input was disabled", () => {
    render(<TextInput type="email" disabled withIcon />);

    expect(screen.getByTestId("text-input-container").classList).toContain(
      "border-gray-300",
    );
    expect(screen.getByTestId("text-input-icon").classList).toContain(
      "text-gray-300",
    );
  });

  it("should define input id when receive id", () => {
    render(<TextInput id="input-name" />);

    expect(screen.getByTestId("easy-base-input").id).toBe("input-name");
  });

  it("should define input id when not receive id", () => {
    render(<TextInput name="name" />);

    expect(screen.getByTestId("easy-base-input").id).toBe("text-input-name");
  });

  it("should focus the input", () => {
    render(<TextInput />);

    const input = screen.getByTestId("text-input-container");
    input.focus();

    expect(input).toHaveFocus();
  });
});

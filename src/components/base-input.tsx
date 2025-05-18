import { cn } from "@/lib/utils";

export function BaseInput({ ...props }: React.ComponentProps<"input">) {
  return (
    <input
      {...props}
      data-testId="easy-base-input"
      className={cn([
        "text-gray-700 text-sm outline-none",
        "placeholder:text-gray-400",
        "disabled:bg-gray-200",
        props.className,
      ])}
    />
  );
}

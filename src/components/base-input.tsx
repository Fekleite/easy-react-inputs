import { cn } from "@/lib/utils";

export function BaseInput({ ...props }: React.ComponentProps<"input">) {
  return (
    <input
      {...props}
      data-testid="easy-base-input"
      className={cn([
        "w-full text-gray-700 text-sm outline-none",
        "placeholder:text-gray-400",
        "disabled:placeholder:text-gray-300",
        props.className,
      ])}
    />
  );
}

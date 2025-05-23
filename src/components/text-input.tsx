import { cn, getIconByType } from "@/lib/utils";

import { BaseInput } from "./base-input";

interface ITextInputProps extends React.ComponentProps<"input"> {
  error?: boolean;
  success?: boolean;
  withIcon?: boolean;
  type: "text" | "email" | "password" | "tel" | "url" | "search";
}

export function TextInput({
  error,
  success,
  withIcon,
  ...props
}: ITextInputProps) {
  const inputId = props.id ?? `text-input-${props.name}`;

  const Icon = getIconByType(props.type);

  return (
    <div
      className={cn([
        "flex min-h-10 w-full max-w-48 items-center rounded-lg border border-gray-500 p-2",
        "focus-within:border-2 focus-within:border-gray-700",
        error && "border-2 border-red-600",
        success && "border-2 border-green-600",
        props.disabled && "border-2 border-gray-300",
        props.className,
      ])}
      data-testid="text-input-container"
    >
      <BaseInput {...props} id={inputId} />

      {withIcon && Icon && (
        <Icon
          className={cn([
            "size-5 text-gray-500",
            props.disabled && "text-gray-300",
          ])}
          data-testid="text-input-icon"
        />
      )}
    </div>
  );
}

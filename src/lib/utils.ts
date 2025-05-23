import {
  EnvelopeIcon,
  LinkIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const ICON_BY_TYPE = {
  email: EnvelopeIcon,
  password: LockClosedIcon,
  url: LinkIcon,
  tel: PhoneIcon,
  search: MagnifyingGlassIcon,
};

export function getIconByType(type?: string) {
  if (!type) {
    return null;
  }

  return ICON_BY_TYPE[type as keyof typeof ICON_BY_TYPE];
}

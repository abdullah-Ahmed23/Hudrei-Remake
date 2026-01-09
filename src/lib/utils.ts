import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number | string) {
  if (price === undefined || price === null) return "";

  let numPrice: number;
  if (typeof price === "string") {
    const cleaned = price.toString().replace(/[^0-9.-]+/g, "");
    numPrice = parseFloat(cleaned);
  } else {
    numPrice = price;
  }

  if (isNaN(numPrice)) return "";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(numPrice);
}




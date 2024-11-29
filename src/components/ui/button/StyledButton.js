"use client";
export default function StyledButton({
  children,
  className,
  color = "blue-600",
  url = "/",
}) {
  return (
    <a
      href={url}
      target="_blank"
      className={`font-sans text-sm font-medium px-4 py-2 bg-${color} rounded-md flex gap-2 items-center ${className}`}
    >
      {children}
    </a>
  );
}

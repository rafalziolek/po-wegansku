import React from "react";

export default function LinkButton({
  href,
  label,
  download,
}: {
  href: string;
  label: string;
  download?: boolean;
}) {
  return (
    <a
      className=" transition-colors flex items-center justify-center border text-black border-black bg-white hover:bg-black box-border py-2 px-6 hover:text-white font-sans text-sm font-medium rounded-full"
      href={href}
      download={download}
    >
      {label}
    </a>
  );
}

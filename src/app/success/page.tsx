import React from "react";
import { CheckCircledIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
export default function SuccessPage() {
  return (
    <div className="p-3 h-screen">
      <div className=" bg-white rounded-2xl h-full w-full flex flex-col items-center justify-center">
        <div className="flex flex-col gap-y-5 py-28 items-center justify-center px-10 max-w-[800px]">
          <CheckCircledIcon className="text-green-500 w-16 h-16" />
          <h1 className="text-6xl">Dzięki za zakup ebooka!</h1>
          <h3 className="font-sans">
            Wkrótce dostaniesz wiadomość email z linkiem do jego pobrania.
            Smacznego!
          </h3>

          <footer className="italic text-2xl flex flex-col gap-y-2 items-center mt-8 w-full">
            <hr className="border-dashed border-black w-full mb-8" />
            <a
              href="https://instagram.com/chmiel.vegan"
              className="flex flex-col gap-y-2 items-center"
            >
              <InstagramLogoIcon className="text-gray-500 w-5 h-5" />
              chmiel.vegan
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}

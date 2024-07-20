import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
export default function NotFound() {
  return (
    <div className=" gap-y-8 flex flex-col items-center justify-center h-screen max-w-[650px] text-center m-auto">
      <div className="flex flex-col gap-y-6">
        <h1 className="text-4xl">
          Ups! Chyba ktoś zjadł tę stronę razem z naszymi wegańskimi krówkami 💔
        </h1>
        <p className=" font-sans text-m">
          Nic nie szkodzi. Jeżeli szukasz mojego ebooka, znajdziesz go na
          stronie głównej.
        </p>
      </div>
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-sans font-medium bg-neutral-200/70 py-2 px-4 rounded-full text-sm hover:bg-neutral-200 hover:text-neutral-900"
      >
        Przejdź do strony głównej
        <ArrowRightIcon />
      </Link>
    </div>
  );
}

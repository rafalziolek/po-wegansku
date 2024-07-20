import React from "react";
import { CheckCircledIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import { sql } from "@vercel/postgres";
import Image from "next/image";
import Cover from "/public/img/preview/cover.jpg";
import LinkButton from "@/components/LinkButton";
import { notFound } from "next/navigation";

async function validatePurchaseId(purchaseId: string) {
  const getPurchaseData =
    await sql`SELECT * FROM purchases WHERE purchase_id = ${purchaseId}`;

  if (getPurchaseData.rows.length === 0) {
    return notFound();
  }
  return getPurchaseData.rows[0];
}

export default async function SuccessPage({
  params,
}: {
  params: { purchaseId: string };
}) {
  const purchaseData = await validatePurchaseId(params.purchaseId);

  if (!purchaseData) {
    return <div>This liks is invalid</div>;
  }
  return (
    <div className="p-3 min-h-screen flex flex-col items-center justify-center">
      <div className="  m-auto bg-white rounded-2xl flex flex-col gap-y-5 py-16 px-16 max-w-[560px] max-h-[fit-content]">
        <div className="text-center flex-col gap-y-8 pb-8 items-center justify-center flex">
          <CheckCircledIcon className="text-green-500 w-16 h-16 text-center" />
          <h1 className="text-5xl">Dzięki za zakup ebooka!</h1>
          <h3 className="font-sans">
            Możesz go pobrać teraz, klikając przycisk poniżej lub przez maila,
            który wkrótce otrzymasz. Smacznego!
          </h3>
        </div>

        <ul className="flex flex-col font-sans">
          <li className="flex flex-row gap-x-2 justify-between py-4 border-b border-dashed border-black">
            <h4>Mail:</h4>
            <span className="font-medium">{purchaseData.email}</span>
          </li>
          <li className="flex flex-row gap-x-2 justify-between py-4 border-b border-dashed border-black">
            <h4>Cena:</h4>
            <span className="font-medium">49 zł</span>
          </li>
        </ul>
        <div className="flex flex-col items-stretch justify-center mt-10 gap-y-6">
          <div className="font-sans flex flex-row gap-x-4 items-center">
            <Image
              className="border border-neutral-200 rounded-md"
              src={Cover}
              alt="ebook"
              width={60}
            />
            <div className="flex flex-col ">
              <span className="font-medium">Po Wegańsku. Na słodko.</span>
              <span className="text-sm">Autorka: Nikola Chmiel</span>
            </div>
          </div>
          <LinkButton
            label="Pobierz ebooka"
            href="https://j8gqkv04whnigint.public.blob.vercel-storage.com/powegansku-naslodko-nikolachmiel-LAcTGscBCfMuFL10EWy9CROc6cB3Zt.pdf?download=1"
          />
        </div>
      </div>
    </div>
  );
}

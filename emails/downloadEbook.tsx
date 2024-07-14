import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
  Font,
} from "@react-email/components";
import * as React from "react";

interface DownloadEbookEmailProps {
  name?: string;
}

export const DownloadEbookEmail = ({ name }: DownloadEbookEmailProps) => {
  const previewText = `Dzięki za zakup ebooka!`;

  return (
    <Html>
      <Head>
        <Font
          fontFamily="Instrument Sans"
          fallbackFontFamily="sans-serif"
          webFont={{
            url: "https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 my-auto mx-auto font-sans px-[8px]">
          <Container className=" rounded-2xl bg-white mt-[64px] mx-auto p-[32px] max-w-[560px]">
            <Heading className="text-black text-[36px] font-medium p-0 mx-0 mb-[56px]">
              Twój ebook jest gotowy do pobrania!
            </Heading>
            <Text className="text-black text-[20px] leading-[24px]">
              Cześć <span className="font-medium">{name}</span>!
            </Text>
            <Text className="text-black text-[15px] leading-[24px]">
              Dziękuję za zakup mojego ebooka{" "}
              <span className="font-medium italic">
                "Po Wegańsku. Na słodko"
              </span>
              . Mam nadzieję, że będzie on dla Ciebie inspirujący i przydatny.
              Możesz go pobrać klikając w poniższy przycisk.
            </Text>

            <Section className="my-[48px]">
              <Button
                className="bg-black rounded-full text-white text-[15px] font-semibold no-underline px-[20px] py-[8px]"
                href="https://j8gqkv04whnigint.public.blob.vercel-storage.com/powegansku-naslodko-nikolachmiel-LAcTGscBCfMuFL10EWy9CROc6cB3Zt.pdf?download=1"
              >
                Pobierz ebooka
              </Button>
            </Section>
            <Hr className="my-[40px] border-b-0 border-dashed border-black" />
            <Section className="mt-[40px] ">
              <Img
                className="h-[80px] w-[80px] rounded-full"
                src="https://j8gqkv04whnigint.public.blob.vercel-storage.com/profilePic-lUvhWqWuzEbBoOtF8E4GuQUynLSenP.png"
              ></Img>
              <Text className="text-black text-[20px] font-semibold my-[8px]">
                Nikola Chmiel
              </Text>
              <Link
                className="text-neutral-800 underline"
                href="https://instagram.com/chmiel.vegan"
              >
                Instagram
              </Link>
              <Link
                className="text-neutral-800 underline ml-[12px]"
                href="mailto:nikola@chmielvegan.com"
              >
                nikola@chmielvegan.com
              </Link>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

DownloadEbookEmail.PreviewProps = {
  name: "alanturing",
  mail: "alan.turing@example.com",
} as DownloadEbookEmailProps;

export default DownloadEbookEmail;

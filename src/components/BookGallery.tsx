"use client";
import React from "react";
import Image from "next/image";

import Cover from "../../public/img/preview/cover.jpg";
import Rafaello1 from "../../public/img/preview/rafaello-1.jpeg";
import Rafaello2 from "../../public/img/preview/rafaello-2.jpeg";
import Rafaello3 from "../../public/img/preview/rafaello-3.jpeg";
import Rafaello4 from "../../public/img/preview/rafaello-4.jpeg";
import SpisTresci1 from "../../public/img/preview/spis-tresci-1.jpeg";
import SpisTresci2 from "../../public/img/preview/spis-tresci-2.jpeg";
import SpisTresci3 from "../../public/img/preview/spis-tresci-3.jpeg";
import SpisTresci4 from "../../public/img/preview/spis-tresci-4.jpeg";

const images = [
  Cover,
  SpisTresci1,
  SpisTresci2,
  SpisTresci3,
  SpisTresci4,
  Rafaello1,
  Rafaello2,
  Rafaello3,
  Rafaello4,
];

export default function BookGallery() {
  return (
    <div className="flex md:flex-col flex-row gap-10 justify-start items-center overflow-scroll p-14">
      {images.map((image) => (
        <Image
          src={image}
          alt="Po wegańsku. Na słodko. Okładka."
          className="w-full h-full aspect-auto rounded-2xl"
        />
      ))}
    </div>
  );
}

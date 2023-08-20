"use client";

import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Image from "next/image";
import { recomandationData } from "@/data/recomandationData";
import { generateUniqueId } from "@/helpers/helpers";
import './Recomandation.css'

const responsive = {
  0: { items: 1 },
};

const items = recomandationData.map((item) => {
  return (
    <div
      key={generateUniqueId()}
      className="item flex flex-col gap-4 bg-sky-900/30 p-4 rounded-lg overflow-y-auto max-h-[350px]"
      data-value="1"
    >
      <div className="flex flex-row gap-2">
      <div className="w-[60px] h-[60px] bg-black">
        <Image src={item.image} width={60} height={60} loading="eager" alt={item.name} />
        </div>
        <div>
          <h3 className="text-sky-600 text-lg font-bold mb-2">{item.name}</h3>
          <h4 className="text-sky-800 text-sm">{item.subTitle}</h4>
        </div>
      </div>
      <pre className="text-white whitespace-pre-wrap px-6 md:px-10 text-sm">{`${item.message}`}</pre>
    </div>
  );
});

const Recomandation = () => (
  <div className="bg-black/50 p-4 md:p-6 border border-sky-950 rounded-lg mt-6 md:mt-8 static">
    <h3 className="w-fit mb-6 mx-auto text-lg font-bold text-orange-500 py-2 border-b-2 border-sky-400">
      Recomandations
    </h3>
    <div className="relative overflow-hidden">
      <AliceCarousel
        mouseTracking
        autoPlay
        items={items}
        responsive={responsive}
        autoPlayStrategy="none"
        autoPlayInterval={4000}
        animationDuration={2000}
        controlsStrategy="alternate"
        infinite
      />
    </div>
  </div>
);

export default Recomandation;

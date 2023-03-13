import React, { useRef, useState } from "react";
import Slider from "react-slick";
import TitleDesc from "./TitleDesc";
import CardReview from "./CardReview";
import IconArrowLeft from "../../assets/img/left.svg";
import IconArrowRight from "../../assets/img/right.svg";

const reviews = [
  {
    name: "Cristiano",
    address: "Manchester",
    comment: "“enakk”.",
  },
  {
    name: "Maguaire",
    address: "Kedu",
    comment: "“kopi kok manis”.",
  },
  {
    name: "Messi",
    address: "PSG",
    comment: "““mahal”.",
  },
  {
    name: "Bambang Pamungkas",
    address: "Jakarta",
    comment: "““apaan tuh”.",
  },
  {
    name: "Ponaryo",
    address: "Jakarta",
    comment: "““biasa aja ”.",
  },
];

export default function Review() {
  const [indexSlick, setIndexSlick] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    afterChange: (index) => setIndexSlick(index),
  };

  const slickRef = useRef();

  function fnNext() {
    slickRef?.current?.slickNext();
  }

  function fnPrev() {
    slickRef?.current?.slickPrev();
  }

  return (
    <div>
      <TitleDesc
        title={"Trusted by Thousands of Happy Customer"}
        desc=" These are the stories of our customers who have joined us with great
        pleasure when using this crazy feature."
      />

      <div>
        <Slider {...settings} arrows={false} ref={slickRef}>
          {reviews.map((val, index) => (
            <div className={index === 0 ? "ml-28" : ""}>
              <CardReview {...val} key={index} isSelect={index === 0} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="container mx-auto max-w-5xl flex flex-row justify-between items-center mt-12 ">
        <div className="flex space-x-2">
          {reviews.map((_, index) => (
            <div
              className={`${
                indexSlick === index
                  ? "w-8 bg-amber-500 transition-all duration-200 ease-in-out"
                  : "w-4 bg-gray-300 transition-all duration-200 ease-in-out"
              } h-4 rounded-full`}
            />
          ))}
        </div>
        <div className="flex flex-row space-x-5">
          <div
            className="flex self-center border border-amber-500 rounded-full p-5 cursor-pointer"
            onClick={() => fnPrev()}
          >
            <img src={IconArrowLeft} alt="arrow-left" className="w-5 h-5" />
          </div>
          <div
            className="flex self-center bg-amber-500 rounded-full p-5 cursor-pointer"
            onClick={() => fnNext()}
          >
            <img src={IconArrowRight} alt="arrow-right" className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

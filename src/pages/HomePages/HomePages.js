import IconMaps from "../../assets/img/user.svg";
import IconUsers from "../../assets/img/location.svg";
import IconCustumers from "../../assets/img/user.svg";
import hero1 from "../../assets/img/hero1-bg.png";
import Check from "../../assets/img/check.svg";
import Global from "../../assets/img/earth.png";
import Sponsor from "../../assets/img/sponsor.svg";

import Header from "../../components/Header";
import TitleDesc from "../../components/HomePages/TitleDesc";
import CardPlan from "../../components/HomePages/CardPlan";
import Review from "../../components/HomePages/Review";
import SubscribeNow from "../../components/HomePages/SubscribeNow";
import Footer from "../../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/background.css";

const HomePages = () => {
  const section3 = [
    {
      icon: IconMaps,
      lable: "users",
      total: "30+",
    },
    {
      icon: IconUsers,
      lable: "users",
      total: "30+",
    },
    {
      icon: IconCustumers,
      lable: "users",
      total: "30+",
    },
  ];

  const features = [
    "High quality beans.",
    "Healthy meals, you can request the ingredients",
    "Chat with our staff to get better experience for ordering",
    "Free member card with a minimum purchase of IDR 200.000..",
  ];

  const plans = [
    {
      title: "Hazelnut Latte",
      features: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
      ],
      price: "IDR 25.000",
    },
    {
      title: "Hazelnut Latte",
      features: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
        "Connect Anyware",
      ],
      price: "IDR 25.000",
    },
    {
      title: "Hazelnut Latte",
      features: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
        "Connect Anyware",
        "Connect Anyware",
      ],
      price: "IDR 25.000",
    },
  ];

  return (
    <div className="bg-white">
      <Header />
      <main className="mt-4">
        <div className="home-bg">
          <div className="container max-w-5xl mx-auto  grid grid-cols-2 py-24 ">
            <div>
              <h1 className="font-bold text-4xl pb-5 text-white">
                Start Your Day with
                <br />
                Coffee and Good Meals
              </h1>
              <div className="font-normal text-xs pb-12 text-white">
                We provide high quality beans, good taste, and healthy <br />
                meals made by love just for you. Start your day with us <br />
                for a bigger smile!
              </div>
              <button className="py-4 px-16 bg-amber-500 rounded-md text-amber-900 drop-shadow-3xl">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="container max-w-5xl mx-auto grid grid-cols-3 shadow-2xl rounded-md py-4">
          {section3.map((val, index) => {
            return (
              <div
                key={index}
                className={`flex flex-row py-4  space-x-6 justify-center ${
                  index + 1 !== section3.length && "border-r border-gray-200"
                }`}
              >
                <div className="rounded-full  p-3 ">
                  <img alt={val.lable} src={val.icon} className="w-12 h-12" />
                </div>
                <div>
                  <div>{val.total}</div>
                  <div>{val.lable}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="container max-w-5xl mx-auto grid grid-cols-2 py-24  items-center ">
          <img src={hero1} alt={"features-lasles-vpn"} />
          <div className="px-16 space-y-4 ">
            <div className="font-medium text-3xl">
              We Provide Good Coffee and Healthy Meals
            </div>
            <div className="text-sm font-normal">
              You can explore the menu that we provide with fun and have their
              own taste and make your day better.
            </div>
            {features.map((val, index) => {
              return (
                <div className="flex items-center space-x-3" key={index}>
                  <img
                    src={Check}
                    alt="features-check-coffeeshop"
                    className="w-6 h-6"
                  />
                  <div className="text-xs">{val}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-gray-50 py-24">
          <TitleDesc
            title={"Here is People’s Favorite"}
            desc={`Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!`}
          />
          <div className=" container max-w-5xl mx-auto grid grid-cols-3 space-x-6">
            {plans.map((val, index) => {
              return (
                <CardPlan
                  key={index}
                  {...val}
                  isSelect={index + 1 === plans.length}
                />
              );
            })}
          </div>
          <div className="container max-w-5xl mx-auto py-24">
            <TitleDesc
              title={"Visit Our Store in the Spot on the Map Below"}
              desc={` See our store in every city on the spot and spen your good day there. See you soon!`}
            />
            <img src={Global} alt={"Global"} className="my-20" />
            <div className="flex flex-row justify-center font-normal font-medium text-3xl">
              Our Partner
            </div>
            <div className="flex flex-row justify-center">
              <img src={Sponsor} className="w-53 h-34" alt={"sponsor"} />
            </div>
          </div>
          <Review />
        </div>
        <div className="bg-gray-100">
          <SubscribeNow />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePages;

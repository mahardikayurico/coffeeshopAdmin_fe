import React from "react";

export default function SubscribeNow() {
  return (
    <div className=" relative">
      <div className="absolute left-0 right-0 bg-gray-50 h-1/2" />
      <div className=" container mx-auto relative max-w-5xl bg-white rounded-lg px-12 py-10 flex items-center justify-between">
        <div>
          <div className="text-3xl font-medium mb-4">
            Check our promo
            <br /> today!
          </div>
          <div className="font-normal text-xs">
            Let's see the deals and pick yours!
          </div>
        </div>
        <button className="bg-amber-500 rounded-md drop-shadow-3xl text-amber-900 p-3 px-12">
          See Promo
        </button>
      </div>
    </div>
  );
}

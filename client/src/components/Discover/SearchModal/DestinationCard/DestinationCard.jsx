import React from "react";

export function DestinationCard({ img, name }) {
  return (
    <div className="">
      <img
        className="h-[122px] w-[122px] rounded-[12px] border border-solid border-[#dddddd] hover:border-[#b0b0b0]"
        src={img}
        alt=""
      />
      <div className="m-y-[4px] m-t-[8px]">{name}</div>
    </div>
  );
}

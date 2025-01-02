import React from "react";
import kk from "../assets/kk2.png";
export default function Logo() {
  return (
   <div className="w-[200px] h-[200px]">
      {" "}
      {}
      <img
        src={kk}
        alt="user-photo"
        className="bg-neutral-800 dark:bg-slate-50 rounded-full border-none w-full h-full object-cover"
      />
    </div>
  );
}

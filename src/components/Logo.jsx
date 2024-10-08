import React from "react";
import kk from "../assets/kk.png";
export default function Logo() {
  return (
    <div className="w-[100px]">
      <img
        src={kk}
        alt="user-photo"
        className="bg-neutral-800 dark:bg-slate-50 rounded-full border-none"
      />
    </div>
  );
}

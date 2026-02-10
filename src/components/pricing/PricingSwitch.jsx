"use client";

import { useEffect, useState } from "react";

export default function PricingSwitch({
  type = "shared",
  onToggle,
  isToggleable = true,
}) {
  const [enabled, setEnabled] = useState(type === "dedicated"); // enabled => dedicated

  useEffect(() => {
    setEnabled(type === "dedicated");
  }, [type]);

  const setNext = (checked) => {
    if (!isToggleable) return;

    setEnabled(checked);
    const newType = checked ? "dedicated" : "shared";
    onToggle?.(newType);
  };

  return (
    <div className="flex items-center gap-3 md:gap-5">
      <span className={`font-bold text-lg md:text-xl ${enabled ? "text-gray-500" : "text-blue-400"}`}>
        SHARED PLAN
      </span>

      {/* Switch */}
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          checked={enabled}
          onChange={(e) => setNext(e.target.checked)}
          className="peer sr-only"
        />

        <span className="h-7 w-14 rounded-full bg-gray-300 transition peer-checked:bg-blue-600" />
        <span className="absolute left-1 top-1 h-5 w-5 rounded-full bg-white transition-transform duration-200 peer-checked:translate-x-7" />
      </label>

      <span className={`font-bold text-lg md:text-xl transition ${enabled ? "text-blue-400" : "text-gray-500"}`}>
        DEDICATED PLAN
      </span>
    </div>
  );
}
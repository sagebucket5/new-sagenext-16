"use client";

import { Switch } from "@headlessui/react";
import { useState, useEffect } from "react";

export default function PricingSwitch({
  type = "shared",
  onToggle,
  isToggleable = true,
}) {
  const [enabled, setEnabled] = useState(type === "dedicated");

  useEffect(() => {
    setEnabled(type === "dedicated");
  }, [type]);

  const handleToggle = () => {
    if (!isToggleable) return;
    const newType = enabled ? "shared" : "dedicated";
    setEnabled(!enabled);
    onToggle?.(newType);
  };

  return (
    <>
      <span
        className={`font-bold text-lg md:text-xl ${enabled ? "text-gray-500" : "text-blue-400"
          }`}
      >
        SHARED PLAN
      </span>

      <Switch
        checked={enabled}
        onChange={handleToggle}
        className="group inline-flex h-7 w-14 items-center rounded-full bg-gray-300 transition data-checked:bg-blue-600"
      >
        <span className="size-5 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-7 md:group-data-checked:translate-x-8" />
      </Switch>

      <span
        className={`font-bold text-lg md:text-xl transition text-right md:text-left ${enabled ? "text-blue-400" : "text-gray-500"
          }`}
      >
        DEDICATED PLAN
      </span>
    </>
  );
}

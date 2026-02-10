"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuCalculator, LuCalendarFold, LuBuilding2 } from "react-icons/lu";
import { IoAddOutline, IoRemove } from "react-icons/io5";
import { IoIosCloudOutline } from "react-icons/io";
import { BsHdd } from "react-icons/bs";
import { GoStack } from "react-icons/go";
import { FiUsers } from "react-icons/fi";
import PricingSwitch from "@/components/pricing/PricingSwitch";
import PricingSummary from "./PricingSummary";
import AppCard from "../AppCard";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Image from "next/image";

export default function ApplicationConfigurator({ Quickbooks, TaxSoftware, Sage, Cloud, onConfigChange }) {
  const [configurations, setConfigurations] = useState([]);
  const [type, setType] = useState("shared");
  const [appUsers, setAppUsers] = useState(1);

  useEffect(() => {
    onConfigChange?.([...configurations]);
  }, [configurations, onConfigChange]);

  const dedicatedPricingMap = {
    1: 59, 2: 80, 3: 115, 4: 150, 5: 180,
    6: 210, 7: 240, 8: 260, 9: 285, 10: 310,
    11: 335, 12: 345, 13: 365, 14: 385, 15: 390,
  };
  const dedicatedRAM = {
    1: 4, 2: 6, 3: 6, 4: 8, 5: 10,
    6: 10, 7: 10, 8: 12, 9: 12, 10: 14,
    11: 14, 12: 16, 13: 16, 14: 18, 15: 18,
  };
  const dedicatedStorage = {
    1: 6, 2: 12, 3: 18, 4: 24, 5: 30,
    6: 36, 7: 42, 8: 56, 9: 63, 10: 70,
    11: 77, 12: 120, 13: 130, 14: 140, 15: 195,
  };

  const ADDON_PRICE = 10;

  const getTieredTotalPrice = (userCount, t = "shared") => {
    if (userCount <= 0) return 0;
    if (t === "dedicated") {
      return dedicatedPricingMap[userCount] || dedicatedPricingMap[15];
    }
    // shared
    let total = 33;
    if (userCount > 1) total += Math.min(userCount - 1, 4) * 30;
    if (userCount > 5) total += (userCount - 5) * 27;
    return total;
  };

  // --- helpers for selection state & toggle ---
  const isSelected = useCallback(
    (label) => configurations.some((c) => c.name === label),
    [configurations]
  );

  const canSelect = (item) => (type === "shared" ? item.type === "shared" : true);

  const normalizePrimaryAndAddons = (list, users = appUsers) => {
    // Recompute pricing so index 0 is full price; the rest are $10 add-ons
    return list.map((app, idx) => ({
      ...app,
      users,
      totalPrice: idx === 0 ? getTieredTotalPrice(users, app.type) : ADDON_PRICE,
    }));
  };

  const addApplication = (appName, appType = "shared") => {
    setConfigurations((prev) => {
      if (prev.some((app) => app.name === appName)) return prev;

      const newItem = {
        name: appName,
        users: appUsers,
        type: appType,
        ram: dedicatedRAM[1] || 0,
        storage: dedicatedStorage[1] || 0,
        totalPrice: prev.length === 0
          ? getTieredTotalPrice(appUsers, appType) // primary
          : ADDON_PRICE, // add-on
      };
      return [...prev, newItem];
    });
  };

  const removeApp = (appName) => {
    setConfigurations((prev) => {
      const next = prev.filter((app) => app.name !== appName);
      // Recalculate primary vs add-ons
      return normalizePrimaryAndAddons(next);
    });
  };

  // Only the primary app’s price changes with user count; add-ons stay $10
  const updateUserCount = (delta) => {
    setConfigurations((prev) => {
      const newUsers = Math.max(1, Math.min(15, appUsers + delta));
      setAppUsers(newUsers);
      return normalizePrimaryAndAddons(prev, newUsers);
    });
  };

  const toggleSelection = (item) => {
    if (!canSelect(item)) return;
    if (isSelected(item.label)) {
      removeApp(item.label);
    } else {
      addApplication(item.label, type);
    }
  };
  // --- end helpers ---

  const pricingSummaryProps = useMemo(() => {
    const monthlyTotal = configurations.reduce(
      (sum, app) => sum + (app.totalPrice || 0),
      0
    );
    const annualTotal = monthlyTotal * 12;
    const discountValue = annualTotal * 0.1;
    const discountedAnnual = annualTotal - discountValue;

    const halfYearlyTotal = monthlyTotal * 6;
    const discountHalfValue = halfYearlyTotal * 0.05;
    const discountedHalfYearly = halfYearlyTotal - discountHalfValue;

    return {
      monthlyTotal: monthlyTotal.toFixed(2),
      annualTotal: annualTotal.toFixed(2),
      halfYearlyTotal: halfYearlyTotal.toFixed(2),
      discountValue: discountValue.toFixed(2),
      discountedAnnual: discountedAnnual.toFixed(2),
      discountedHalfYearly: discountedHalfYearly.toFixed(2),
    };
  }, [configurations]);

  const groups = [
    { title: "Quickbooks", icon: <LuCalculator size={23} className="text-[#2B77FA]" />, data: Quickbooks },
    { title: "Tax Software", icon: <LuCalendarFold size={23} className="text-[#2B77FA]" />, data: TaxSoftware },
    { title: "Sage Hosting", icon: <LuBuilding2 size={23} className="text-[#2B77FA]" />, data: Sage },
    { title: "Cloud Hosting", icon: <IoIosCloudOutline size={23} className="text-[#2B77FA]" />, data: Cloud },
  ];

  const handleTypeToggle = () => {
    setType((t) => (t === "shared" ? "dedicated" : "shared"));
    setConfigurations([]);
    setAppUsers(1);
  };

  return (
    <section className="w-[100%] md:w-[86%] mt-6 grid grid-cols-1 md:grid-cols-6 mx-auto rounded-[50px] border-b md:border-l border-gray-300 shadow-[0px_4px_8.3px_0px_#00000014] overflow-hidden">
      <div className="col-span-1 lg:col-span-6 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
        <div className="flex items-center justify-center gap-1 md:gap-4 bg-white h-full p-3 md:!p-7 rounded-tr-[40px] w-full overflow-hidden md:w-[45%] border-b-[0.5px]">
          <PricingSwitch
            type={type}
            onToggle={handleTypeToggle}
          />
        </div>

        <span className="text-white text-sm font-medium flex items-center gap-1.5">
          <AiOutlineQuestionCircle size={18} />
          What is shared and dedicated?
        </span>
      </div>

      <div className="col-span-6 md:col-span-2 md:!py-7 bg-[#efefef]">
        <div className="mx-auto w-full max-w-lg bg-white/5">
          {groups.map((group, idx) => (
            <details
              key={group.title}
              className="rounded-[14px]"
              open={idx === 0 ? true : undefined} // default open first
            >
              <summary className="group flex w-full cursor-pointer list-none items-center justify-between bg-white py-4 px-2.5">
                <span className="text-[18px] font-bold text-[#000000] flex items-center gap-2">
                  {group.title}
                </span>
                <MdKeyboardArrowDown className="size-5 fill-black/60 transition-all group-open:rotate-180" />
              </summary>

              {/* Panel */}
              <div className="mt-2 text-sm/5 text-black/50">
                <ul className="mt-2">
                  {group.data.map((item) => {
                    const allowed = canSelect(item);
                    const selected = isSelected(item.label);

                    return (
                      <li
                        key={item.value ?? item.label}
                        className={`font-normal !text-[16px] !text-[#4A4A4A] p-[13px_16px] m-2 flex items-center justify-between hover:bg-white rounded-sm
                ${allowed ? "cursor-pointer" : "opacity-50"}`}
                        onClick={() => toggleSelection(item)}
                        role={allowed ? "button" : undefined}
                        aria-disabled={!allowed}
                        aria-pressed={selected}
                      >
                        {item.label}

                        <input
                          type="checkbox"
                          className="h-4 w-4 border-black border-2"
                          checked={selected}
                          disabled={!allowed}
                          readOnly
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleSelection(item);
                          }}
                          aria-label={`Select ${item.label}`}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </details>
          ))}

        </div>
      </div>

      <div className="col-span-4 md:h-[87vh] md:border-l border-neutral-200 bg-white rounded-tr-[40px] pt-4 relative">
        <div className="min-h-[40vh]">
          {configurations.length > 0 && (
            <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4 px-4">
              <p className="font-bold">Number of Users</p>
              <div className="flex items-center justify-center gap-2 md:gap-4 mb-1">
                <button
                  onClick={() => updateUserCount(-1)}
                  className="cursor-pointer rounded-l-sm bg-[#334064] h-6 w-8 inline-flex justify-center items-center"
                >
                  <IoRemove size={19} className="text-white" />
                </button>
                <span className="rounded-full !text-[15px] !tracking-[1%] !font-bold h-6 w-8 inline-flex justify-center items-center">
                  {appUsers}
                </span>
                <button
                  onClick={() => updateUserCount(1)}
                  className="cursor-pointer rounded-r-sm bg-[#334064] h-6 w-8 inline-flex justify-center items-center"
                >
                  <IoAddOutline size={19} className="text-white" />
                </button>
              </div>
            </div>
          )}

          {configurations.length > 0 ? (
            configurations.map((app) => (
              <AppCard
                key={app.name}
                app={app}
                onUpdateUserCount={updateUserCount}
                onRemoveApp={() => removeApp(app.name)}
                onToggleType={(appName, newType) => {
                  setConfigurations((prev) =>
                    prev.map((item, i) =>
                      item.name === appName
                        ? {
                          ...item,
                          type: newType,
                          // Only primary app’s price changes with type
                          totalPrice:
                            i === 0
                              ? getTieredTotalPrice(item.users, newType)
                              : ADDON_PRICE,
                        }
                        : item
                    )
                  );
                }}
              />
            ))
          ) : (
            <div className="min-h-[53.6vh] flex flex-col items-center justify-center !text-[#0000009f]">
              <Image
                height={160}
                width={160}
                alt="no-data"
                src="/assets/images/pricing/price_cal.svg"
                className="mt-4 select-none"
              />
            </div>
          )}

          {configurations.length > 0 && (
            <div className="items-center justify-between gap-6 mt-4 space-y-[1px]">
              <div className="px-4 py-3 bg-neutral-100 flex gap-3 items-center">
                <span className="font-bold text-[16px] tracking-[1%] flex items-center justify-start gap-2 text-black md:w-2/6">
                  <BsHdd size={24} className="text-gray-400" /> Storage
                </span>
                <h4 className="changer !text-[14px] !text-black tracking-[1%] font-extrabold !mb-0">
                  {dedicatedStorage[
                    configurations.reduce((sum, app) => sum + app.users, 0)
                  ] || 0}
                  GB
                </h4>
              </div>

              <div className="px-4 py-2 bg-neutral-100 flex gap-3 items-center">
                <span className="font-bold text-[16px] tracking-[1%] flex items-center justify-start gap-2 text-black md:w-2/6">
                  <GoStack size={24} className="text-gray-400" /> Ram
                </span>
                <h4 className="changer !text-[14px] !text-black tracking-[1%] font-extrabold !mb-0">
                  {dedicatedRAM[
                    configurations.reduce((sum, app) => sum + app.users, 0)
                  ] || 0}
                  GB
                </h4>
              </div>

              <div className="px-4 py-2 bg-neutral-100 flex gap-3 items-center">
                <span className="font-bold text-[16px] tracking-[1%] flex items-center justify-start gap-2 text-black md:w-2/6">
                  <FiUsers size={24} className="text-gray-400" /> Users
                </span>
                <h4 className="changer !text-[14px] !text-black tracking-[1%] font-extrabold !mb-0">
                  {appUsers}
                </h4>
              </div>
            </div>
          )}
        </div>

        {configurations.length > 0 && (
          <PricingSummary
            {...pricingSummaryProps}
            appSummry={configurations}
            onUpdateUserCount={updateUserCount}
          />
        )}
      </div>
    </section>
  );
}

import { useState, useCallback } from "react";
import ApplicationConfigurator from "./ApplicationConfigurator";
import PricingModal from "./PricingModal";

export default function PricingPage({ Quickbooks, TaxSoftware, Sage, Cloud }) {
  const [configurations, setConfigurations] = useState([]);

  const handleConfigChange = useCallback((newConfigs) => {
    setConfigurations(newConfigs);
  }, []);
  const [appSummry, setAppSummry] = useState([]);

  console.log("PricingPage configurations:", configurations);

  return (
    <>
      <ApplicationConfigurator
        Quickbooks={Quickbooks}
        TaxSoftware={TaxSoftware}
        Sage={Sage}
        Cloud={Cloud}
        // onConfigChange={handleConfigChange}
        onConfigChange={setAppSummry} 
      />

      
      <PricingModal selectedApps={newConfigs} />
    </>
  );
}

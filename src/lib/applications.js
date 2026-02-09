const applications = [
  { value: "", label: "Select Application" },
  { value: "None", label: "None" },
  { value: "QB Pro", label: "QuickBooks Pro" },
  { value: "QB Premier", label: "QuickBooks Premier" },
  { value: "QB Accounts", label: "QuickBooks Accountants" },
  { value: "QB Enterprise", label: "QuickBooks Enterprise" },
  { value: "QB POS", label: "QuickBooks POS" },
  { value: "Sage 50", label: "Sage 50" },
  { value: "Sage 100", label: "Sage 100" },
  { value: "Sage 100 contractor", label: "Sage 100 Contractor" },
  { value: "Sage 300", label: "Sage 300" },
  { value: "Sage 300 CRE", label: "Sage 300 CRE" },
  { value: "Sage 500", label: "Sage 500" },
  { value: "Drake", label: "Drake" },
  { value: "Ultra-Tax CS", label: "Ultra-Tax CS" },
  { value: "ATX Tax Software", label: "ATX Tax Software" },
  { value: "Tax Dome", label: "Tax Dome" },
  { value: "Tax1099", label: "Tax1099" },
  { value: "TaxAct", label: "TaxAct" },
  { value: "Lacerte", label: "Lacerte" },
  { value: "Proseries", label: "Proseries" },
  { value: "TaxWise", label: "TaxWise" },
  { value: "Desktop as a Service", label: "Desktop as a Service" },
  { value: "Hosted Virtual Desktop", label: "Hosted Virtual Desktop" },
  { value: "other", label: "Other" },
];

export default applications


export const Quickbooks = [
  { value: "QB Pro", label: "QuickBooks Pro", type: 'shared' },
  { value: "QB Premier", label: "QuickBooks Premier", type: 'shared' },
  { value: "QB Enterprise", label: "QuickBooks Enterprise", type: 'shared' },
  { value: "QB POS", label: "QuickBooks POS", type: 'dedicated' },
]

export const Sage = [
  { value: "Sage 50", label: "Sage 50", type: 'dedicated' },
  { value: "Sage 100", label: "Sage 100", type: 'dedicated' },
  { value: "Sage 100 contractor", label: "Sage 100 Contractor", type: 'dedicated' },
  { value: "Sage 300", label: "Sage 300", type: 'dedicated' },
  { value: "Sage 300 CRE", label: "Sage 300 CRE", type: 'dedicated' },
  { value: "Sage 500", label: "Sage 500", type: 'dedicated' },
]

export const TaxSoftware = [
  { value: "Drake", label: "Drake Hosting", type: 'dedicated' },
  { value: "Ultra-Tax CS", label: "Ultra-Tax CS Hosting", type: 'dedicated' },
  { value: "ATX Tax Software", label: "ATX Tax Software", type: 'dedicated' },
  { value: "Tax Dome", label: "Tax Dome Hosting", type: 'dedicated' },
  { value: "Tax1099", label: "Tax1099 Hosting", type: 'dedicated' },
  { value: "TaxAct", label: "TaxAct Software", type: 'dedicated' },
  { value: "Lacerte", label: "Lacerte Hosting", type: 'dedicated' },
  { value: "Proseries", label: "Proseries Hosting", type: 'dedicated' },
  { value: "TaxWise", label: "TaxWise Hosting", type: 'dedicated' },
]

export const Cloud = [
  { value: "Desktop as a Service", label: "Desktop as a Service", type: 'dedicated' },
  { value: "Hosted Virtual Desktop", label: "Hosted Virtual Desktop", type: 'dedicated' },
  { value: "Hosting Windows Desktop", label: "Hosted Windows Desktop", type: 'dedicated' },
]
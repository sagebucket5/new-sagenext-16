export const appSerialPatterns = {
    "QB Pro": /^\d{15}$/,
    "QB Premier": /^\d{15}$/,
    "QB Accounts": /^\d{15}$/,
    "QB Enterprise": /^\d{15}$/,
    "QB POS": /^\d{3}-\d{3}$/,
    "Proseries": /^\d{9,10}$/,
    "ATX Tax Software": /^\d{5}-\d{5}-\d{5}-\d{5}$/,
    "Drake": /^[A-Z0-9]{16}$/||/^[A-Z0-9]{4}-\d{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/,
    "TaxWise": /^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/,
    "Sage 50": /^[A-Z0-9]{5}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/,
    "Sage 100": /^\d{14}$/,
    "Sage 100 contractor": /^\d{14}$/,
    "Sage 300": /^\d{14}$/,
    "Sage 300 CRE": /^\d{14}[A-Za-z]$/,
    "Sage 500": "",
    // "Lacerte": "", // No pattern for Lacerte
  };
  export const appLicensePatters = {
    "QB Pro": /^\d{6}$/,
    "QB Premier": /^\d{6}$/,
    "QB Accounts": /^\d{6}$/,
    "QB Enterprise": /^(\d{6})$/,
    "QB POS": /^\d{4}-\d{4}-\d{4}-\d{3}$|^$/,
    // "ATX Tax Software": /^(\d{9})$/ | /^$/,// Optional
    "Sage 50": /^(\d{9})$/,
    "Sage 100": /^(\d{9})$/,
    // "Sage 100 contractor": /^d$/,// Optional
    // "Sage 300": /^$|^\d$/, // Optional
    // "Sage 300 CRE": /^$/, // Optional
    "Sage 500": /^(\d{9})$/ | /^$/,
    "Proseries": /^(\d{5})$/,
    "UltraTax": /^(\d{5})$/,
    "Drake": /^(\d{16})$/,
    "TaxWise": /^(\d{7})$/,
  }
  export const placeholderTextAndErrorText = {
    "QB Pro": {
      "SerialNumber":"15 digit Serial Number",
      "LicenseNumber":"6 digit License Key",
      "ErrorText1":"Serial Number",
      "ErrorText2":"License Number",
    },
    "QB Premier": {
      "SerialNumber":"15 digit Serial Number",
      "LicenseNumber":"6 digit License Key",
      "ErrorText1":"Serial Number",
      "ErrorText2":"License Number",
    },
    "QB Accounts": {
      "SerialNumber":"15 digit Serial Number",
      "LicenseNumber":"6 digit License Key",
      "ErrorText1":"Serial Number",
      "ErrorText2":"License Number",
    },
    "QB Enterprise": {
      "SerialNumber":"15 digit Serial Number",
      "LicenseNumber":"6 digit License Key",
      "ErrorText1":"Serial Number",
      "ErrorText2":"License Number",
    },
    "QB POS": {
      "LicenseNumber": "15 digit License Number",
      "SerialNumber": "6 digit Product Key",
      "errorText2": "License Number",
      "errorText1": "Product Key"
    },
    "ATX Tax Software": {
      "SerialNumber": "20 digit Serial Number",
      "LicenseNumber": "9 digit Client ID",
      "errorText2": "Client ID",
      "errorText1": "Serial Number"
    },
    "Sage 50": {
      "SerialNumber": "17 digit Serial Number",
      "LicenseNumber ": "9 digit Activation code ",
      "errorText2": "Activation code",
      "errorText1": "Serial Number"
    },
    "Sage 100": {
      "SerialNumber": "17 digit Serial Number",
      "LicenseNumber": "9 digit Activatin code ",
      "errorText2": "Activatin code",
      "errorText1": "Serial Number"
    },
    "Sage 300": {
      "SerialNumber": "17 digit Serial Number",
      "LicenseNumber": "9 digit Activatin code",
      "errorText2": "Activatin code",
      "errorText1": "Serial Number"
    },
    "Sage 500": {
      "SerialNumber": "Optional ",
      "LicenseNumber": "Optional ",
      "errorText2": "Activatin code",
      "errorText1": "Serial Number"
    },
    "Proseries": {
      "LicenseNumber": "10 digit Customer ID",
      "SerialNumber": "5 digit zip code",
      "errorText2": "Customer ID",
      "errorText1": "ZIP code"
    },
    "UltraTax": {
      "LicenseNumber": "6 digit Form ID",
      "SerialNumber": "5 digit ZIP code or PIN",
      "errorText2": "Firm ID",
      "errorText1": "ZIP code or PIN"
    },
    "Drake": {
      "SerialNumber": "16 digit Serial Number",
      "errorText1": "Serial Number",
      "LicenseNumber": "6 digit Account number",
      "errorText2": "Account Number",
    },
    "TaxWise":{
      "SerialNumber": "20 digit Registration Code",
      "errorText1": "Registration Code",
      "LicenseNumber": "7 digit Cleint ID",
      "errorText2": "Cleint ID",
    }
  }


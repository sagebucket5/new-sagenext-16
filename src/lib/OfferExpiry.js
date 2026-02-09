// export function OfferExpiry() {
//   const currentDate = new Date();
//   const year = currentDate.getFullYear();
//   const month = currentDate.getMonth();

//   // Get last day of the current month
//   const lastDayOfMonth = new Date(year, month + 1, 0).getDate();

//   // Format the month name
//   const formattedMonth = new Date(year, month).toLocaleString('default', { month: 'long' });

//   // Final expiry date string
//   return `${formattedMonth} ${lastDayOfMonth}, ${year}`;
// }
const OfferExpiry = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Get last day of the current month
  const lastDayOfMonth = new Date(year, month + 1, 0).getDate();

  // Format the month name
  const formattedMonth = new Date(year, month).toLocaleString('default', { month: 'long' });

  // Final expiry date string
  const expiryDate = `${formattedMonth} ${lastDayOfMonth}, ${year}`;

  return (
    <>
      Offer Ends: {expiryDate}
    </>
  );
};

export default OfferExpiry;

const ContactUSTemp = (data, ipData) => {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta httpEquiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact us</title>
      </head>
  
      <body style="max-width: 600px;text-align: center; margin: auto;">
        <h1> <em>Contact Us Request</em> 
            ${data.isLanding ? "| Landing Page <br>" + data.pageName : ""}
            <hr style="width: 30%;border: 2px dashed"/>
            <p style="font-size:16px; font-weight:400; color:#000";>
            Their is request for the contact us page to our web page : URL of the page
            ${data.url}</p>
        </h1>
      <table style="width: 100%">
          <tbody>
          <tr>
              <th style="border-bottom: 1px solid #dddddd;
              border-right: 1px solid #dddddd;
              padding: 8px;width: 50%;">Name</th>
              <td style="border-bottom: 1px solid #dddddd;
              border-left: 1px solid #dddddd;
              padding: 8px;width: 50%;">${data.name}</td>
          </tr>
          <tr>
              <th style="border-bottom: 1px solid #dddddd;
              border-right: 1px solid #dddddd;
              padding: 8px;width: 50%;">Email</th>
              <td style="border-bottom: 1px solid #dddddd;
              border-left: 1px solid #dddddd;
              padding: 8px;width: 50%;">${data.email}</td>
          </tr>
          <tr>
              <th style="border-bottom: 1px solid #dddddd;
              border-right: 1px solid #dddddd;
              padding: 8px;width: 50%;">Phone</th>
              <td style="border-bottom: 1px solid #dddddd;
              border-left: 1px solid #dddddd;
              padding: 8px;width: 50%;">${data.selectedCountryCode || "+1"} ${data.phone}</td>
          </tr>
          <tr>
              <th style="border-bottom: 1px solid #dddddd;
              border-right: 1px solid #dddddd;
              padding: 8px;width: 50%;">Your message</th>
              <td style="border-bottom: 1px solid #dddddd;
              border-left: 1px solid #dddddd;
              padding: 8px;width: 50%;">${data.message}</td>
          </tr>
          <tr>
              <th style="border-bottom: 1px solid #dddddd;
              border-right: 1px solid #dddddd;
              padding: 8px;width: 50%;">How Did you hear About us? </th>
              <td style="border-bottom: 1px solid #dddddd;
              border-left: 1px solid #dddddd;
              padding: 8px;width: 50%;">${data.hearAboutUs ? data.hearAboutUs : "No Refrence"}</td>
          </tr>
          <tr>
              <th style="border-bottom: 1px solid #dddddd;
              border-right: 1px solid #dddddd;
              padding: 8px;width: 50%;">Location</th>
              <td style="border-bottom: 1px solid #dddddd;
              border-left: 1px solid #dddddd;
              padding: 8px;width: 50%;">
              ${ipData.cityName ||ipData.city || "NULL"},
              ${ipData.countryName ||ipData.country|| "NULL"},
              ${ipData.zipCode||ipData.zip || "NULL"}
              </td>
          </tr>
          </tbody>
      </table>
      </body>
  
      </html>
      
      `;
};

export default ContactUSTemp;

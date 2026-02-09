import getIpDetailsTemplate from "@templates/emails/get-ip-details-tem";

const PricingQuoteTemplate = (data, ipData) => {
  return `
      <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta httpEquiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${data.subject ? data.subject : "Get Custom Quote"}</title>
            </head>
            <body style="max-width: 600px;text-align: center; margin: auto;">
            <h1 style="text-transform: capitalize;"> <em>${(data.description || "Get Custom Quote").replace(/[/\-]/g, '')} </em>
                  ${data.isLanding ? "| Landing Page <br>" + data.pageName : ""}
                <hr style="width: 30%;border: 2px dashed"/>
                <p style="font-size:16px; font-weight:400; color:#000"; text-transform: capitalize;>
                The following enquiry was submitted for ${data.mailTitle || "Get a Quote"} to our web page : URL of the page 
                <a href="${data.url}" style=" text-transform: lowercase; "> ${data.url} </a>
                </p>
            </h1>

            <!-- Selected Applications Table -->
            ${Array.isArray(data.selectedApps) && data.selectedApps.length > 0 ? `
              <div style="margin: 24px 0;">
                <h2 style="font-size: 18px; font-weight: bold; margin-bottom: 10px;">Selected Applications</h2>
                <table style="width: 100%; border-collapse: collapse; margin: auto;">
                  <thead>
                    <tr>
                      <th style="border: 1px solid #dddddd; padding: 8px;">Name</th>
                      <th style="border: 1px solid #dddddd; padding: 8px;">Type</th>
                      <th style="border: 1px solid #dddddd; padding: 8px;">Users</th>
                      <th style="border: 1px solid #dddddd; padding: 8px;">RAM (GB)</th>
                      <th style="border: 1px solid #dddddd; padding: 8px;">Price (USD/mo)</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${data.selectedApps.map(app => `
                      <tr>
                        <td style="border: 1px solid #dddddd; padding: 8px;">${app.name}</td>
                        <td style="border: 1px solid #dddddd; padding: 8px; text-transform: capitalize;">${app.type}</td>
                        <td style="border: 1px solid #dddddd; padding: 8px;">${app.users}</td>
                        <td style="border: 1px solid #dddddd; padding: 8px;">${app.ram}</td>
                        <td style="border: 1px solid #dddddd; padding: 8px;">$${app.totalPrice}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            ` : ''}

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
                ${data.company
        ? ` <tr>
                    <th style="border-bottom: 1px solid #dddddd;
                    border-right: 1px solid #dddddd;
                    padding: 8px;width: 50%;">Company</th>
                    <td style="border-bottom: 1px solid #dddddd;
                    border-left: 1px solid #dddddd;
                    padding: 8px;width: 50%;">${data.company}</td>
                </tr>`
        : ""
      }
                ${data.userName
        ? `  <tr>
                        <th style="border-bottom: 1px solid #dddddd;
                        border-right: 1px solid #dddddd;
                        padding: 8px;width: 50%;">Username</th>
                        <td style="border-bottom: 1px solid #dddddd;
                        border-left: 1px solid #dddddd;
                        padding: 8px;width: 50%;">${data.userName}</td>
                    </tr>`
        : ""
      }
                ${data.application
        ? `  <tr>
                        <th style="border-bottom: 1px solid #dddddd;
                        border-right: 1px solid #dddddd;
                        padding: 8px;width: 50%;">Application</th>
                        <td style="border-bottom: 1px solid #dddddd;
                        border-left: 1px solid #dddddd;
                        padding: 8px;width: 50%;">${data.application}</td>
                    </tr>`
        : ""
      }
                ${data.noOfUsers
        ? `  <tr>
                        <th style="border-bottom: 1px solid #dddddd;
                        border-right: 1px solid #dddddd;
                        padding: 8px;width: 50%;">Number of Users</th>
                        <td style="border-bottom: 1px solid #dddddd;
                        border-left: 1px solid #dddddd;
                        padding: 8px;width: 50%;">${data.noOfUsers}</td>
                    </tr>`
        : ""
      }
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
                ${data.applicationType
        ? `  <tr>
                        <th style="border-bottom: 1px solid #dddddd;
                        border-right: 1px solid #dddddd;
                        padding: 8px;width: 50%;">Application Type</th>
                        <td style="border-bottom: 1px solid #dddddd;
                        border-left: 1px solid #dddddd;
                        padding: 8px;width: 50%;">${data.applicationType}</td>
                    </tr>`
        : ""
      }
                ${data.message
        ? `  <tr>
                        <th style="border-bottom: 1px solid #dddddd;
                        border-right: 1px solid #dddddd;
                        padding: 8px;width: 50%;">Message</th>
                        <td style="border-bottom: 1px solid #dddddd;
                        border-left: 1px solid #dddddd;
                        padding: 8px;width: 50%;">${data.message}</td>
                    </tr>`
        : ""
      }
                ${data.assistYouMsg
        ? ` <tr>
                      <th style="border-bottom: 1px solid #dddddd;
                      border-right: 1px solid #dddddd;
                      padding: 8px;width: 50%;">Assist you message</th>
                      <td style="border-bottom: 1px solid #dddddd;
                      border-left: 1px solid #dddddd;
                      padding: 8px;width: 50%;">${data.assistYouMsg}</td>
                  </tr>`
        : ""
      }
                ${data.method
        ? ` <tr>
                      <th style="border-bottom: 1px solid #dddddd;
                      border-right: 1px solid #dddddd;
                      padding: 8px;width: 50%;">Preferred Method to Contact</th>
                      <td style="border-bottom: 1px solid #dddddd;
                      border-left: 1px solid #dddddd;
                      padding: 8px;width: 50%;">${data.method}</td>
                  </tr>`
        : ""
      }
      ${data.hearAboutUs ? `<tr>
                  <th style="border-bottom: 1px solid #dddddd;
                  border-right: 1px solid #dddddd;
                  padding: 8px;width: 50%;">How did you hear</th>
                  <td style="border-bottom: 1px solid #dddddd;
                  border-left: 1px solid #dddddd; 
                  padding: 8px;width: 50%;">${data.hearAboutUs}</td>
                </tr>`: ""}
             
              ${getIpDetailsTemplate(ipData)}
            </tbody>
          </table>
        </body>
      </html>
    `;
};

export default PricingQuoteTemplate;

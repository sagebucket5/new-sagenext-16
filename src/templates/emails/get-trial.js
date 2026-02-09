import getIpDetailsTemplate from "./get-ip-details-tem";
const getTrailEmailTemplate = (data, ipData) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta httpEquiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Start Your Free Trial : thesagenext.com</title>
    </head>
    <body style="max-width: 600px;text-align: center; margin: auto;">
    <h1> <em>Free Trial Request ${new Date().toLocaleString()}</em>
        <hr style="width: 30%;border: 2px dashed"/>
    </h1>
    <p style="font-size:16px; font-weight:400; color:#000";>
    The following enquiry was submitted for "Get a Free Trial" to our web page : URL of the page 
    ${data.url}</p>
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
            padding: 8px;width: 50%;">Company</th>
            <td style="border-bottom: 1px solid #dddddd;
            border-left: 1px solid #dddddd;
            padding: 8px;width: 50%;">${data.company}</td>
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
            padding: 8px;width: 50%;">${data.phone}</td>
        </tr>
        <tr>
            <th style="border-bottom: 1px solid #dddddd;
            border-right: 1px solid #dddddd;
            padding: 8px;width: 50%;">Hear about us</th>
            <td style="border-bottom: 1px solid #dddddd;
            border-left: 1px solid #dddddd;
            padding: 8px;width: 50%;">${data.hearAboutUs}</td>
        </tr>
      
    ${data.hearAboutUsOther
            ? `<tr>
            <th style="border-bottom: 1px solid #dddddd;
            border-right: 1px solid #dddddd;
            padding: 8px;width: 50%;">Hear about us(Other)</th>
            <td style="border-bottom: 1px solid #dddddd;
            border-left: 1px solid #dddddd;
            padding: 8px;width: 50%;">${data.hearAboutUsOther}</td>
        </tr>`: ""}
    ${data.noOfUsers
            ? `<tr>
            <th style="border-bottom: 1px solid #dddddd;
            border-right: 1px solid #dddddd;
            padding: 8px;width: 50%;">No of users</th>
            <td style="border-bottom: 1px solid #dddddd;
            border-left: 1px solid #dddddd;
            padding: 8px;width: 50%;">${data.noOfUsers}</td>
        </tr>` : "0"}
        <tr>
            <th style="border-bottom: 1px solid #dddddd;
            border-right: 1px solid #dddddd;
            padding: 8px;width: 50%;">Application</th>
            <td style="border-bottom: 1px solid #dddddd;
            border-left: 1px solid #dddddd;
            padding: 8px;width: 50%;">${data.application}</td>
        </tr>
        <tr>
            <th style="border-bottom: 1px solid #dddddd;
            border-right: 1px solid #dddddd;
            padding: 8px;width: 50%;">Application Serial Key</th>
            <td style="border-bottom: 1px solid #dddddd;
            border-left: 1px solid #dddddd;
            padding: 8px;width: 50%;">${data.appSerialKey}</td>
        </tr>
        <tr>
            <th style="border-bottom: 1px solid #dddddd;
            border-right: 1px solid #dddddd;
            padding: 8px;width: 50%;">Desired User Name</th>
            <td style="border-bottom: 1px solid #dddddd;
            border-left: 1px solid #dddddd;
            padding: 8px;width: 50%;">${data.desireUserName}</td>
        </tr>
        ${getIpDetailsTemplate(ipData)}
        </tbody>
    </table>
    </body>

    </html>
    
    `;
};

export default getTrailEmailTemplate;

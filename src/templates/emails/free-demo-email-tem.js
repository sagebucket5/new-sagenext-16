import getIpDetailsTemplate from "./get-ip-details-tem";
const freeDemoEmailTemplate = (data, ipData) => {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta httpEquiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book your Free Demo</title>
</head>

<body style="max-width: 600px;text-align: center; margin: auto;">
    <h1> <em>Book your Free Demo | ${data.pageName} </em>
        ${data.isLanding ? "| Landing Page <br>" + data.pageName : ""}
        <hr style="width: 30%;border: 2px dashed" />
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
                        padding: 8px;width: 50%;">Company</th>
                <td style="border-bottom: 1px solid #dddddd;
                        border-left: 1px solid #dddddd;
                        padding: 8px;width: 50%;">${data.company}</td>
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
                        padding: 8px;width: 50%;">Application Type</th>
                <td style="border-bottom: 1px solid #dddddd;
                        border-left: 1px solid #dddddd;
                        padding: 8px;width: 50%;">${data.applicationType}</td>
            </tr>

            <tr>
                <th style="border-bottom: 1px solid #dddddd;
                        border-right: 1px solid #dddddd;
                        padding: 8px;width: 50%;">Assist you message</th>
                <td style="border-bottom: 1px solid #dddddd;
                        border-left: 1px solid #dddddd;
                        padding: 8px;width: 50%;">${data.assistYouMsg}</td>
            </tr>

            <tr>
                <th style="border-bottom: 1px solid #dddddd;
                        border-right: 1px solid #dddddd;
                        padding: 8px;width: 50%;">How Did you hear About us? </th>
                <td style="border-bottom: 1px solid #dddddd;
                        border-left: 1px solid #dddddd;
                        padding: 8px;width: 50%;">${data.hearAboutUs ? data.hearAboutUs : "No Refrence"}</td>
            </tr>
            ${getIpDetailsTemplate(ipData)}
        </tbody>
    </table>
</body>

</html>`;
};

export default freeDemoEmailTemplate;

import getIpDetailsTemplate from "./get-ip-details-tem";
const callTrackTemplate = (data, ipData) => {
  return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta httpEquiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.subject}</title>
</head>

<body style="max-width: 600px;text-align: center; margin: auto;">
    <h1> ${data.description}
        <hr style="width: 30%;border: 2px dashed" />
    </h1>
    <table style="width: 100%">
        <tbody>
            <tr>
                <th style="border-bottom: 1px solid #dddddd;
                  border-right: 1px solid #dddddd;
                  padding: 8px;width: 50%;">URL</th>
                <td style="border-bottom: 1px solid #dddddd;
                  border-left: 1px solid #dddddd;
                  padding: 8px;width: 50%;">${data.url}</td>
            </tr>
            ${getIpDetailsTemplate(ipData)}
        </tbody>
    </table>
</body>
</html>`;
};

export default callTrackTemplate;

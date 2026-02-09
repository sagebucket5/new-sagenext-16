const TestingEmailTemplate = (data) => {
    return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta httpEquiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Get Custom Quote</title>
            </head>
        
            <body style="max-width: 600px;text-align: center; margin: auto;">
            <h1>
             <em>${data.page ? data.page : "Get Custom Quote"} </em>  
                  ${data.isLanding ? "| Landing Page <br>" + data.pageName : ""}
                <hr style="width: 30%;border: 2px dashed"/>
            </h1>
            <table style="width: 100%">
                <tbody>
                <tr>
                    <th style="border-bottom: 1px solid #dddddd;
                    border-right: 1px solid #dddddd;
                    padding: 8px;width: 50%;">Page URL</th>
                    <td style="border-bottom: 1px solid #dddddd;
                    border-left: 1px solid #dddddd;
                    padding: 8px;width: 50%;">
                    <p style="font-size:16px; font-weight:400; color:#000";>
                    ${data.url}</p>
                    </td>
                </tr>
                </tbody>
            </table>
            </body>
            </html>        
            `;
};

export default TestingEmailTemplate;

const getIpDetailsTemplate = (ipData) => {
  return `
        <div>
        <tr>
            <th style="border-bottom: 1px solid #dddddd;
            border-right: 1px solid #dddddd;
            padding: 8px;width: 50%;">Client IP</th>
            <td style="border-bottom: 1px solid #dddddd;
            border-left: 1px solid #dddddd;
            padding: 8px;width: 50%;">${ipData.query}</td>
        </tr>
        <tr>
            <th style="border-bottom: 1px solid #dddddd;
            border-right: 1px solid #dddddd;
            padding: 8px;width: 50%;">State Code</th>
            <td style="border-bottom: 1px solid #dddddd;
            border-left: 1px solid #dddddd;
            padding: 8px;width: 50%;">${ipData.region}</td>
        </tr>
        <tr>
            <th style="border-bottom: 1px solid #dddddd;
            border-right: 1px solid #dddddd;
            padding: 8px;width: 50%;">City</th>
            <td style="border-bottom: 1px solid #dddddd;
            border-left: 1px solid #dddddd;
            padding: 8px;width: 50%;">${ipData.city}</td>
        </tr>
        <tr>
            <th style="border-bottom: 1px solid #dddddd;
            border-right: 1px solid #dddddd;
            padding: 8px;width: 50%;">Country code</th>
            <td style="border-bottom: 1px solid #dddddd;
            border-left: 1px solid #dddddd;
            padding: 8px;width: 50%;">${ipData.countryCode}</td>
        </tr>
        <tr>
            <th style="border-bottom: 1px solid #dddddd;
            border-right: 1px solid #dddddd;
            padding: 8px;width: 50%;">Country name</th>
            <td style="border-bottom: 1px solid #dddddd;
            border-left: 1px solid #dddddd;
            padding: 8px;width: 50%;">${ipData.country}</td>
        </tr>
        <tr>
            <th style="border-bottom: 1px solid #dddddd;
            border-right: 1px solid #dddddd;
            padding: 8px;width: 50%;">Latitude</th>
            <td style="border-bottom: 1px solid #dddddd;
            border-left: 1px solid #dddddd;
            padding: 8px;width: 50%;">${ipData.lat}</td>
        </tr>
        <tr>
            <th style="border-bottom: 1px solid #dddddd;
            border-right: 1px solid #dddddd;
            padding: 8px;width: 50%;">Longitude</th>
            <td style="border-bottom: 1px solid #dddddd;
            border-left: 1px solid #dddddd;
            padding: 8px;width: 50%;">${ipData.lon}</td>
        </tr>
        <tr>
            <th style="border-bottom: 1px solid #dddddd;
            border-right: 1px solid #dddddd;
            padding: 8px;width: 50%;">Postal</th>
            <td style="border-bottom: 1px solid #dddddd;
            border-left: 1px solid #dddddd;
            padding: 8px;width: 50%;">${ipData.zip}</td>
        </tr>
        <tr>
            <th style="border-bottom: 1px solid #dddddd;
            border-right: 1px solid #dddddd;
            padding: 8px;width: 50%;">State</th>
            <td style="border-bottom: 1px solid #dddddd;
            border-left: 1px solid #dddddd;
            padding: 8px;width: 50%;">${ipData.regionName}</td>
        </tr>
</div>
        `;
};

export default getIpDetailsTemplate;

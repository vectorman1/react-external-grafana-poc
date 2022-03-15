import React from "react";

interface Props {

}

export const GrafanaDashboard = (props: Props) => {
    return (
        <div>
            <p>
                In order to get Grafana to display this panel, you have to add the following environment variables to it:
                <br/>
                <code style={{
                    textAlign: "left"
                }}>
                    GF_SECURITY_ALLOW_EMBEDDING=true<br />
                    GF_AUTH_ANONYMOUS_ENABLED=true<br />
                    GF_AUTH_ANONYMOUS_ORG_NAME=Main Org.<br />
                    GF_AUTH_ANONYMOUS_ORG_ROLE=Viewer<br />
                </code>
                <br />
                After this, it is a matter of getting the panel's iframe link through the panel Sharing options, and inserting it in the web app.
            </p>
            <iframe
                src="http://localhost:3000/d-solo/LsFPkXb7k/validator-transfers-dashboard?orgId=1&refresh=5s&from=1647354738223&to=1647355038223&panelId=55"
                width="450" height="200" frameBorder="0" />
        </div>
    )
}

import React, { Fragment } from "react";
import ReactDom from "react-dom";

const PortalTitle = (props) => {
    return (
        <div>
            <h1>Hi {props.work}</h1>
        </div>
    );
}

const Portal = (props) => {
    return (
    <Fragment>
        {ReactDom.createPortal(<PortalTitle work="Folks!" />, 
        document.getElementById('portal-root')
        )}
    </Fragment>
    );
}

export default Portal;
import React, { Fragment } from "react";
import ReactDom from "react-dom";
import Counter from "../CounterComponent/Counter";

const PortalTitle = (props) => {
    return (
        <div style={{'textAlign': 'center'}}>
            <div>
                <h1>Hi {props.work}</h1>
            </div>
            <Counter />
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
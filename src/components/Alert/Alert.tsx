import React from "react";
import { connect } from "react-redux";
import { alertClear } from "@src/actions";

import "./Alert.scss";

interface AlertProps {
    alert: any;
    alertClear: any;
    className?: string;
    message?: string;
}

const Alert: React.FC<AlertProps> = ({ className, message, alertClear, alert }) => {

    const handleClose = () => {
        alertClear();
    }

    return (
        <div className={className ? className : 'error'}>
            <span>
                {message ? message : 'There was an unexpected error processing your request.'}
            </span>
            <span onClick={handleClose} className='closeBtn'>
                &times;
            </span>
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return { 
        alert: state.alert
    }
}

export default connect(
    mapStateToProps,
    { alertClear }
)(Alert);

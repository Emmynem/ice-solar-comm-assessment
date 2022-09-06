import React from "react";

export const ErrMap = ({err}) => {
    return (
        <div className="alert alert-danger" role="alert">
            {!err ? 'No records' : err}
        </div>
    )   
};
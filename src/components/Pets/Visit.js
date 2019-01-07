import React from "react";

export const Visit = ({visit_date,description}) => (
    <div className="flexerino" >
        <div>{visit_date}</div> <div> {description} </div>
    </div>
)
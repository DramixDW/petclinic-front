import React from "react";

export const Date = ({visit}) => (
    <div>
        {visit.map(vis => vis.date)}
    </div>
)
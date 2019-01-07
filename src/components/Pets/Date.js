import React from "react";

export const Date = ({visits}) => (
    <div>
        {visits.map(vis => vis.visit_date)}
    </div>
)
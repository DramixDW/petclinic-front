import React from "react";

export const Desc = ({visit}) => (
    <div>
        {visit.map(vis => vis.description)}
    </div>
)
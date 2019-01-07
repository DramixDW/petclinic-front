import React from 'react'
import {Desc} from "./Visit";

export const Pet = ({name, birthDate, typeName , visits}) => (
    <div>
        <div className="flexerino">
            <div className="bold">Name</div><div>{name}</div>
        </div>
        <div className="flexerino">
            <div className="bold">Birth date</div><div>{birthDate}</div>
        </div>
        <div className="flexerino">
            <div className="bold">Type</div><div>{typeName}</div>
        </div>

        {visits.map(visit => visit.description)}
    </div>
)

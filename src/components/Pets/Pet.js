import React from 'react'
import {Visit} from "../Pets/Visit";

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
        <div className="bold">
            Visit
        </div>
        <div>
        {visits.map(visit => <Visit {...visit} key={visit.visit_date} />)}
        </div>
    </div>
)

import React from 'react'
import {Visit} from "../Pets/Visit";
import {OwnerInfo} from "../Owners/Owner Info";

export const PetInfo = ({name, birthDate, typeName , visits, id}) => (
    <div>
        <a href={`/pets/edit?id=${id}`}> Edit Pet</a>
        <a href={`/visit/add?id=${id}`}> Add visit</a>
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

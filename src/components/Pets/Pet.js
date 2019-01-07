import React from 'react'

export const Pet = ({name,birthDate, typeName}) => (
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
    </div>
)

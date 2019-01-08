import React from 'react'

export const Pet = ({name,birthDate, typeName, owner}) => (
    <tr>
        <td>{name}</td>
        <td>{birthDate}</td>
        <td>{typeName}</td>
        <td>{owner.firstname +" " +owner.lastname}</td>
    </tr>
)

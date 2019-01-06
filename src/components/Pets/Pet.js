import React from 'react'

export const Pet = ({pet_id,name,birth_date, typeName, owner_fullName}) => (
    <tr>
        <td>{pet_id}</td>
        <td>{name}</td>
        <td>{birth_date}</td>
        <td>{typeName}</td>
        <td>{owner_fullName}</td>
    </tr>
)

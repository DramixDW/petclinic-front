import React from 'react'

export const Visit = ({pet_id,visit_date,description}) => (
    <tr>
        <td>{pet_id}</td>
        <td>{visit_date}</td>
        <td>{description}</td>
    </tr>
)

import React from 'react'

export const Visit = ({visits}) => (
    <tr>
            <td>{visits.map(visit => <div>{visit.visit_date}</div> )}</td>
            <td>{visits.map(visit => <div>{visit.description}</div>)}</td>
            </tr>
)

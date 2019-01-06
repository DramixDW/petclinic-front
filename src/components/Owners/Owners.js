import React from 'react'
import {Pets} from "../Owners/Pets";

export const Owns = ({lastname,firstname,city,addres,telephone,pets}) => (
    <tr>
        <td >{firstname} {lastname}</td>
        <td >{addres}</td>
        <td> {city} </td>
        <td>{telephone}</td>
        <td>{pets.map(pet => <Pets {...pet} key={pet.id} />)}</td>
    </tr>
);

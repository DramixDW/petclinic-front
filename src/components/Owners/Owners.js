import React from 'react'
import {Link} from "react-router-dom";

export const Owns = ({lastname,firstname,city,addres,telephone,pets,id}) => (
    <tr>
        <td ><a href={`/owner?id=${id}`}>{firstname} {lastname} </a></td>
        <td >{addres}</td>
        <td> {city} </td>
        <td>{telephone}</td>
        <td>{pets.map(pet => pet.name + " ")}</td>
    </tr>
);


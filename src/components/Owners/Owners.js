import React from 'react'
import {Link} from "react-router-dom";

export const Owns = ({lastname,firstname,city,addres,telephone,pets}) => (
    <tr>
        <td ><Link to={"/owner?Lastname="+{lastname}}>{firstname} {lastname}</Link></td>
        <td >{addres}</td>
        <td> {city} </td>
        <td>{telephone}</td>
        <td>{pets.map(pet => pet.name + " ")}</td>
    </tr>
);

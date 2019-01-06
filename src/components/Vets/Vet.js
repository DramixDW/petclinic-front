import React from 'react'
import {Specialty} from "./Specialty";

export const Vet = ({lastname,firstname,specialties}) => (
    <tr>
        <td >{lastname}</td>
        <td >{firstname}</td>
        <td ><section>{specialties.map(spec => spec.name + " ")}</section></td>
    </tr>
)

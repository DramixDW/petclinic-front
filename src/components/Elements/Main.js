import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeElement from "./Home";
import {Vets} from "../Vets/Vets";
import {Owners} from "../Owners/Owners.js"


const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={HomeElement}/>
            <Route exact path='/vets' component={Vets}/>
            <Route exact path='/owners' component={Owners}/>
        </Switch>
    </main>
)

export default Main

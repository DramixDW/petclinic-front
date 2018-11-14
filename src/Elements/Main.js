import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeElement from "./Home";
import {Vets} from "../Vets/Vets";


const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={HomeElement}/>
            <Route exact path='/vets' component={Vets}/>
        </Switch>
    </main>
)

export default Main

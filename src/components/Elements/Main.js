import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeElement from "./Home";
import {Vets} from "../Vets/Vets";
import {OwnersFind} from "../Owners/OwnersFind.js"
import {OwnersList} from "../Owners/OwnersList.js"
import {OwnersAddForm} from "../Owners/AddForm";

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={HomeElement}/>
            <Route exact path='/vets' component={Vets}/>
            <Route exact path='/owners' component={OwnersList} />
            <Route exact path='/owners/find' component={OwnersFind}/>
            <Route exact path='/owners/add' component={OwnersAddForm}/>


        </Switch>
    </main>
)

export default Main

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeElement from "./Home";
import {Vets} from "../Vets/Vets";
import {OwnersFind} from "../Owners/OwnersFind.js"
import {OwnersList} from "../Owners/OwnersList.js"
import {OwnersAddForm} from "../Owners/AddForm";
import {OwnerInfo} from "../Owners/Owner Info";
import {OwnersEditForm} from "../Owners/EditForm";
import {addPet} from "../Pets/addPet";

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={HomeElement}/>
            <Route exact path='/vets' component={Vets}/>
            <Route exact path='/pets/add' component={addPet}/>
            <Route exact path='/owners' component={OwnersList} />
            <Route exact path='/owners/find' component={OwnersFind}/>
            <Route exact path='/owners/add' component={OwnersAddForm}/>
            <Route exact path='/owner' component={OwnerInfo}/>
            <Route exact path='/owner/edit' component={OwnersEditForm}/>

        </Switch>
    </main>
)

export default Main

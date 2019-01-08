import React from 'react';
import {Pet} from './Pet';

export class Pets extends React.Component {
    constructor()
    {
        super();
    }

    componentDidMount() {

    }

    shouldComponentUpdate(prevProps, prevState) {
        return true
    }

    render() {
        const pet = this.props.pet;
        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Birth_date</th>
                        <th>TypeName</th>
                        <th>Owner_fullName</th>
                    </tr>
                    </thead>
                    <tbody>
                        {<Pet {...pet} key={pet.id} />}
                    </tbody>
                </table>
            </div>
        )
    }
}

import React from 'react';
import {Pet} from './Pet';

export class Pets extends React.Component {
    state = {
        loading: true,
        pets: null
    };

    componentDidMount() {
        this.setState({
            loading: true
        });
        fetch('http://localhost:9998/api/v1/getPetById?pet_id=8')
            .then(res => res.json())
            .then(pets => {
                this.setState({
                    pets : pets,
                    loading: false
                })
            })
    }

    shouldComponentUpdate(prevProps, prevState) {
        return true
    }

    render() {
        const {loading, pets} = this.state;

        return (
            <div>
                {loading ? (
                    <h1>Loading...</h1>
                ) : (
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Pet_id</th>
                            <th>Name</th>
                            <th>Birth_date</th>
                            <th>TypeName</th>
                            <th>Owner_fullName</th>
                        </tr>
                        </thead>
                        <tbody>
                            {<Pet {...pets} key={pets.pet_id} />}
                        </tbody>
                    </table>
                )}
            </div>
        )
    }
}

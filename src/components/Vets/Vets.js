import React from 'react';
import {Vet} from './Vet';
import {Specialty} from "./Specialty";

export class Vets extends React.Component {
    state = {
        loading: true,
        vets: null
    };

    componentDidMount() {
        this.setState({
            loading: true
        });
        fetch('http://localhost:9998/api/v1/vets')
            .then(res => res.json())
            .then(vets => {
                this.setState({
                    vets,
                    loading: false
                })
            })
    }

    shouldComponentUpdate(prevProps, prevState) {
        return true
    }

    render() {
        const {loading, vets} = this.state;

        return (
            <div>
                <div className="page-header">
                    <h1>Veterinaries</h1>
                    <br></br>
                </div>
                {loading ? (
                    <h1>Loading...</h1>
                ) : (
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                        <tr>
                            <th className="tableHeader">First name</th>
                            <th className="tableHeader">Last name</th>
                            <th className="tableHeader">Specialties</th>
                        </tr>
                        </thead>
                        <tbody>
                            {vets.map(vet => <Vet {...vet} key={vet.firstname} />)}
                        </tbody>
                    </table>
                )}
            </div>
        )
    }
}

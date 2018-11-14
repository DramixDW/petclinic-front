import React from 'react';
import {Vet} from './Vet';

export class Vets extends React.Component {
    state = {
        loading: true,
        vets: null
    };

    componentDidMount() {
        this.setState({
            loading: true
        });
        fetch('http://localhost:9999/api/v1/vets')
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
                {loading ? (
                    <h1>Loading...</h1>
                ) : (
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
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

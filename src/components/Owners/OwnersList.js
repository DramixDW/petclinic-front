import React from 'react';
import {Owns} from './Owners'

export class OwnersList extends React.Component {
    state = {
        loading: true,
        vets: null
    };

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const token = query.get('Lastname');
        console.log(token);
        this.setState({
            loading: true
        });
        fetch('http://localhost:9998/api/v1/getOwnerByNameLike?name='+token)
            .then(res => res.json())
            .then(owns => {
                this.setState({
                    owns,
                    loading: false
                })
            })
    }

    shouldComponentUpdate(prevProps, prevState) {
        return true
    }

    render() {
        const {loading, owns} = this.state;

        return (
            <div>
                <div className="page-header">
                    <h1>Owners</h1>
                    <br></br>
                </div>
                {loading ? (
                    <h1>Loading...</h1>
                ) : (
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                        <tr>
                            <th className="tableHeader">Name</th>
                            <th className="tableHeader">Adress</th>
                            <th className="tableHeader">City</th>
                            <th className="tableHeader">Telephone</th>
                            <th className="tableHeader">Pets</th>
                        </tr>
                        </thead>
                        <tbody>
                            {owns.map(own => <Owns {...own} key={own.id} />)}
                       </tbody>
                    </table>
                )}
            </div>
        )
    }
}
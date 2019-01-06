import React from 'react';
import {Own} from "./Owner";


export class OwnerInfo extends React.Component {
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
        fetch('http://localhost:9998/api/v1/getOwnerByName?name='+token)
            .then(res => res.json())
            .then(own => {
                this.setState({
                    own,
                    loading: false
                })
            })
    }

    shouldComponentUpdate(prevProps, prevState) {
        return true
    }


    render() {
        const { loading , own} = this.state;
        return (
            <div>
                <div className="page-header">
                    <h1>Owner info</h1>
                </div>
                {loading ? (
                    <h1>Loading...</h1>
                ) : (
                <div>
                    <Own {...own} />
                </div>)}

            </div>
        )
    }
}

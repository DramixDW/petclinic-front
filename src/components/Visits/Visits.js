import React from 'react';
import {Visit} from './Visit';


export class Visits extends React.Component {
    
   
    state = {
        loading: true,
        petWithVisits: null
    };

    constructor() {
        super();
    }

 componentDidMount() {

        this.setState({
            loading: true
        });
        
        fetch('http://localhost:9998/api/v1/getPetByID?id=' + this.props.id)
            .then(res => res.json())
            .then(petWithVisits => {
                console.log(petWithVisits)
                this.setState({
                    petWithVisits,
                    loading: false
                })
            })
    }


    shouldComponentUpdate(prevProps, prevState) {
        return true
    }



    render() {
        const {loading, petWithVisits} = this.state;

        return (
            <div>
                {loading ? (
                    <h1>Loading...</h1>
                ) : (
                    <div>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>visit_date</th>
                                <th>description</th>
                            </tr>
                            </thead>
                            <tbody> 
                                {<Visit visits={petWithVisits.visits} key={petWithVisits.id} /> }
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        )
    }
}




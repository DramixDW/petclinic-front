import React from 'react'
import { Pets } from "./Pets";
import { Visits } from "../Visits/Visits";
import { Addvisit } from "./Addvisit";


function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
}

export class PetsAndVisits extends React.Component {

    state = {
       pet:null,
       loading:true
    };

    constructor()
    {
        super();
    }

    componentDidMount()
    {
        const query = new URLSearchParams(this.props.location.search);
        const id = query.get('id');

        fetch('http://localhost:9998/api/v1/getPetByID?id=' + id)
        .then(res => res.json())
        .then(pet => {
            this.setState({
                pet,
                loading: false
            })
        })
    }

    render() {
        const query = new URLSearchParams(this.props.location.search);
        const id = query.get('id');
        const {pet,loading} = this.state;

        return (
            <div>
                {loading ? (
                    <h1>Loading...</h1>
                ) : (
                    <div>
                        <h1>Visits and pets</h1>
                        <Pets pet={pet}  ></Pets>
                        <Addvisit history={this.props.history}  pet={pet} ></Addvisit>
                        <Visits id={id} ></Visits>
                    </div>
                    )}
            </div>
        )
    }
}
export default PetsAndVisits;
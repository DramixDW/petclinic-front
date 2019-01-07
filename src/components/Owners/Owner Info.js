import React from 'react';
import {Own} from "./Owner";
import {Pet} from "../Pets/Pet";
import {Desc} from "../Pets/Visit";
import {Date} from "../Pets/Date";

export class OwnerInfo extends React.Component {
    state = {
        loading: true,
        pav : null,
        own : null,
        id : null
    };

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const token = query.get('id');
        this.setState({ id : token});
        console.log(token);
        this.setState({
            loading: true
        });
        fetch('http://localhost:9998/api/v1/getOwnerById?id='+token)
            .then(res => res.json())
            .then(own => {
                this.setState({
                    own
                });
                fetch('http://localhost:9998/api/v1/getPetWithVisitsByOwnerId?id='+token)
                .then(res => res.json())
                .then(pav => {
                    this.setState({
                        pav,
                        loading: false
                    })
                })
            });
        console.log(this.state.own);
    }

    shouldComponentUpdate(prevProps, prevState) {
        return true
    }

    handleEdit = () => (
        this.props.history.push("/owner/edit?id="+this.state.id)
    );

    handleAddPet = () => (
        this.props.history.push("/pets/add?id="+this.state.id)
    );

    render() {
        const { loading , own,pav} = this.state;
        return (
            <div>
                <div className="page-header">
                    <h1>Owner info</h1>
                </div>
                {loading ? (
                    <h1>Loading...</h1>
                ) : (
                    <div>
                        <div>
                            <Own {...own} />
                        </div>
                        <div className="flexButton">
                            <form>
                                <input type="button" value="Edit Owner" onClick={this.handleEdit} />
                            </form>
                            <form>
                                <input type="button" value="Add Pet" onClick={this.handleAddPet} />
                            </form>
                        </div>
                        <div className="page-header">
                            <h1>Pet and visit info</h1>
                        </div>
                        <div className="upperligne">
                            {pav.map(pet => <Pet {...pet} key={pet.id} />)}
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

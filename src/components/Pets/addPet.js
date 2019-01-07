import React from 'react';


export class addPet extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state= {
            name: "",
            type_id: "",
            birth_date: "",
        }
    }
    handleName = (e) =>{
        this.setState({name: e.target.value});
    };
    handleType = (e) =>{
        console.log(e.target.value);
        this.setState({type_id: e.target.value});
    };
    handleBirthDate = (e) =>{
        this.setState({birth_date: e.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const query = new URLSearchParams(this.props.location.search);
        const token = query.get('id');

        const data = JSON.stringify({
            "name" : this.state.name,
            "owner_id" :  token,
            "birthDate" : this.state.birth_date,
            "typeId" : this.state.type_id
        });

        fetch('http://localhost:9998/api/v1/addPet', {
            method: 'post',
            body : data,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(function(response) {
            return response.json();
        }).then(function(myJson) {
            console.log(JSON.stringify(myJson));
        });
        this.props.history.push('/owner?id='+token)
    };

    render(){
        return (
            <div>
                <div className="page-header">
                    <h1>Add Pet</h1>
                </div>
                <div>
                    <form id="form" onSubmit={this.handleSubmit}>
                        <p> Name <input className="big" type="texte" name="name" value={this.state.name} onChange={this.handleName}/> </p>
                        <p> Type
                            <select onChange={this.handleType} value={this.state.type_id}>
                                <option value="1">Cat</option>
                                <option value="2">Dog</option>
                                <option value="3">Lizard</option>
                                <option value="4">Snake</option>
                                <option value="5">Bird</option>
                                <option value="6">Hamster</option>
                            </select>
                        </p>
                        <p> Birth Date <input className="big" type="date" name="birth_date" value={this.state.birth_date} onChange={this.handleBirthDate}/> </p>
                        <input type="button" value="Add" onClick={this.handleSubmit} />
                    </form>
                </div>
            </div>
        )
    }
}
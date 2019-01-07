import React from 'react';


export class addPet extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state= {
            name: "",
            owner_id: "",
            type_id: "",
            birth_date: "",
        }
    }
    handleName = (e) =>{
        this.setState({name: e.target.value});
    };
    handleType = (e) =>{
        this.setState({type_id: e.target.value});
    };
    handleBirthDate = (e) =>{
        this.setState({birth_date: e.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data = JSON.stringify({
            "name" : this.state.lastname,
            "owner_id" : this.state.addres,
            "birth_date" : this.state.city,
            "type_id" : this.state.telephone
        });

        console.log(data);
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
        //this.props.history.push('/Owners?Lastname='+this.state.lastname)
    };

    render(){
        return (
            <div>
                <div className="page-header">
                    <h1>Add Owner</h1>
                </div>
                <div>
                    <form id="form" onSubmit={this.handleSubmit}>
                        <p> Name <input className="big" type="texte" name="name" value={this.state.name} onChange={this.handleName}/> </p>
                        <p> Type
                            <select onChange={this.handleType}>
                                <option value="1">Cat</option>
                                <option value="2">Dog</option>
                                <option value="3">Lizard</option>
                                <option value="4">Snake</option>
                                <option value="5">Bird</option>
                                <option value="6">Hamster</option>
                            </select>
                        </p>
                        <p> Birth Date <input className="big" type="date" name="birth_date" value={this.state.type_id} onChange={this.handleBirthDate}/> </p>
                        <input type="button" value="Add" onClick={this.handleSubmit} />
                    </form>
                </div>
            </div>
        )
    }
}
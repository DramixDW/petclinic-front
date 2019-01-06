import React from 'react';


export class OwnersAddForm extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state={
            lastname:"",
            firstname:"",
            addres:"",
            city:"",
            telephone:"",
        }
    }
    handleLastname = (e) =>{
        this.setState({lastname: e.target.value});
        }
    handlefirstname = (e) =>{
        this.setState({firstname: e.target.value});
    }
    handleaddres = (e) =>{
        this.setState({addres: e.target.value});
    }
    handleCity = (e) =>{
        this.setState({city: e.target.value});
        }
    handleTelephone = (e) =>{
        this.setState({telephone: e.target.value});
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const data = JSON.stringify({"firstname": this.state.firstname, "lastname" : this.state.lastname, "addres" : this.state.addres, "city" : this.state.city, "telephone" : this.state.telephone});
        console.log(data);
        fetch('http://localhost:9998/api/v1/addOwner', {
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
        this.props.history.push('/Owners?Lastname='+this.state.lastname)
    };

    render(){
        return (
            <div>
                <div className="page-header">
                    <h1>Add Owner</h1>
                </div>
                <div>
                    <form id="form" onSubmit={this.handleSubmit}>
                        <p> Lastname <input id="lastname" className="big" type="texte" name="lastname" value={this.state.lastname} onChange={this.handleLastname}/> </p>
                        <p> Firstname<input className="big" type="texte" name="firstname"  value={this.state.firstname} onChange={this.handlefirstname}/> </p>
                        <p>Addres <input className="big" type="texte" name="addres"   value={this.state.addres} onChange={this.handleaddres}/> </p>
                        <p> City <input className="big" type="texte" name="city"  value={this.state.city} onChange={this.handleCity}/> </p>
                        <p> Telephone <input className="big" type="texte" name="telephone" value={this.state.telephone} onChange={this.handleTelephone}/> </p>
                        <input type="button" value="Add" onClick={this.handleSubmit} />
                    </form>
                </div>
            </div>
        )
    }
}
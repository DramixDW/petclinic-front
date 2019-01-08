import React from 'react';


export class Addvisit extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state= {
            date : "",
            description: ""
        }
    }
    handledate = (e) =>{
        this.setState({ date: e.target.value/*.con*/});
    };
    handledescription = (e) =>{
        this.setState({description: e.target.value});
    };
    
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.props);
        const data = JSON.stringify({"visit_date": this.state.date , "description" : this.state.description , "pet_id" : this.props.pet.id});
        console.log(data);
        fetch('http://localhost:9998/api/v1/addVisit', {
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
        this.props.history.push('/owner?id='+this.props.pet.owner_id)
    };

    render(){
        return (
            <div>
                <div className="page-header">
                    <h1>Add Visit</h1>
                </div>
                <div>
                    <form id="form" onSubmit={this.handleSubmit}>
                        <p> Date <input id="date" className="big" type="date" name="date"  onChange={this.handledate}/> </p>
                        <p> Description <input className="big" type="texte" name="description"   onChange={this.handledescription}/> </p>
                        <input type="button" value="Add" onClick={this.handleSubmit} />
                    </form>
                </div>
            </div>
        )
    }
}
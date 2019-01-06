import React from 'react';


export class OwnersAddForm extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        fetch('http://localhost:9998/api/v1/addOwner', {
            method: 'post',
            body: JSON.stringify(data)

        }).then(function (response) {
            return response.json();
        });
    };

    render(){
        return (
            <div>
                <div className="page-header">
                    <h1>Add Owner</h1>
                </div>
                <div>
                    <form id="form" onSubmit={this.handleSubmit}>
                        <p> Lastname <input id="lastname" className="big" type="texte" name="lastname"/> </p>
                        <p> Firstname<input className="big" type="texte" name="firstname" /> </p>
                        <p>Addres <input className="big" type="texte" name="addres" /> </p>
                        <p> City <input className="big" type="texte" name="city" /> </p>
                        <p> Telephone <input className="big" type="texte" name="telephone" /> </p>
                        <input type="button" value="Add" onClick={this.handleSubmit} />
                    </form>
                </div>
            </div>
        )
    }
}
import React from 'react';


export class OwnersEditForm extends React.Component {

    state = {
        loading: true,
        own: null,
    };

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state= {
            lastname:null,
            firstname: null,
            addres: null,
            city: null,
            telephone: null,
            id:null
        }
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const token = query.get('id');
        fetch('http://localhost:9998/api/v1/getOwnerById?id='+token)
            .then(res => res.json())
            .then(own => {
                this.setState({
                    own,
                    loading: false
                })
            });
        const owner = Object.assign({},this.state.own)
        console.log(owner);
    }

    handleLastname = (e) =>{
        this.setState({lastname: e.target.value});
    };
    handlefirstname = (e) =>{
        this.setState({firstname: e.target.value});
    };
    handleaddres = (e) =>{
        this.setState({addres: e.target.value});
    };
    handleCity = (e) =>{
        this.setState({city: e.target.value});
    };
    handleTelephone = (e) =>{
        this.setState({telephone: e.target.value});
    };


    handleSubmit = (event) => {
        const data = JSON.stringify({"id": this.state.id,"firstname": this.state.firstname, "lastname" : this.state.lastname, "addres" : this.state.addres, "city" : this.state.city, "telephone" : this.state.telephone});
        console.log(data);
        fetch('http://localhost:9998/api/v1/editOwner', {
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
        const {own} = this.state;
        let owner = Object.assign({},own);
        return (
            <div>
                <div className="page-header">
                    <h1>Edit Owner</h1>
                </div>
                <div>
                    <form id="form" onSubmit={this.handleSubmit}>
                        <p> Lastname <input id="lastname" className="big" type="texte" name="lastname" defaultValue={owner.lastname} onChange={this.handleLastname}/> </p>
                        <p> Firstname<input className="big" type="texte" name="firstname" defaultValue={owner.firstname} onChange={this.handlefirstname}/> </p>
                        <p>Addres <input className="big" type="texte" name="addres" defaultValue={owner.addres} onChange={this.handleaddres}/> </p>
                        <p> City <input className="big" type="texte" name="city"  defaultValue={owner.city} onChange={this.handleCity}/> </p>
                        <p> Telephone <input className="big" type="texte" name="telephone" defaultValue={owner.telephone} onChange={this.handleTelephone}/> </p>
                        <input type="button" value="Add" onClick={this.handleSubmit} />
                    </form>
                </div>
            </div>
        )
    }
}
import React from 'react';


export class EditPet extends React.Component {

    state = {
        loading: true,
        name: null,
        id: null,
        type_id: null,
        owner_id: null,
        birth_date : null,
        pet : null
    };

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const token = query.get('id');
        fetch('http://localhost:9998/api/v1/getPetByID?id='+token)
            .then(res => res.json())
            .then(pet => {
                console.log(pet);
                this.setState({
                    pet,
                    loading: false
                })
            });

    };

    handleName = (e) =>{
        this.setState({name : e.target.value});
    };
    handleType = (e) =>{
        this.setState({type_id: e.target.value});
    };
    handleBirthDate = (e) =>{
        this.setState({birth_date : e.target.value});
    };

    name = () => {
        const {pet} = this.state;
        let petObj = Object.assign({},pet);
        if(this.state.name == null){
            return petObj.name
        }
        else{
            return this.state.name
        }
    };

    type_id = () => {
        const {pet} = this.state;
        let petObj = Object.assign({},pet);
        if(this.state.typeId == null){
            return petObj.typeId
        }
        else{
            return this.state.typeId
        }
    };

    birth_date = () => {
        const {pet} = this.state;
        let petObj = Object.assign({},pet);
        if(this.state.birthDate == null){
            return petObj.birthDate
        }
        else{
            return this.state.birthDate
        }
    };


    handleSubmit = () => {
        const {pet} = this.state;
        let pp = Object.assign({},pet);
        console.log(pp);
        const data = JSON.stringify(
            {
                "id": pp.id,
                "name": this.name(),
                "birthDate" : this.birth_date(),
                "typeId" : this.type_id(),
                "owner_id" : pp.owner_id
            }
            );
        console.log(data);
        fetch('http://localhost:9998/api/v1/editPet', {
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
        this.props.history.push('/owner?id='+pp.owner_id)
    };

    render(){
        const {pet} = this.state;
        let petObj = Object.assign({},pet);
        return (
            <div>
                <div className="page-header">
                    <h1>Edit Pet</h1>
                </div>
                <div>
                    <form id="form" onSubmit={this.handleSubmit}>
                        <p> Name <input className="big" type="texte" name="name" defaultValue={petObj.name} onChange={this.handleName}/> </p>
                        <p> Type
                            <select defaultValue={1} onChange={this.handleType}>
                                <option value="1">Cat</option>
                                <option value="2">Dog</option>
                                <option value="3">Lizard</option>
                                <option value="4">Snake</option>
                                <option value="5">Bird</option>
                                <option value="6">Hamster</option>
                            </select>
                        </p>
                        <p> Birth Date <input className="big" defaultValue={petObj.birthDate} type="date" name="birth_date" onChange={this.handleBirthDate}/> </p>
                        <input type="button" value="Edit" onClick={this.handleSubmit} />
                    </form>
                </div>
            </div>
        )
    }
}
import React from 'react';


export class Owners extends React.Component {
    state = {
        loading: true,
        vets: null
    };

    componentDidMount() {
        this.setState({
            loading: true
        });
        fetch('http://localhost:9998/api/v1/vets')
            .then(res => res.json())
            .then(vets => {
                this.setState({
                    vets,
                    loading: false
                })
            })
    }

    shouldComponentUpdate(prevProps, prevState) {
        return true
    }

    handleFind = (event) => {
        event.preventDefault();
        console.log("banane");
        console.log(this.inputNode.value);
        this.props.history.push('/owners?Lastname='+this.inputNode.value);
    }

    handleAdd = () =>{
        this.props.history.push('/owners/add')
    }


    render() {
        const {loading, vets} = this.state;

        return (
            <div>
                <div className="page-header">
                    <h1>Find Owner</h1>
                </div>
                {loading ? (
                    <h1>Loading...</h1>
                ) : (
                    <div>
                        <form>
                            <input className="big" type="texte" name="Lastname" ref={node => (this.inputNode = node)}/>
                            <input type="button" value="Find" onClick={this.handleFind} />
                        </form>

                        <form>
                            <input type="button" value="Add Owner" onClick={this.handleAdd}/>
                        </form>
                    </div>
                )}
            </div>
        )
    }
}

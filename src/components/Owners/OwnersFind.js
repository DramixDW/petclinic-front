import React from 'react';


export class OwnersFind extends React.Component {

    handleFind = (event) => {
        event.preventDefault();
        this.props.history.push('/owners?Lastname='+this.inputNode.value);
    };

    handleAdd = () =>{
        this.props.history.push('/owners/add')
    };

    render() {
        return (
            <div>
                <div className="page-header">
                    <h1>Find Owner</h1>
                </div>
                <div>
                    <form onSubmit={this.handleFind}>
                        <input className="big" type="texte" name="Lastname" ref={node => (this.inputNode = node)}/>
                        <input type="button" value="Find" onClick={this.handleFind} />
                    </form>
                    <form>
                        <input type="button" value="Add Owner" onClick={this.handleAdd}/>
                    </form>
                </div>
            </div>
        )
    }
}

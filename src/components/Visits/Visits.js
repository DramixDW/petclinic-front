import React from 'react';
import {Visit} from './Visit';


export class Visits extends React.Component {


   //code qui marche 
   
    state = {
        loading: true,
        visits: null
    };

 componentDidMount() {
        this.setState({
            loading: true
        });
        fetch('http://localhost:7879/api/visits/visit?pet_id=8')
            .then(res => res.json())
            .then(visits => {
                console.log(visits)
                this.setState({
                    visits,
                    loading: false
                })
            })
    }
    
 /*  //////////////////////////////////////////////// // codée par Chloé
    componentDidMount() {
        var num = 8;
        axios.get('http://localhost:9999/api/visits/visits?$num'  )
            .then(res => res.json())
            .then(visits => {
                this.state({
                    num
                })
            })
    }//*/
/////////////////////////////////////////////////////////////////////


    shouldComponentUpdate(prevProps, prevState) {
        return true
    }



    render() {
        const {loading, visits} = this.state;

        return (
            <div>
                {loading ? (
                    <h1>Loading...</h1>
                ) : (
                    <div>
                        <p>Previous Element</p>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>pet_id</th>
                                <th>visit_date</th>
                                <th>description</th>
                            </tr>
                            </thead>
                            <tbody>
                                {visits.map(visits => <Visit {...visits} key={Visits.pet_id /*firstname*/} />)}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        )
    }
}



// code qui marche pas 
/*
state = {
    posts: []
  }

  componentDidMount() {
    axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({ posts });
      });
  }

  render() {
    return (
      <div>
        <h1>{`/r/${this.props.subreddit}`}</h1>
        <ul>
          {this.state.posts.map(post =>
            <li key={post.id}>{post.title}</li>
          )}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <FetchDemo subreddit="reactjs"/>,
  document.getElementById('root')
);*/

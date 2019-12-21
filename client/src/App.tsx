import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    posts: []
}

componentDidMount() {
  axios.get('http://localhost:5000/api/posts')
  .then((response) => {
    this.setState({
      posts: response.data
    })
})
  .catch((error) => {
    console.error(`Error fetching data: ${error}`);
  })
}

  render(){
    const { posts } = this.state;

    return (
    <div className="App">
      <header className="App-header">
        Henry's Dog Website
      </header>
      <h1>Links to informative dog sites:</h1>
      <nav>
        <ul>
            <li><a href="https://en.wikipedia.org/wiki/Dog">Wikipedia Dog</a></li>
            <li><a href="https://northshoredoodles.com/">Northshore Doodles</a></li>
            <li><a href="https://www.nationalgeographic.com/animals/mammals/d/domestic-dog/">National Geographic</a></li>
        </ul>
      </nav>
      <h1>Reviews of our site:</h1>
      <main>
        {posts.map((post: any) =>
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          </div>
        )}
        </main>

    </div>
    
    );
  }
}

export default App;
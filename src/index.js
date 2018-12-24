import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import Post from './components/post';
import Profile from './components/profile';


class App extends Component {
  render(){
    return(
      <div class="container">
          <div class="panel panel-danger">
              <div class="panel-heading">Home Heading</div>
              <div class="panel-body">Home Page Content</div>
          </div>
      </div>
    )
  }
}

ReactDOM.render(<BrowserRouter>
                   <div>
                      <nav class="navbar navbar-default">
                        <div class="container-fluid">
                          <div class="navbar-header">
                            <a class="navbar-brand" href="#">WebSiteName</a>
                          </div>
                          <ul class="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/posts">Posts</Link> </li>
                            <li><Link to="/profile">Profile</Link> </li>
                          </ul>
                        </div>
                      </nav> 

                      <Route exact path="/" component= {App}></Route>
                      <Route path="/posts" component= {Post}></Route>
                      <Route path="/profile" component= {Profile}></Route>
                   </div> 
                </BrowserRouter>, 
  
  
  document.getElementById('root'));
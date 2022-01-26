import React from 'react'
import {useState} from 'react'
import { useParams } from "react-router-dom"
import { useHistory } from 'react-router-dom'
  

const BlogView=  (props)=> {
        let { title} = props;
  let {tag} = useParams();
 
  const [post, setPost] = useState({title : "", img : "", text : "", author : ""});

  let history = useHistory();
  
  const getPost = async () => {
  const response = await fetch("https://glistening-lackadaisical-glue.glitch.me/api/posts/post/" + tag, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
              'auth-token' : localStorage.getItem("token")
            }

        });
  let json = await response.json();
  
  if(json.success) {
    return json.post;
  }
    
  else {
    alert("Something went wrong!");
    history.push("/");
  }
    
    
  }
  
   getPost().then((po) => {
     setPost({'title' : po.title, 'img' : po.body.img,'text' : po.body.text, 'author' : po.author});
   });
  


        return (
         <div>
  <br></br>
<div className="container-fluid">
    <div className="row content">
      <div className="col-sm-3 sidenav">
        <h4>John's Blog</h4>
        <ul className="nav nav-pills nav-stacked">
          <li className="active"><a href="#section1">Home</a></li>
          <li><a href="#section2">Friends</a></li>
          <li><a href="#section3">Family</a></li>
          <li><a href="#section3">Photos</a></li>
        </ul><br></br>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search Blog.."/>
          <span className="input-group-btn">
            <button className="btn btn-default" type="button">
              <span className="glyphicon glyphicon-search"></span>
            </button>
          </span>
        </div>
      </div>
        
  
      <div className="col-sm-9">
        
        <h2>{post.title} </h2>
   <h5><span className="glyphicon glyphicon-time"></span> Post by {post.author}, Sep 27, 2015.</h5>
        <h5><span className="label label-danger">Food</span> <span className="label label-primary">Ipsum</span></h5><br></br>
        <p>(post.text}</p>
          <br></br><br></br>
        
        <h4><small>RECENT POSTS</small></h4>
        <hr></hr>
        <h2>Officially Blogging</h2>
        <h5><span className="glyphicon glyphicon-time"></span> Post by John Doe, Sep 24, 2015.</h5>
        <h5><span className="label label-success">Lorem</span></h5><br></br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <hr></hr>
  
        <h4>Leave a Comment:</h4>
        <form role="form">
          <div className="form-group">
            <textarea className="form-control" rows="3" required></textarea>
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
        <br></br><br></br>
        
        <p><span className="badge">2</span> Comments:</p><br></br>
        
        <div className="row">
          <div className="col-sm-2 text-center">
            <img src="bandmember.jpg" className="img-circle" height="65" width="65" alt="Avatar"/>
          </div>
          <div className="col-sm-10">
            <h4>Anja <small>Sep 29, 2015, 9:12 PM</small></h4>
            <p>Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <br></br>
          </div>
          <div className="col-sm-2 text-center">
            <img src="bird.jpg" className="img-circle" height="65" width="65" alt="Avatar"/>
          </div>
          <div className="col-sm-10">
            <h4>John Row <small>Sep 25, 2015, 8:25 PM</small></h4>
            <p>I am so happy for you man! Finally. I am looking forward to read about your trendy life. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <br></br>
            <p><span className="badge">1</span> Comment:</p><br></br>
            <div className="row">
              <div className="col-sm-2 text-center">
                <img src="bird.jpg" className="img-circle" height="65" width="65" alt="Avatar"/>
              </div>
              <div className="col-xs-10">
                <h4>Nested Bro <small>Sep 25, 2015, 8:28 PM</small></h4>
                <p>Me too! WOW!</p>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <footer className="container-fluid">
    <p>Footer Text</p>
  </footer>

</div>
        )
}


export default BlogView

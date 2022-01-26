import React from 'react'
import {useState} from 'react'
import { useParams } from "react-router-dom"
import { useHistory } from 'react-router-dom'
  

const BlogView=   (props)=> {
        let { title} = props;
  let {tag} = useParams();
 
  const [post, setPost] = useState({});

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
    setPost(json.post);
  }
    
  else {
    alert("Something went wrong!");
    history.push("/");
  }
    
    
  }
  getPost();
  alert(JSON.stringify(post));

        return (
          
            <main role="main" className="container">
      <div className="jumbotron">
        <h1>{post.title}</h1>
        <p className="lead">"post.body.text"}</p>
        <a className="btn btn-lg btn-primary" href="../../components/navbar/" role="button">View navbar docs »</a>
      </div>
    </main>
        )
}


export default BlogView

import React from 'react'
import { useParams } from "react-router-dom"
import { useHistory } from 'react-router-dom'
  

const BlogView=   (props)=> {
        let { title} = props;
  let {tag} = useParams();
  let post;

  let history = useHistory();
  
  const getPost = async () => {
  const response = await fetch("https://glistening-lackadaisical-glue.glitch.me/api/posts/get/" + tag, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
              'auth-token' : localStorage.getItem("token")
            }

        });
  
  if(response.success) {
    post = response.post;
  }
  else {
    alert("Something went wrong!");
    history.push("/");
  }
  }
  getPost();
  
        return (
          
            <div className="container my-3">
            <h1> {post.title} </h1>
            <figure class="figure">
              <img src="post.img" class="figure-img img-fluid rounded" alt="..."></img>
  <figcaption class="figure-caption"> {title} </figcaption>
</figure>
            </div>
        )
}


export default BlogView

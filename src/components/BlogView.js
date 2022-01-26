import React from 'react'
import { useParams } from "react-router-dom"

const BlogView=  async (props)=> {
        let { title} = props;
  let {tag} = useParams();

  const response = await fetch("https://glistening-lackadaisical-glue.glitch.me/api/posts/get/" + tag, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
              'auth-token' : localStorage.getItem("token")
            }

        });
  
  if()
  
        return (
          
            <div className="container my-3">
            <h1> {tag} </h1>
            <figure class="figure">
              <img src="https://cdn-icons-png.flaticon.com/512/919/919827.png" class="figure-img img-fluid rounded" alt="..."></img>
  <figcaption class="figure-caption"> {title} </figcaption>
</figure>
            </div>
        )
}


export default BlogView

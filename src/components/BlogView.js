import React from 'react'

const BlogView= (props)=> {
        let { title} = props;
  

  
        return (
            <div className="my-3">
            <figure class="figure">
              <img src="https://cdn-icons-png.flaticon.com/512/919/919827.png" class="figure-img img-fluid rounded" alt="..."></img>
  <figcaption class="figure-caption"> Title </figcaption>
</figure>
            </div>
        )
}


export default BlogView

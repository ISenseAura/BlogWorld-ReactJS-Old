import React, {useParams} from 'react'

const BlogView= (props)=> {
        let { title} = props;
  let {tag} = useParams();

  
        return (
          
            <div className="my-3">
            <h1> {tag} </h1>
            <figure class="figure">
              <img src="https://cdn-icons-png.flaticon.com/512/919/919827.png" class="figure-img img-fluid rounded" alt="..."></img>
  <figcaption class="figure-caption"> {title} </figcaption>
</figure>
            </div>
        )
}


export default BlogView

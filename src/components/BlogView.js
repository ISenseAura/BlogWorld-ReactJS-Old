import React from 'react'

const BlogView= (props)=> {
        let { title, description, imageUrl, author, date, id, likes, dislikes, fetchB } = props;
  
  const deletePost = async () => {
    const response = await fetch("https://glistening-lackadaisical-glue.glitch.me/api/posts/delete/" + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
              'auth-token' : localStorage.getItem("token")
            }

        });
    let json = await response.json()
    if(json.success) {
    fetchB();
    
    }
    else {
      alert(json.msg)
    }
    
    
  }
  
  const likePost = async () => {
    
    const response = await fetch("https://glistening-lackadaisical-glue.glitch.me/api/posts/like/" + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
              'auth-token' : localStorage.getItem("token")
            }

        });
    let json = await response.json()
    if(json.success) {
        fetchB();
    
    }
    else {
      alert(json.msg)
    }

    
  }
    
    


  
  const dislikePost = async () => {
    
        alert(id);
    const response = await fetch("https://glistening-lackadaisical-glue.glitch.me/api/posts/dislike/" + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
              'auth-token' : localStorage.getItem("token")
            }

        });
    let json = await response.json()
    alert(json);
    if(json.success) {
              fetchB();    
    }
    else {
      alert(json.msg)
    }

    
  }
    
  
        return (
            <div className="my-3">
            <figure class="figure">
  <img src="..." class="figure-img img-fluid rounded" alt="...">
  <figcaption class="figure-caption">A caption for the above image.</figcaption>
</figure>
            </div>
        )
}


export default BlogView

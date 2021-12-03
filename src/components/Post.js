import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'


const AddPost = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: "",username:""}) 
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://glistening-lackadaisical-glue.glitch.me/api/auth/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username :  credentials.username, email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            history.push("/");

        }
        else{
            alert("Invalid credentials");
        }
    }

     const [note, setNote] = useState({title: "", description: "", img: ""})
    
     const addNote = async (e) => {
    // TODO: API Call
    // API Call 
       
         e.preventDefault();
       if(!localStorage.getItem("token")) {
         alert("You need to login first");
         history.push("/login");
         return;
       }
    const response = await fetch(`https://glistening-lackadaisical-glue.glitch.me/api/posts/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":  localStorage.getItem('token')
      },
      body: JSON.stringify({title : note.title, text : note.description, img : note.img})
    });

    const json = await response.json();
  if (json.success){
           
            history.push("/");

        }
        else{
            alert("Invalid credentials");
        }
  }
    
    
    
    const onChange = (e)=>{
        setNote({...credentials, [e.target.name]: e.target.value})
    }

    return (
               <div className="container my-3">
            <h2>Add a Blog</h2>
            <form className="my-3" onSubmit={addNote}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Image Link</label>
                    <input type="text" className="form-control" id="tag" name="tag" value={note.img} onChange={onChange} minLength={5} required />
                </div>
               
                <button  type="submit" className="btn btn-primary" onClick={addNote}>Add Post</button>
            </form>
        </div>
    )
}

export default AddPost
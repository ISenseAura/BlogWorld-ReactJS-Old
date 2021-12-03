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

     const addNote = async (title, description, tag) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`https://glistening-lackadaisical-glue.glitch.me/api/posts/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":  localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    });

    const note = await response.json();
  
  }
    
    
    
    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <form className = "my-4 mx-3" onSubmit={handleSubmit}>
              <h2><center> Sign Up</center></h2>
              <div className="mb-3">
                    <label htmlFor="username" className="form-label">username</label>
                    <input type="username" className="form-control" value={credentials.username} onChange={onChange} id="username" name="username" aria-describedby="emailHelp" />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AddPost
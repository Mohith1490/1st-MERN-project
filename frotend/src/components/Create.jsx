import React, { useState } from 'react';
import { json, useNavigate } from 'react-router-dom';

function Create() {
         const [name,setName] = useState('')
         const [email,setEmail] = useState('')
         const [age,setAge] = useState(0)
         const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const addUser = {name,email,age};
        const response = await fetch('http://localhost:4000',{
            method:"POST",
            body: JSON.stringify(addUser),
            headers: {
                "Content-Type":"application/json",
            }
        });
        
        const result = await response.json()
        
                if(!response.ok){
                    console.log(result.error);
                }
                if(response.ok) {
                  console.log(result)
                  setAge(0)
                  setEmail("");
                  setName('');
                  navigate("/all")
                };
    }


    return (
        <div className='container my-2'>
            <h2 className='text-center'>Enter the data</h2>
            <form  onSubmit={handleSubmit} >
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(e)=>{setName(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">age</label>
    <input type="number" className="form-control" value={age} onChange={(e)=>{setAge(e.target.value)}} />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
            
        </div>
    );
}

export default Create;
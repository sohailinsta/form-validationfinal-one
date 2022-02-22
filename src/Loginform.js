import React, { useState, useEffect } from 'react';
import './Login.css';
function  Loginform() {
    const [initialvalues, setInitialValues] = useState({username: "", 
    email: "", 
    password: "",
    number:"",
    city:"",
    country: "",
    zip:"",
    gender: ""});
    const [errors, setErrors] = useState({});
    const [issubmit, setIsSubmit] = useState(false);
    
    const handlechange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        setInitialValues({...initialvalues, [name]: value});
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        setErrors(validation(initialvalues));
        setIsSubmit(true);
    };

    useEffect(() => {
        if(Object.keys(errors).length === 0 && issubmit){
        }
    },[errors]);

    function validation(values) {
        const errors = {};

        if(!values.username){
            errors.username="Enter the valid username";
        }
    

        if(!values.email){
            errors.email="Enter the valid email";
        }
        else if(!/\S@\S+\.\S+/.test(values.email)){
            errors.email="Enter the valid email";
        }
        if(!values.password){
            errors.password="Enter the valid password";
        }
        else if(values.password.length<7){
            errors.password="Enter the valid password";
        }
        if(!values.number){
            errors.number="Enter the valid number";
        }
        else if(values.number.length<10 || values.number.length>10 ){
            errors.number="Enter the valid number";
        }
        if(!values.gender){
            errors.gender="Enter the valid gender";
        }
       
       
        if(!values.country){
            errors.country="Enter the valid country";
        }
       
       
      return errors;
};
  return (
    <div className='container'>
        {Object.keys(errors).length === 0 && issubmit ? (
        <div className='successfully'> signed in successfully </div> 
        ) :
         (<p>enter your  credential</p>) }
        <form className='form' onSubmit={handlesubmit}>
         <div className='form-inputs'>
            <h1 className='form-label-heading'>Registration</h1>
            <h1 className='form-label-heading2'>form</h1>
                    <label className='form-label'>Name</label>
                    <input className="form-input"
                    type="text" 
                    name="username" 
                    placeholder="username"
                    value={initialvalues.username}
                    onChange={handlechange}>
                    </input>
                    <p>{errors.username}</p>
                    </div>



                    <div className='form-inputs'>
                    <label className='form-label'>Email </label>
                    <input className="form-input"
                    type="text" 
                    name="email" 
                    placeholder="email"
                    value={initialvalues.email}
                    onChange={handlechange}>
                    </input>
                    <p>{errors.email}</p>
                    </div>


                    <div className='form-inputs'>
                    <label className='form-label'>Password</label>
                    <input className="form-input"
                    type="password" 
                    name="password" 
                    placeholder="password"
                    value={initialvalues.password}
                    onChange={handlechange}>
                    </input>
                    <p>{errors.password}</p>
                    </div>


                    <div className='form-inputs'>
                    <label className='form-label'>Number</label>
                    <input className="form-input"
                    type="text" 
                    name="number" 
                    placeholder="number"
                    value={initialvalues.number}
                    onChange={handlechange}>
                    </input>
                    <p>{errors.number}</p>
                    </div>


                    <div className='form-inputs'>
                    <label className='form-label'>Gender</label>
                    <input className="form-input"
                    type="text" 
                    name="gender" 
                    placeholder="gender"
                    value={initialvalues.gender}
                    onChange={handlechange}>
                    </input>
                    <p>{errors.gender}</p>
                    </div>


                    <div className='form-inputs'>
                    <label className='form-label'>Country</label>
                    <input className="form-input"
                    type="text" 
                    name="country" 
                    placeholder="country"
                    value={initialvalues.country}
                    onChange={handlechange}>
                    </input>
                    <p>{errors.country}</p>
                    </div>

                    <button className="btn" onClick={handlesubmit}>Submit</button>
        </form>
    </div> 
 );
}

export default Loginform;
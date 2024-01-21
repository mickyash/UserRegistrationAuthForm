import { useState } from "react";
import {Link} from "react-router-dom"

export const SignupPage = () => {
  const formInitialdetails = {
    name: "",
    email: "",
    password: "",
    dateOfBirth: "",
  };

  const [formdetails, setformdetails] = useState(formInitialdetails);
  const [button, setbuttontext] = useState("Submit");
  const [status, setstatus] = useState({});

  const onFormUpdate = (category, value) => {
    setformdetails({
      ...formdetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setbuttontext("Loading...");
    
    let response = await fetch("https://user-registration-auth-formm.vercel.app/user/signup", {
    // let response = await fetch("http://localhost:8000/user/signup", {



    
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdetails),
    });
    setbuttontext("Send");
    let result = await response.json();
    setformdetails(formInitialdetails);
  
    if(response.ok){
        if(result.status === "Pending"){
            setstatus({
                success:true,
                message:"Verification email send, Check Your Email"
            });
        }else if (result.status ==="Failed"){
            setstatus({
                success:false,
                message:result.message
            });
           
        } else{
            setstatus({
                success:false,
                message:"an error occured"
            })
        }
        }
    
    
  };

  return (
    
      <div className="maindiv">
        <div className="signupform">
          <div>SignUp here</div>
          <form onSubmit={handleSubmit} method="post">
            <div className="ipvalue">
              <input
                type="text"
                placeholder="name"
                value={formdetails.name}
                onChange={(e) => onFormUpdate("name", e.target.value)}
                required
              />
            </div>
            <div className="ipvalue">
              <input
                type="email"
                placeholder="email"
                value={formdetails.email}
                onChange={(e) => onFormUpdate("email", e.target.value)}
                required
              />
            </div>
            <div className="ipvalue">
              <input
                type="password"
                placeholder="password"
                value={formdetails.password}
                onChange={(e) => onFormUpdate("password", e.target.value)}
                required
              />
            </div>
            <div className="ipvalue">
              <input
                type="date"
                placeholder="Date Of Birth"
                value={formdetails.dateOfBirth}
                onChange={(e) => onFormUpdate("dateOfBirth", e.target.value)}
                required
              />
            </div>

            <button type="submit">
              <span>{button}</span>
            </button>
            {status.message && (
              <p className="status-message">{status.message}</p>
            )}
          </form>
        
            
            <div className="links"><Link to='/page2'>Already have an account Singin</Link></div>
         
        </div>
      </div>
    
  );
}

export default SignupPage;

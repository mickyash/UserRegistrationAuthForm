import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom"




const Page = () => {
    const formInitialdetails = {
        email:'',
        password:''
    }

    const [formdetails, setformdetails] = useState(formInitialdetails);
    const [button , setbuttontext] = useState('Submit');
    const [status, setstatus] = useState({});

    const onFormUpdate = (category, value) => {
        setformdetails({
          ...formdetails,
          [category]: value
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setbuttontext('login...');
        let response = await fetch ("https://user-registration-auth-formm.vercel.app/user/signin",{
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
    }




    return (
        <div className="maindiv">
        <div className="signupform">
         <form onSubmit={handleSubmit} method="post">
         <div className="ipvalue">
            <input type="text" placeholder="email" value={formdetails.email} onChange={(e)=> onFormUpdate('email', e.target.value)}/>
            </div>
         <div className="ipvalue">
            <input type="text" placeholder="password" value={formdetails.password} onChange={(e)=>onFormUpdate('password', e.target.value)}/>
            </div>

            <button type="submit">
              <span>{button}</span>
            </button>
            {status.message && (
              <p className="status-message">{status.message}</p>
            )}
         </form>
        

        <div className="links"><Link to='/page1'>Don't have a account? SingUp</Link></div>
        </div>
        </div>
    )
}

export default Page;

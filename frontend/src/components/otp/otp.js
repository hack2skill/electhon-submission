import { useState } from 'react';
import { otpFields } from '../login/formfields';
import FormAction from '../login/formaction';
import FormExtra from '../login/formextra';
import Input from '../login/input';
import Header from '../login/header';

const fields=otpFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function Otp(){
    const [loginState,setLoginState]=useState(fieldsState);
    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        authenticateUser();
    }

    //Handle Login API Integration here
    const authenticateUser = () =>{

    }
    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
       <div className="max-w-md w-full space-y-8">
       <Header
                heading="Login to your account"
                // paragraph="Don't have an account yet? "
                // linkName="Signup"
                // linkUrl="/signup"
                // linkName="Signup"
                linkUrl=""
                />
    <div className="-space-y-px">
            {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            }
        </div>
         {/* <FormExtra/> */}
        <FormAction handleSubmit={handleSubmit} text="Login"/>


        </div></div>
      </form>
    )
}
const loginFields=[
    {
        labelText:"Voter ID",
        labelFor:"voter-id",
        id:"voter-id",
        name:"voterid",
        type:"number",
        // autoComplete:"email",
        isRequired:true,
        placeholder:"Voter ID"   
    },
   
]

const otpFields=[
    {
        labelText:"Mobile number",
        labelFor:"mobile-no",
        id:"mobile-no",
        name:"mobile",
        type:"tel",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Enter the OTP"   
    }
]

const signupFields=[
    {
        labelText:"Username",
        labelFor:"username",
        id:"username",
        name:"username",
        type:"text",
        autoComplete:"username",
        isRequired:true,
        placeholder:"Username"   
    },
    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"email-address",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    },
    {
        labelText:"Confirm Password",
        labelFor:"confirm-password",
        id:"confirm-password",
        name:"confirm-password",
        type:"password",
        autoComplete:"confirm-password",
        isRequired:true,
        placeholder:"Confirm Password"   
    }
]

export {loginFields,signupFields,otpFields}
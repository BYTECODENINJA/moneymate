import React from 'react'
import {SignUp} from "@clerk/nextjs";

const SignUpPage = () => {
    return <div className="flex justify-center items-center h-full w-full">
       <SignUp routing="hash" signInUrl="/login"/>
    </div>
}
export default SignUpPage;

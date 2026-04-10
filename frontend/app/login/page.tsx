import React from 'react'
import {SignIn} from "@clerk/nextjs";

const LoginPage = () => {
    return <div className="flex justify-center items-center h-full w-full">
        <SignIn routing="hash" signUpUrl="/signup"/>
    </div>
}
export default LoginPage;

import { SignUp } from "@clerk/clerk-react";
import { Link } from 'react-router-dom'

function SignUpPage() {
  return (
    <div className="flex justify-center my-20 items-center">
      <div className='flex flex-col items-center shadow-md rounded-2xl p-8 bg-white'>
        <SignUp routing="path" path="/auth/sign-up" signInUrl="/auth/sign-in" />
        <p className='mt-4 text-sm text-gray-600'>
          Already have an account?{' '}
          <Link to="/auth/sign-in" className='text-blue-600 font-medium hover:underline'>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUpPage
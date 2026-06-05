import { SignIn } from '@clerk/clerk-react'
import React from 'react'
import { Link } from 'react-router-dom'

function SignInPage() {
  return (
    <div className='flex justify-center my-20 items-center'>
      <div className='flex flex-col items-center shadow-md rounded-2xl p-8 bg-white'>
        <SignIn routing="path" path="/auth/sign-in" signUpUrl="/auth/sign-up" />
        <p className='mt-4 text-sm text-gray-600'>
          Don't have an account?{' '}
          <Link to="/auth/sign-up" className='text-blue-600 font-medium hover:underline'>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignInPage

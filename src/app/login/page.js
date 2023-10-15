"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Spinner from '@/components/UI/Spinner'
import axios from "axios";
import { useGlobalState } from "@/context/store";

const Login = () => {
  const [hasError, setHasError] = useState(null)
  const [loading, setLoading] = useState(false)
  const emailRef = useRef("")
  const passRef = useRef("")

  const router = useRouter()
  const {user, dispatchAuth} = useGlobalState()

  const formSubmitHandler = async(e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const data = {
        email: emailRef.current.value,
        password: passRef.current.value
      }
      const response = await axios.post('/api/auth/login', data);
      setHasError(null)
      dispatchAuth()
      router.replace('/')

    } catch (err) {
      let errMsg = "Something went wrong. Please try again!"
      if(err.response && err.response.data && err.response.data.error) {
        errMsg = err.response.data.error
      }
      setHasError(errMsg)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (user.id) {
      router.replace('/')
    }
  }, [user])

  if (loading) {
    return (<div className="w-598px max-w-[100%] pt-6 flex justify-center items-center min-h-[350px] max-h-[100%]"><Spinner /></div>)
  }

  
  return (
    <section className="pt-6 flex flex-col justify-center items-center min-h-[500px]">
      <form onSubmit={formSubmitHandler} className="flex flex-col gap-3 p-4 w-[598px] max-w-[100%] mx-auto overflow-hidden border rounded-lg">
        <h3 className="text-2xl text-center font-bold mb-2">Login</h3>
        {hasError && <p className="text-center p-4 text-red-500">{hasError}</p>}

        <div className="flex flex-col gap-1">
          <label className="text-white/70" htmlFor="email">Email:</label>
          <input className="w-full text-black/80 rounded-sm px-4 py-2" type="email" name="email" id="email" placeholder="Enter your email address here" required ref={emailRef}/>
        </div>

        <div className="flex flex-col gap-1">
        <label className="text-white/70" htmlFor="email">Password:</label>
          <input className="w-full text-black/80 rounded-sm px-4 py-2" type="password" name="password" id="password" placeholder="Enter your password address here" minLength={6} required ref={passRef}/>
        </div>

        <button className="bg-sky-500 px-4 py-2 w-fit ms-auto mt-2" disabled={loading} type="submit">Login</button>
        <p className="text-center mt-2">If you do not have account yet please create a new one. <Link className="text-sky-500" href="/signup">Signup</Link></p>
      </form>
    </section>
  )
  
}

export default Login;
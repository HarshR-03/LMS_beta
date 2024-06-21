import { useState } from "react"
import { useSignup } from '../hooks/useSignup'

const Signup = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {signup, isLoading, error} = useSignup()

    const handleSubmit = async (e)=>{
        e.preventDefault()
        await signup(email,password)
    }
    return(
        <div className="w-screen h-full flex items-center justify-center bg-gray-200">
        <form onSubmit={handleSubmit} className="shadow-md p-4 space-y-4">
        <h3 className="text-2xl">Signup:</h3>
        <div>
        <label>Email:</label>
        <input className="border-solid border-black"
            type="email"
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
        />
        </div>
        
        <div>
        <label>Password:</label>
        <input 
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
        />
        </div>
        <button disabled={isLoading} className="text-white bg-green-500 p-2 rounded">Signup</button>
        {error && <div className="bg-red text-red-600 rounded p-2">{error}</div>}
        </form>
        </div>
    )
}

export default Signup
import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {login, isLoading, error} = useLogin()

    const handleSubmit = async (e)=>{
        e.preventDefault()

        await login(email,password)    
    }
    return(
        <div className="w-screen h-full flex items-center justify-center bg-gray-200">
        <form onSubmit={handleSubmit} className="shadow-md p-4 space-y-4">
        <h3 className="text-2xl">Login:</h3>
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
        <button className="text-white bg-green-500 rounded p-2">Login</button>
        {error && <div className="text-red-500 p-2 border-red-500">{error}</div>}
        </form>
        </div>
    )
}

export default Login
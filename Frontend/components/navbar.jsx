import { Outlet, Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = ()=> {
    const {logout} = useLogout()
    const {user} = useAuthContext()

    const handleClick = () => {
        logout()
    }

    return (
        <div className="py-4 px-8 m-auto bg-green-200 flex justify-between align-center">
            <Link to="/">
                <div className="text-5xl">Workout Buddy</div>
            </Link>
            <nav className="space-x-4 text-xl">
                {user && (<button onClick={handleClick}>Logout</button>)}
                {!user && (<Link to="/login">Login</Link>)}
                {!user && (<Link to="/signup">Signup</Link>)}
            </nav>
        </div>
    )
}

export default Navbar
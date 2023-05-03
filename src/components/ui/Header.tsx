import {useAuth} from "../../hooks/useAuth.js";

const Header = () => {

    const {user, setUser} = useAuth()

    return (
        user ?
            <>
                <h2>Welcome {user.name}</h2>
                <button className='button-global' onClick={() => setUser(null)}>Logout</button>
            </>
            :
            <>
                <button className='button-global' onClick={() => setUser({name: 'Slava'})}>Login</button>
            </>
    )
}
export default Header
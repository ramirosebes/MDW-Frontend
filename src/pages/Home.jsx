import { auth } from '../firebase'
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(auth);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate("/login");

    }

  return (
    <div>
        <h1>You now have access to home page</h1>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home
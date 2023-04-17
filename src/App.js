import logo from './logo.svg';
import './App.css';
import { LoginButton } from "./Components/login";
import { LogoutButton } from './Components/logout';
import  Profile  from "./Components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import { Landing } from './Components/Landing';
import { Home } from './Components/Home';


function App() {
  const {isAuthenticated } = useAuth0();
  return (
    <>
    {isAuthenticated ? (
      <>
      <Home/>
      </>
    ):<Landing/>
    }
    </>
    
  );
}

export default App;

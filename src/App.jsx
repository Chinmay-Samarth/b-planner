import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import { Landing } from './Components/Landing';
import { Header } from './Components/Header';
import { Home } from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import { Transaction } from './Components/Transaction';
import { Payments } from './Components/Payments';
import { Inventory } from './Components/Inventory';
import { Users } from './Components/Users';
import { Footer } from './Components/Footer';

function App() {
  const {isAuthenticated, user } = useAuth0();

  if(isAuthenticated === true){
    if(user.name === "Mahummad Ali Chinnah"){
      user.rank = 1
    }
  }

  return (
    <>
    {isAuthenticated ? (
      <>
      <Header/>
      <Routes>
        <Route
        exact path="/" element={<Home/>}
        />
        <Route
        path="/transaction"
        element={<Transaction/>}
        />
        <Route
        path="/payments"
        element={<Payments/>}
        />
        <Route
        path="/inventory"
        element={<Inventory/>}
        />
        {user.rank !== undefined?
        <Route
        path="/users"
        element={<Users/>}
        />
        :null} 
      </Routes>
      <Footer/>
      </>
    ):<Landing/>
    }
    </>
    
  );
}

export default App;

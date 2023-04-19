import React from "react";
import { LogoutButton } from "./logout";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export const Header = () => {
  const {user} = useAuth0()
  return (
  <nav className="navbar navbar-expand-lg py-3" style={{background:"#3FEEE6"}}>
  <div className="container-fluid ">
    <Link className="navbar-brand fs-3 " to="/">Planner</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/transaction">Transaction</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/payments">Payments</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/inventory">Inventory</Link>
        </li>
        {user.rank === undefined ? 
        null:
        <li className="nav-item">
          <Link className="nav-link " to="/users">Users</Link>
        </li>
        }
      </ul>
      <div className="d-flex" >
        <img src={user.picture} alt={user.name} width={50} className="rounded" /> <br className="sm" />
        <LogoutButton />
      </div>
    </div>
  </div>
</nav>
  )
}

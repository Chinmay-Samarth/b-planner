import React from "react";
import { LogoutButton } from "./logout";
import { useAuth0 } from "@auth0/auth0-react";

export const Header = () => {
  const {user} = useAuth0()
  return (
    <nav className="navbar navbar-expand-lg" style={{background:"#032d6b"}}>
  <div className="container-fluid ">
    <a className="navbar-brand fs-3 text-light" href="#">Planner</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Link</a>
        </li>
      </ul>
      <div className="d-flex" >
        <img src={user.picture} alt={user.name} width={50} className="rounded" />
        <LogoutButton />
      </div>
    </div>
  </div>
</nav>
  )
}

import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from 'react-icons/fi'
import { CgMenu, CgClose } from 'react-icons/cg'
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContex";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../styles/Button";

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState();
  const { total_items } = useContext(CartContext)

  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <Nav>
      <div className="nav-logo">
        <Link to={'/'}>
          <img src="../images/project.svg" alt="logo" className="mainlogo" />
          {/* <h2>Parth Store</h2> */}
        </Link>
      </div>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <Link to={'/'} onClick={() => setMenuIcon(false)} className="navbar-link">Home</Link>
          </li>
          <li>
            <Link to={'/products'} onClick={() => setMenuIcon(false)} className="navbar-link">Products</Link>
          </li>
          <li>
            <Link to={'/contact'} onClick={() => setMenuIcon(false)} className="navbar-link">Contact</Link>
          </li>
          {isAuthenticated && <p>Welcome, {user.name}</p>}
          {isAuthenticated ? (
            <li>
              <Button style={{ backgroundColor: 'black' }} className="btn" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
              </Button>
            </li>
          ) : (
            <li>
              <Button style={{ backgroundColor: 'black' }} onClick={() => loginWithRedirect()}>Log In</Button>
            </li>
          )}

          <li>
            <Link to={'/cart'} onClick={() => setMenuIcon(false)} className="navbar-link cart-trolley--link">
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item">{total_items}</span>
            </Link>
          </li>
        </ul>

        <div className="mobile-navbar-btn">
          <CgMenu name="menu-outline" className="mobile-nav-icon" onClick={() => setMenuIcon(true)} />
          <CgClose name="close-outline" className="mobile-nav-icon close-outline" onClick={() => setMenuIcon(false)} />
        </div>
      </div>
    </Nav>
  )
}

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    background: #ed5353;
    height: 8rem;

    .mainlogo{
      width: 200px;
      max-height: 110%;
    }
    .navbar-lists {
      display: flex;
      gap: 4.8rem;
      align-items: center;
      margin-top: 20px;
      margin-right: 30px;
      font-weight: 600;

      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 500;
          text-transform: uppercase;
          color: #212529;
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: white;
        }
      }
    }

    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }

    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }

    .close-outline {
      display: none;
    }

    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        position: relative;
        font-size: 3.2rem;
      }

      .cart-total--item {
        width: 2.4rem;
        height: 2.4rem;
        position: absolute;
        background-color: #000;
        color: #000;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -20%;
        left: 70%;
        background-color: #8490ff;
      }
    }

    .user-login--name {
      text-transform: capitalize;
    }

    .user-logout,
    .user-login {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
    }

    @media (max-width: 768px) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 999;
        border: #000;
        margin-top: 15px;
        margin-right: 15px;

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: #000;
        }
      }
      
      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 10%;
        right: 10%;
        color:#000;
        z-index: 999;
      }

      .active .close-outline {
        display: inline-block;
      }

      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #ed5353;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        visibility: hidden;
        opacity: 0;
      }

      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 1s linear;

        .navbar-link {
          font-size: 4.2rem;
        }
      }
      .cart-trolley--link {
        position: relative;

        .cart-trolley {
          position: relative;
          font-size: 5.2rem;
        }

        .cart-total--item {
          width: 4.2rem;
          height: 4.2rem;
          font-size: 2rem;
        }
      }

      .user-logout,
      .user-login {
        font-size: 2.2rem;
        padding: 0.8rem 1.4rem;
      }
    }
  `;
export default Navbar
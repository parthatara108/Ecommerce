import styled from "styled-components";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <MainHeader>
      <Link to={'/'}>
        <img src="images/logo.png" alt="logo" />
      </Link>
      <Navbar />
    </MainHeader>
  )
}
const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: #fe8d08;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;
export default Header
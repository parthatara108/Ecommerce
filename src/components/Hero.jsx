import styled from "styled-components"
import { Link } from "react-router-dom"
import { Button } from '../styles/Button'
const Hero = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data" style={{ color: 'red' }}>Welcome To </p>
            <h1>Parth Store</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tenetur ipsum dignissimos rem, odio aliquid doloremque ea. Aspernatur doloremque adipisci, sapiente ut repudiandae, nesciunt quas placeat commodi, eius excepturi necessitatibus.
            </p>
            <Link to={'/products'}>
              <Button>Shop Now</Button>
            </Link>
          </div>
          <div className="hero-section-image">
            <figure>
              <img src="images/main.jpeg" alt="img" className="img-style" />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
     padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: red;
      position: absolute;
      opacity: 0.4;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      background-color: red;
    }
  }
`
export default Hero
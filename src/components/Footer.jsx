import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
      <h3>
        &copy; {new Date().getFullYear()}
        <span> Parth Atara</span> All rights reserved
      </h3>
    </Container>
  )
}

const Container = styled.footer`
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
  text-align: center;
  span {
    color: red;
  }
  h3 {
    color: white;
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`

export default Footer
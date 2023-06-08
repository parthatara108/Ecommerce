import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Contact = () => {
  const { isAuthenticated, user } = useAuth0()
  return (
    <Wrapper>
      <h2 className="common-heading">Contact Us</h2>
      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xoqzojrb"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              value={isAuthenticated ? user.name : ''}
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              value={isAuthenticated ? user.email : ''}
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            background-color: red;

            &:hover {
              background-color: #fff;
              border: 1px solid red;
              color: red;
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;
export default Contact;
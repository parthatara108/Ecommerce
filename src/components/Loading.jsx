import styled from "styled-components"
const Loading = () => {
    return (
        <Wrapper>
            <div className='section secton-center'>
                <div className='loading'></div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

.loading {
  width: 6rem;
  height: 6rem;
  margin: 0 auto;
  margin-top: 10rem;
  border-radius: 50%;
  border: 4px solid #ccc;
  border-top-color: rgb(215, 51, 36);
  animation: spinner 0.6s linear infinite;
}`
export default Loading
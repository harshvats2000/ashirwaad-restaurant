import styled from "styled-components"

export const Wrapper = styled.section`
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    h1 {
      font-size: 2.5rem;
      letter-spacing: 3px;
    }
    p {
      margin: 20px 0px;
      max-width: 90%;
      font-size: 1.4rem;
      line-height: 1.8rem;
      text-shadow: 1px 1px 0px black;
    }
  }
`

export const Container = styled.div`
  padding: 0px 15px;
  width: 100%;
  max-width: 1200px;
  margin: auto;
`

export const Title = styled.h1`
  color: var(--color-text-main);
  font-size: 5rem;
  letter-spacing: 5px;
  margin: 0;
  text-shadow: 3px 3px 0px black;
`

export const Content = styled.div`
  p {
    color: var(--color-text-primary);
    font-family: "Dancing Script";
    font-size: 1.8rem;
    line-height: 2rem;
    margin: 20px 0 40px 0px;
    max-width: 550px;
  }
  a {
    display: inline-block;
    max-width: 250px;
  }
`

export const Button = styled.div`
  background-color: var(--color-bg-dark);
  font-size: 1.2rem;
  border: none;
  padding: 10px 30px;
  letter-spacing: 2px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  clip-path: polygon(0% 0, 90% 0, 100% 100%, 10% 100%);
  transition: 0.3s;

  &:hover {
    clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%);
  }
`

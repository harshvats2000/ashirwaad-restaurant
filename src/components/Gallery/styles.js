import styled from "styled-components"

export const Wrapper = styled.section``

export const Container = styled.div`
  padding: 50px 15px;
`

export const Title = styled.h2`
  text-align: center;
  font-family: "Dancing Script";
  font-size: 2.5rem;

  @media (min-width: 768px) {
    font-size: 3.5rem;
    margin-bottom: 40px;
  }
`

export const Images = styled.div`
  display: grid;
  grid-gap: 10px;

  @media (min-width: 768px) {
    max-width: 1200px;
    margin: auto;
    grid-template-rows: repeat(7, 3vw);
    grid-template-columns: repeat(8, 1fr);
  }
`

export const ImageWrapper = styled.div`
  overflow: hidden;

  div {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  img {
    transition: 1s !important;
  }

  div:hover {
    img {
      transform: scale(1.4);
    }
  }

  @media (min-width: 768px) {
    &:nth-child(1) {
      grid-row: 1 / 6;
      grid-column: 1 / 3;
    }
    &:nth-child(2) {
      grid-row: 1 / 3;
      grid-column: 3 / 6;
    }
    &:nth-child(3) {
      grid-row: 1 / 3;
      grid-column: 6 / 9;
    }
    &:nth-child(4) {
      grid-row: 3 / 8;
      grid-column: 3 / 7;
    }
    &:nth-child(5) {
      grid-row: 3 / 6;
      grid-column: 7 / -1;
    }
    &:nth-child(6) {
      grid-row: 6 / 9;
      grid-column: 7 / 9;
    }
    &:nth-child(7) {
      grid-row: 6 / 8;
      grid-column: 1 / span 2;
    }
    &:nth-child(8) {
      grid-row: 8 / 8;
      grid-column: 1 / 4;
    }
    &:nth-child(9) {
      grid-row: 8 / 8;
      grid-column: 4 / 7;
    }
  }
`

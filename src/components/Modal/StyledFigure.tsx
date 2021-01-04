import styled from "styled-components";

export const StyledFigure = styled.figure`
  margin: 0;

  figcaption {
    border-left: 3px solid;
    margin: 0 4rem;
    padding-left: 0.8rem;
  }

  .slick-list {
    align-items: center;
    display: flex;
  }

  .slick-track {
    align-items: center;
    display: flex;
  }

  .slick-slide {
    padding: 0 0.5rem;
    opacity: 0.5;
    transition: opacity 0.5s ease-in-out;
  }

  .slick-active {
    opacity: 1;
  }
`;

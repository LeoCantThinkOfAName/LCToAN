import styled from "styled-components";

interface ComponentState {
  state: "entering" | "entered" | "exiting" | "exited" | "unmounted";
}

interface TransitionProps {
  opacity: number;
  visibility: "visible" | "hidden";
}

interface TransitionStyles {
  entering: TransitionProps;
  entered: TransitionProps;
  exiting: TransitionProps;
  exited: TransitionProps;
  unmounted: TransitionProps;
}

const transitionStyles: TransitionStyles = {
  entering: { opacity: 1, visibility: "visible" },
  entered: { opacity: 1, visibility: "visible" },
  exiting: { opacity: 0, visibility: "visible" },
  exited: { opacity: 0, visibility: "hidden" },
  unmounted: { opacity: 0, visibility: "hidden" }
};

export const Overlay = styled.div<ComponentState>`
  background: rgba(0, 0, 0, 0.8);
  color: ${({ theme }) => theme.colors.white};
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  transition: opacity 0.5s ease-in-out;
  visibility: hidden;
  width: 100%;
  z-index: 999;
  ${({ state }) => {
    return { ...transitionStyles[state] };
  }}

  h3 {
    margin-left: 4rem;

    a {
      color: ${({ theme }) => theme.colors.white};
      font-size: 1rem;
      margin-left: 0.5rem;
    }
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    max-width: 1440px;
    min-height: 100%;
  }
`;

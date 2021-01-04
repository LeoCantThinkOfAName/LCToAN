import React, { useEffect, useState } from "react";
import { Transition } from "react-transition-group";
import styled from "styled-components";

interface TransitionProps {
  opacity: number;
}

interface TransitionStyles {
  entering: TransitionProps;
  entered: TransitionProps;
  exiting: TransitionProps;
  exited: TransitionProps;
  unmounted: TransitionProps;
}

interface ComponentState {
  state: "entering" | "entered" | "exiting" | "exited" | "unmounted";
}

const duration = 1000;

const transitionStyles: TransitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  unmounted: { opacity: 0 },
};

const StyledMain = styled.main<ComponentState>`
  align-items: center;
  flex: 1;
  display: flex;
  padding: 1rem 0 2rem;
  opacity: 0;
  transition: opacity ${duration}ms ease-in-out;
  ${({ state }) => {
    return { ...transitionStyles[state] };
  }}
`;

const TransitionContainer: React.FC = ({ children }) => {
  const [pageIn, setPageIn] = useState(false);

  useEffect(() => {
    setPageIn(true);
  }, []);

  return (
    <Transition in={pageIn} timeout={duration}>
      {(state) => <StyledMain state={state}>{children}</StyledMain>}
    </Transition>
  );
};

export default TransitionContainer;

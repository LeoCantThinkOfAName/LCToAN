import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;

  input {
    display: none;

    &:checked {
      ~ label {
        &::after {
          transform: translateX(1rem);
        }
      }
    }
  }

  p {
    font-size: 0.6rem;
    margin: 2px 0 0;
  }
`;

const StyledLabel = styled.label`
  display: block;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  border-radius: 0.8rem;
  border-width: 2px;
  border-style: solid;
  height: 1.25rem;
  width: 2.25rem;

  &::after {
    border-width: calc(0.625rem - 2px);
    border-style: solid;
    border-radius: 50%;
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    width: 0;
    transition: transform 0.2s ease-in-out;
  }
`;

interface TogglerProp {
  id: string;
  label: string;
  checked?: boolean;
  title: string;
  onChange: () => void;
}

const Toggler: React.FC<TogglerProp> = ({
  id,
  label,
  onChange,
  checked,
  title
}) => {
  return (
    <StyledDiv title={title}>
      <input type="checkbox" id={id} onChange={onChange} checked={checked} />
      <StyledLabel htmlFor={id} />
      <p>{label}</p>
    </StyledDiv>
  );
};

export default Toggler;

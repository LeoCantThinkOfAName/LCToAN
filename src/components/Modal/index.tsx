import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Img from "gatsby-image";
import React from "react";
import { useContext } from "react";
import Slider, { Settings } from "react-slick";
import { Transition } from "react-transition-group";

import { ModalContext } from "../Card";
import { CloseBtn } from "./CloseBtn";
import { Overlay } from "./Overlay";
import { StyledFigure } from "./StyledFigure";

import { FaExternalLinkAlt } from "react-icons/fa";
import { useIntl } from "gatsby-plugin-intl";

const setting: Settings = {
  arrows: false,
  centerMode: true,
  infinite: true
};

const Modal: React.FC = () => {
  const { title, description, url, imgs, open, setOpen } = useContext(
    ModalContext
  );
  const intl = useIntl();

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <Transition in={open} timeout={500}>
      {state => (
        <Overlay state={state}>
          <CloseBtn
            onClick={handleClick}
            title={intl.formatMessage({ id: "CloseButton" })}
          >
            &#10005;
          </CloseBtn>
          <div>
            <h3>
              {title}
              <a
                href={url}
                rel="noopener noreferrer"
                target="_blank"
                title={`${intl.formatMessage({ id: "LinkTo" })} ${title}`}
              >
                <FaExternalLinkAlt />
              </a>
            </h3>
            <StyledFigure>
              <Slider {...setting}>
                {imgs.map((img, index) => (
                  <Img fluid={img} key={index} />
                ))}
              </Slider>
              <figcaption dangerouslySetInnerHTML={{ __html: description }} />
            </StyledFigure>
          </div>
        </Overlay>
      )}
    </Transition>
  );
};

export default Modal;

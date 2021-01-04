import React from "react";

import {
  FaGlobe,
  FaGithub,
  FaYoutube,
  FaEnvelope,
  FaRegFile
} from "react-icons/fa";

interface IconType {
  icon: string;
}

const IconSwitch: React.FC<IconType> = ({ icon }) => {
  switch (icon) {
    case "FaGlobe":
      return <FaGlobe />;
    case "FaGithub":
      return <FaGithub />;
    case "FaYoutube":
      return <FaYoutube />;
    case "FaEnvelope":
      return <FaEnvelope />;
    default:
      return <FaRegFile />;
  }
};

export default IconSwitch;

import React from "react";

import IconSwitch from "./IconSwitch";
import StyledIcon from "./StyledIcon";

interface IconType {
  icon: string;
  href: string;
  target: string;
  title: string;
  rel: string;
}

const ContactIcon: React.FC<IconType> = ({ icon, ...props }) => {
  return (
    <StyledIcon {...props}>
      <IconSwitch icon={icon} />
    </StyledIcon>
  );
};

export default ContactIcon;

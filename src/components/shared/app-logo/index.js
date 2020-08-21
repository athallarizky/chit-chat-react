import React from "react";
import { Link } from 'react-router-dom'
import { Image } from "@chakra-ui/core";
import ChitChatLogo from "assets/images/chit-chat-logo.png";

export default function AppLogo(props) {
  return (
    <Link to="/">
        <Image src={ChitChatLogo} alt="chit-chat-logo" {...props} />
    </Link>
  );
}

import React from "react";
import { Flex } from "@chakra-ui/core";

export default function NavigationBar(props) {
  return (
    <Flex {...props} bg="primary.500" maxHeight="80px" position="fixed" minWidth="100vw" zIndex="10" px="25px">
      {props.children}
    </Flex>
  );
}

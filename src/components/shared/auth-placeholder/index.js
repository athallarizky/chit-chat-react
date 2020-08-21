import React from "react";
import { createBrowserHistory } from "history";
import { Link } from "react-router-dom";
import { Box, Text } from "@chakra-ui/core";

export default function AuthPlaceholder(props) {
  const current = createBrowserHistory().location.pathname;

  let caption,
    redirect = "";

  if (current === "/login") {
    caption = "Belum punya akun?";
    redirect = "register";
  } else {
    caption = "Sudah punya akun?";
    redirect = "login";
  }
  return (
    <Box>
      <Box display="inline-flex">
        <Text mr="5px">{caption}</Text>

        <Text color="primary.500" fontWeight="bold">
          <Link to={redirect}>
            {current === "/login" ? "Daftar" : "Masuk"} yuk
          </Link>
        </Text>
      </Box>
    </Box>
  );
}

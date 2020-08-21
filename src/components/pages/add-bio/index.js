import React from "react";
import { Link } from "react-router-dom";
import { Box, Textarea, Text, ButtonGroup, Button } from "@chakra-ui/core";
import { AppLogo } from "components/shared";
import { NavigationBar } from "components/layout";

export default function AddBio(props) {
  const fullname = "Athalla Ganteng";
  const value = "Pecinta kucing yang hobinya ngoding."
  return (
    <>
      <NavigationBar justifyContent="center" alignItems="center">
        <AppLogo width="150px" />
      </NavigationBar>
      <Box
        id="login-page"
        display="flex"
        width="100%"
        height="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          className="register-box"
          display="flex"
          alignItems="center"
          flexDirection="column"
          width="350px"
          py="15px"
          borderRadius="5px"
          background="#474F54"
          color="#FFF"
        >
          <Text fontSize="lg" mb="10px">
            {" "}
            Hi, {fullname} !
          </Text>
          <Text fontSize="xs" maxWidth="55%" textAlign="center" mb="20px">
            supaya orang kenal kamu siapa, tambahin bio kamu yuk!
          </Text>
          <Textarea maxWidth="85%" border="none" focusBorderColor="#FF5A5F" background="#576066">
            { value }
          </Textarea>

          <ButtonGroup py="10px" pt="25px">
            <Button
              name="submit"
              type="submit"
              variantColor="primary"
              variant="solid"
              size="md"
              textTransform="uppercase"
            >
              Simpan
            </Button>
          </ButtonGroup>

          <Link>
            <Text
              fontSize="xs"
              fontWeight="bold"
              letterSpacing="1px"
              color="primary.500"
              textDecoration="underline"
            >
              Batalkan
            </Text>
          </Link>
        </Box>
      </Box>
    </>
  );
}

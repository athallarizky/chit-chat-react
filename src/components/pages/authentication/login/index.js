import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginData } from "store/actions/auth-actions";
import {
  Box,
  Text,
  Input,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Spinner,
  Alert,
  AlertIcon,
} from "@chakra-ui/core";
import { useFormik } from "formik";
import { AppLogo, AuthPlaceholder } from "components/shared";
import { NavigationBar } from "components/layout";

export default function Login(props) {
  const dispatch = useDispatch();
  const currentState = useSelector((state) => state.auth);
  const [error, setError] = useState("");
  const formik = useFormik({
    initialValues: {
      usermail: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(loginData(values)).then((res) => {
        console.log("res", res);
        if (res.data.success) {
          props.history.push("/");
        } else {
          const { data } = res;
          setError(data.message);
        }
      });
    },
  });
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
          className="login-box"
          display="flex"
          alignItems="center"
          flexDirection="column"
          width="350px"
          py="15px"
          borderRadius="5px"
          background="#474F54"
          color="#FFF"
        >
          <Text
            paddingBottom="10px"
            borderBottom="3px solid #FF5A5F"
            fontSize="lg"
            marginBottom="25px"
          >
            Selamat Datang Kembali
          </Text>
          <FormControl width="90%" padding="2px 5px">
            <FormLabel htmlFor="email" color="primary">
              Email atau Username
            </FormLabel>
            <Input
              id="usermail"
              type="text"
              placeholder="Masukkan email atau username"
              size="md"
              py="20px"
              px="10px"
              mb="30px"
              border="1px solid #333"
              borderRadius="5px"
              onChange={formik.handleChange}
              value={formik.values.usermail}
              focusBorderColor="#333"
              color="black.80"
            />
            <FormLabel htmlFor="password" color="primary">
              Kata Sandi
            </FormLabel>
            <Input
              id="password"
              type="password"
              placeholder="Masukkan password"
              size="md"
              py="20px"
              px="10px"
              mb="30px"
              border="1px solid #333"
              borderRadius="5px"
              onChange={formik.handleChange}
              value={formik.values.password}
              focusBorderColor="#333"
              color="black.80"
            />
          </FormControl>

          {error !== "" ? (
            <Alert status="error" background="red" mx="15px" width="85%">
              <AlertIcon />
              {error}
            </Alert>
          ) : (
            ""
          )}

          <AuthPlaceholder />

          <ButtonGroup py="10px" pt="25px">
            <Button
              variantColor="primary"
              variant="solid"
              size="md"
              background="red.900"
              textTransform="uppercase"
              onClick={formik.handleSubmit}
              isDisabled={currentState.isLoading}
            >
              {currentState.isLoading ? <Spinner /> : "Login"}
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </>
  );
}

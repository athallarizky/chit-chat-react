import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerData } from "store/actions/auth-actions";
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

export default function Register(props) {
  const dispatch = useDispatch();
  const currentState = useSelector((state) => state.auth);
  const [error, setError] = useState("");
  const formik = useFormik({
    initialValues: {
      fullName: "",
      username: "",
      email: "",
      password: "",
      // photo: null,
    },
    onSubmit: (values) => {
      dispatch(registerData(values)).then((res) => {
        if (res.data.success) {
          props.history.push("/login");
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
        paddingTop="60px"
        id="register-page"
        display="flex"
        width="100%"
        height="100%"
        minHeight="100vh"
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
          <Text
            paddingBottom="10px"
            borderBottom="3px solid #FF5A5F"
            fontSize="lg"
            marginBottom="25px"
          >
            Selamat Bergabung
          </Text>

          <FormControl width="90%" padding="2px 5px">
            <FormLabel htmlFor="fullname" color="primary">
              Nama Lengkap
            </FormLabel>
            <Input
              name="fullName"
              type="text"
              placeholder="Masukkan nama lengkap"
              size="md"
              py="20px"
              px="10px"
              mb="30px"
              borderRadius="5px"
              color="black.80"
              onChange={formik.handleChange}
              value={formik.values.fullName}
              focusBorderColor="#333"
              isFullWidth
              isRequired
            />
            <FormLabel htmlFor="username" color="primary">
              Username
            </FormLabel>
            <Input
              name="username"
              type="username"
              placeholder="Masukkan username"
              size="md"
              py="20px"
              px="10px"
              mb="30px"
              borderRadius="5px"
              color="black.80"
              onChange={formik.handleChange}
              value={formik.values.username}
              focusBorderColor="#333"
              isFullWidth
              isRequired
            />
            <FormLabel htmlFor="email" color="primary">
              Alamat Email
            </FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="Masukkan alamat email"
              size="md"
              py="20px"
              px="10px"
              mb="30px"
              borderRadius="5px"
              color="black.80"
              onChange={formik.handleChange}
              value={formik.values.email}
              focusBorderColor="#333"
              isFullWidth
              isRequired
            />
            <FormLabel htmlFor="password" color="primary">
              Kata Sandi
            </FormLabel>
            <Input
              name="password"
              type="password"
              placeholder="Masukkan password"
              size="md"
              py="20px"
              px="10px"
              mb="30px"
              borderRadius="5px"
              color="black.80"
              onChange={formik.handleChange}
              value={formik.values.password}
              focusBorderColor="#333"
              isFullWidth
              isRequired
            />

            {/* <FormLabel htmlFor="photo" color="primary">
              Foto Profil
            </FormLabel>
            <Input
              name="file"
              type="file"
              placeholder="Upload Foto"
              size="md"
              py="20px"
              px="10px"
              mb="30px"
              borderRadius="5px"
              color="black.80"
              onChange={(event) => {formik.setFieldValue("photo", event.currentTarget.files[0])}}
              focusBorderColor="#333"
              isFullWidth
              isRequired
            /> */}
          </FormControl>

          {error !== "" ? (
            <Alert status="error" background="red" mx="15px">
              <AlertIcon />
              {error}
            </Alert>
          ) : (
            ""
          )}

          <AuthPlaceholder />
          <ButtonGroup py="10px" pt="25px">
            <Button
              name="submit"
              type="submit"
              variantColor="primary"
              variant="solid"
              size="md"
              background="red.900"
              textTransform="uppercase"
              onClick={formik.handleSubmit}
              isDisabled={currentState.isLoading}
            >
              {currentState.isLoading ? <Spinner /> : "Daftar"}
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </>
  );
}

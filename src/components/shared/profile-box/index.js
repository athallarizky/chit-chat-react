import React from "react";
import {useSelector} from 'react-redux'
import { Box, Image, Text, Divider, Stack } from "@chakra-ui/core";
import { IconButton, Icon } from "@chakra-ui/core";

export default function ProfileBox(props) {
  const userState = useSelector( (state) => state.auth)
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      py="25px"
      background="#474F54"
      color="#FFF"
      borderRadius="5px"
    >
      <Image
        borderRadius="full"
        size="100px"
        src={userState.photo}
        alt="Segun Datebayo"
        mb="15px"
      />
      <Text
        fontSize="lg"
        textTransform="uppercase"
        letterSpacing="1px"
        fontWeight="bold"
        mb="2px"
        textAlign="center"
      >
        {userState.fullname}
        {/* {nama} */}
      </Text>
      <Text fontSize="sm" letterSpacing="1px" color="grey">
        ( {userState.email}  )
        {/* ( {email} ) */}
      </Text>
      <Stack width="80%">
        <Divider orientation="horizontal" background="#FF5A5F" />
      </Stack>
      <Text fontSize="md" textAlign="center" mb="25px">
        {userState.bio}
      </Text>
      <Box
        width="100%"
        display="flex"
        justifyContent="flex-end"
        px="15px"
      >
        <IconButton
          variantColor="primary"
          aria-label="Search database"
          icon="settings"
        />
      </Box>
    </Box>
  );
}

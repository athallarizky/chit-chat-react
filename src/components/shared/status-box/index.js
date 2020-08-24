import React from "react";
import { useSelector } from "react-redux";
import { Box, Text, Image, Spinner } from "@chakra-ui/core";
import { DeleteStatus, EditStatus } from "components/shared";

export default function StatusBox(props) {
  const postDatas = props.postList;
  const currentState = useSelector((state) => state.auth);
  const isLoadPost = useSelector((state) => state.post.isLoadPost);

  if (isLoadPost) {
    return (
      <Box width="100%" display="flex" justifyContent="center">
        <Spinner color="#FFF" />
      </Box>
    );
  }

  return (
    <>
      {postDatas.map((postData, index) => (
        <Box
          key={index}
          width="100%"
          background="#576066"
          py="5px"
          px="15px"
          borderRadius="5px"
          color="#FFF"
          mb="15px"
        >
          <Text fontSize="xs" textAlign="right">
            {postData.createdAt}
          </Text>
          <Box display="flex" alignItems="flex-start">
            <Image
              borderRadius="5px"
              size="50px"
              src={postData.user.foto !== "-" ? postData.user.foto : "/koceng.jpg"}
              alt={`fotonya-${postData.user.username}`}
              mx="10px"
            />
            <Box
              mb="15px"
              borderLeft="0.5px solid #ACB6BD"
              px="10px"
              width="100%"
            >
              <Text
                fontSize="xl"
                mt="10px"
                bg="primary.500"
                px="10px"
                borderTopRightRadius="5px"
                borderBottomRightRadius="5px"
              >
                {postData.user.nama}
              </Text>
              <Text fontSize="md">{postData.text}</Text>
            </Box>
            <Box marginTop="10px">
              {currentState.username !== postData.user.username ? (
                ""
              ) : (
                <EditStatus statusData={postData} />
              )}
            </Box>
          </Box>
            <Box display="flex" justifyContent="center" mb="20px">

          {postData.gambar !== "-" ? (
            <Image
              borderRadius="5px"
              size="250px"
              src={postData.gambar}
              mx="10px"
              
            />
          ) : (
            ""
          )}
            </Box>
        </Box>
      ))}
    </>
  );
}

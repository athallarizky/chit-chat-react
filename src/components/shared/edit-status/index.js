import React, { useState, useRef } from "react";
import FocusLock from "react-focus-lock";
import {
  FormControl,
  Box,
  // TextInput,
  Stack,
  Button,
  ButtonGroup,
  Input,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  Textarea,
  Icon,
  Text,
  Image,
} from "@chakra-ui/core";

import { DeleteStatus, UpdateStatus } from "components/shared";

export default function EditStatus(props) {
  const { id_post, text, gambar } = props.statusData;
  const [isOpen, setIsOpen] = useState(false);
  const [newStatus, setNewStatus] = useState("");
//   const [newImage, setNewImage] = useState(gambar !== "-" ? gambar : "-");

  const fieldRef = useRef(null);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const handleChangeText = (event) => {
    setNewStatus(event.target.value);
  };

//   const handleChangeImage = (event) => {
//     setNewImage(event.currentTarget.files[0]);
//     console.log("event.currentTarget.files[0]", event.currentTarget.files[0]);
//   };

  return (
    <>
      <Popover
        isOpen={isOpen}
        initialFocusRef={fieldRef}
        onOpen={open}
        onClose={close}
        // placement={right}
        closeOnBlur={false}
        boxShadow="box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);"
      >
        <PopoverTrigger>
          <IconButton size="sm" icon="edit" bg="primary.500" />
        </PopoverTrigger>

        <PopoverContent zIndex={4} p={5} bg="#707C85" border="none">
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow bg="white" />
            <PopoverCloseButton />
            <Box spacing={4} py="10px">
              <FormControl mb="15px">
                <Textarea
                  label="statusText"
                  name="statusText"
                  defaultValue={text}
                  onChange={handleChangeText}
                  background="#474F54"
                ></Textarea>
              </FormControl>
              {gambar !== "-" ? (
                <Box
                  width="100%"
                  display="flex"
                  justifyContent="center"
                  mb="15px"
                >
                  <Image
                    borderRadius="5px"
                    size="150px"
                    src={gambar}
                    mx="10px"
                  />
                </Box>
              ) : (
                ""
              )}
              <ButtonGroup
                display="flex"
                justifyContent="space-between"
                width="100%"
              >
                <Box width="200px" display="inherit">
                  <DeleteStatus postId={id_post} />
                  {/* still error */}
                  {/* <div class="image-upload">
                    <label for="file-input">
                      <Icon
                        name="attachment"
                        size="40px"
                        color="#FFF !important"
                        className="icon-edit-upload"
                      />
                    </label>

                    <Input
                      id="file-input"
                      name="file"
                      type="file"
                      placeholder="Upload Foto"
                      onChange={(event) => {
                        handleChangeImage(event.currentTarget.files[0]);
                      }}
                    />
                  </div> */}
                </Box>
                <Box>
                  <Button variant="outline" onClick={close} mr="15px">
                    Cancel
                  </Button>
                  <UpdateStatus
                    newStatus={newStatus}
                    // newImage={newImage}
                    postId={id_post}
                  />
                </Box>
              </ButtonGroup>
            </Box>
          </FocusLock>
        </PopoverContent>
      </Popover>
    </>
  );
}

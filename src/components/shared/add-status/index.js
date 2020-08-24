import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import {
  IconButton,
  Button,
  ButtonGroup,
  Textarea,
  Spinner,
  Input,
  Icon,
  Box,
} from "@chakra-ui/core";
import { submitPost } from "store/actions/post-actions";
export default function AddStatus() {
  const currentState = useSelector((state) => state.post);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      statusText: "",
      statusImage: null,
    },
    onSubmit: (values) => {
      console.log('values', values)
      dispatch(submitPost(token, values))
        .then((res) => window.location.reload())
        .catch((err) => console.log("err.response", err.response));
    },
  });

  return (
    <>
      <Textarea
        id="statusText"
        name="statusText"
        placeholder="Apa yang sedang kamu pikirkan?"
        mb="10px"
        background="#474F54"
        border="none"
        color="#FFF"
        onChange={formik.handleChange}
        value={formik.values.statusText}
      ></Textarea>
      <ButtonGroup width="100%" display="flex" justifyContent="center">
        <div class="image-upload">
          <label for="file-input">
            <Icon
              name="attachment"
              size="40px"
              color="#FF5A5F !important"
              className="icon-upload"
            />
          </label>

          <Input
            id="file-input"
            name="file"
            type="file"
            placeholder="Upload Foto"
            onChange={(event) => {
              formik.setFieldValue("statusImage", event.currentTarget.files[0]);
            }}
          />
        </div>

        <Button
          name="submit"
          type="submit"
          variantColor="primary"
          variant="solid"
          size="md"
          textTransform="uppercase"
          isDisabled={currentState.isLoadSubmit}
          onClick={formik.handleSubmit}
        >
          {currentState.isLoadSubmit ? <Spinner /> : "Tambah Status"}
        </Button>
      </ButtonGroup>
    </>
  );
}

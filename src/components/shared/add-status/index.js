import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from "formik";
import { Button, ButtonGroup, Textarea, Spinner } from "@chakra-ui/core";
import {
  submitPost
} from 'store/actions/post-actions'
export default function AddStatus() {
  const currentState = useSelector( state => state.post)
  const token = useSelector(state=>state.auth.token)
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      statusText:"",
      statusImage:null
    },
    onSubmit: (values) => {
      dispatch(submitPost(token, values))
      .then(res => console.log('res', res))
      .catch(err => console.log('err.response', err.response))
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
      >

      </Textarea>
      <ButtonGroup width="100%" display="flex" justifyContent="center">
        <Button
          name="submit"
          type="submit"
          variantColor="primary"
          variant="solid"
          size="md"
          textTransform="uppercase"
          onClick={formik.handleSubmit}
        >
          {currentState.isLoadSubmit ? <Spinner/> : "Tambah Status"}
        </Button>
      </ButtonGroup>
    </>
  );
}

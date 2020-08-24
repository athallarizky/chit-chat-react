import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { ButtonGroup, Button } from "@chakra-ui/core";
import { updatePost } from 'store/actions/post-actions'

export default function UpdateStatus(props) {
    const { newStatus, newImage, postId } = props
    console.log('newImage', newImage)
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const isLoadUpdate = useSelector(state => state.post.isLoadUpdate)

    const updatePostData = () => {
        dispatch(updatePost(postId, auth.token, newStatus, newImage))
        .then(res => window.location.reload())
        .catch(err => console.log('err.response', err.response))
    }
  return (
    <ButtonGroup>
      <Button bg="primary.500" variant="solid" onClick={updatePostData} isLoading={isLoadUpdate}>
        Save
      </Button>
    </ButtonGroup>
  );
}

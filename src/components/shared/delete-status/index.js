import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ButtonGroup, Button, IconButton } from "@chakra-ui/core";
import { deleteStatus } from "store/actions/post-actions";

export default function DeleteStatus({ postId }) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const isDeleting = useSelector((state) => state.post.isDeleting);

  const deletePost = () => {
    dispatch(deleteStatus(auth.token, postId))
      .then((res) => window.location.reload())
      .catch((err) => console.log("err.response", err.response));
  };

  console.log("post_id", postId);
  return (
    <ButtonGroup>
      <IconButton
        icon="delete"
        variant="outline"
        onClick={deletePost}
        isLoading={isDeleting}
      />
    </ButtonGroup>
  );
}

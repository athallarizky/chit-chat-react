import React, { useState, useEffect, Component } from "react";
import { connect } from "react-redux";
import { fetchAllPosts } from "store/actions/post-actions";
// import { useDispatch, useSelector} from 'react-redux'
import { Box } from "@chakra-ui/core";
import {
  AppLogo,
  ProfileBox,
  AddStatus,
  StatusBox,
  LogoutButton,
} from "components/shared";
// import { fetchLoggedUser } from 'store/actions/auth-actions'
import { NavigationBar } from "components/layout";

class Home extends Component {
  async componentDidMount() {
    const posts = await this.props
      .fetchAllPosts()
      .then((res) => res.data)
      .catch((err) => err.response);
  }

  render() {
    const { posts } = this.props.post;
    return (
      <>
        <NavigationBar justifyContent="space-between" alignItems="center">
          <AppLogo width="150px" />
          <LogoutButton />
        </NavigationBar>
        <Box
          id="home-page"
          display="flex"
          width="100%"
          minHeight="100vh"
          height="100%"
          paddingTop="55px"
        >
          <Box id="left-panel" px="30px" py="15px" width="30%">
            <Box mb="15px">
              <ProfileBox />
            </Box>
            <AddStatus />
          </Box>
          <Box id="right-panel" px="30px" py="15px" pb="0px" width="50%">
            <Box
              background="#474F54"
              height="100%"
              px="15px"
              borderRadius="5px"
              py="25px"
            >
              <Box mb="15px" display="flex" flexDirection="column-reverse">
                <StatusBox postList={posts} />
              </Box>
            </Box>
          </Box>
        </Box>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  post: state.post,
});

export default connect(mapStateToProps, {
  fetchAllPosts,
})(Home);

import React from 'react'
import {
  useDispatch,
  useSelector
} from 'react-redux'
import {
    ButtonGroup,
    Button,
    Spinner
} from '@chakra-ui/core'
import { logoutUser } from 'store/actions/auth-actions'

export default function LogoutButton(props) {
  const dispatch = useDispatch()
  const currentState = useSelector( (state) => state.auth)
  console.log('currentState.isAuthenticated', currentState.isAuthenticated)
  const logout = async () => {
    await dispatch(logoutUser())
    window.location.reload()
  }
    return (
        <ButtonGroup>
          <Button
            name="logout"
            type="logout"
            variant="solid"
            variantColor="primary"
            size="md"
            background="#D93439"
            textTransform="uppercase"
            color="#FFF"
            onClick={logout}
          >
            {currentState.isLoading ? <Spinner /> : "Keluar"}
          </Button>
        </ButtonGroup>
    )
}

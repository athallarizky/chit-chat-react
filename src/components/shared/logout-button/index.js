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

export default function LogoutButton() {
  const dispatch = useDispatch()
  const currentState = useSelector( (state) => state.auth)
  const logout = () => {
    dispatch(logoutUser())
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

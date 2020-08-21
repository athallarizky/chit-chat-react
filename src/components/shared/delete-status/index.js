import React from 'react'
import {
    ButtonGroup,
    Button,
    IconButton
} from '@chakra-ui/core'

export default function DeleteStatus() {
    return (
        <ButtonGroup >
                <IconButton aria-label="Search database" icon="delete" variantColor="primary"/>
        </ButtonGroup>
    )
}

import { Button, IconButton, useColorMode } from '@chakra-ui/react';
import React from 'react'
import { Icon } from '@chakra-ui/react'
import {MoonIcon,SunIcon} from '@chakra-ui/icons'

const Icons = ({name}) => {
    // console.log(name)
const { colorMode, toggleColorMode } = useColorMode()
  switch (name) {
    case "MoonIcon":
       return <Button onClick={toggleColorMode}>
        {colorMode === 'light' ?  <Icon as={SunIcon}> </Icon> : <Icon as={MoonIcon}></Icon>}
       
        
         </Button>
        
    
  
    default:
        break;
  }


 
}

export default Icons
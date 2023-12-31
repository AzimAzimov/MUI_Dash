import { Box, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { Context, FC, createContext } from 'react'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export type ThemeToggleButtonProps = {
  ColorModeContext: Context<{ toggleColorMode: () => void }>
}

const ThemeToggleButton = (props:ThemeToggleButtonProps) => {
  const mobileCheck = useMediaQuery('(min-width: 500px)')
  const { ColorModeContext = createContext({toggleColorMode: () => {} })} = props
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  
  return (
    <>
    {mobileCheck && (
      <Typography>{theme.palette.mode}</Typography>
    )}
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </>
  )
}

export default ThemeToggleButton
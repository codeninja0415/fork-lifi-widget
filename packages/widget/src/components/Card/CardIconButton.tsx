import { IconButton as MuiIconButton } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

export const CardIconButton = styled(MuiIconButton)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.common.black
      : theme.palette.common.white;
  return {
    backgroundColor: alpha(backgroundColor, 0.04),
    '&:hover': {
      backgroundColor: alpha(backgroundColor, 0.08),
    },
  };
});
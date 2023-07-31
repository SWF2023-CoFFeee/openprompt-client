import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  InputAdornment,
  Icon,
  IconButton,
} from '@mui/material';

import {
  LockOutlined,
  PersonOutline,
  VisibilityOff,
  Visibility,
} from '@mui/icons-material';
import { useContext } from 'react';
import { useState } from 'react';
import { useInputs } from '@/lib/hooks/useInputs';
import { UserContext } from '@/lib/contexts/UserContextProvider';
import theme from '@/styles/mui/theme';
import palette from '@/styles/mui/palette';
import { TAuthStep } from '.';

export interface ISigninSectionProps {
  onSwitchAuthStep: (key: TAuthStep) => void;
}

const SigninSection = ({ onSwitchAuthStep }: ISigninSectionProps) => {
  const [isMaskingPassword, setIsMaskingPassword] = useState(false);
  const onToggleIsMaskingPassword = () => {
    setIsMaskingPassword(!isMaskingPassword);
  };
  const { isLogin, setIsLogin } = useContext(UserContext);

  const [signinFormData, onChangeSigninFormData, onInitSigninFormData] =
    useInputs<{
      id: string;
      password: string;
    }>({ id: '', password: '' });

  const onSubmitSigninFormData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSwitchAuthStep('Connect Wallet');
    return null;
  };

  return (
    <Box sx={{ width: '429px' }}>
      <Typography variant="body2" textAlign="center" sx={{ mb: '44px' }}>
        If you don’t have an account register <br />
        You can{' '}
        <Typography
          component="span"
          variant="body2"
          color="primary"
          onClick={() => onSwitchAuthStep('Sign up')}
          sx={{
            display: 'inline-block',
            cursor: 'pointer',
            fontWeight: 'bold',
            '&: hover': { textDecoration: 'underline' },
          }}
        >
          Register here!
        </Typography>
      </Typography>
      <form onSubmit={onSubmitSigninFormData}>
        <Stack gap="40px" sx={{ width: '100%' }}>
          <TextField
            color="primary"
            label="Username"
            placeholder="Enter your Username"
            type="text"
            variant="standard"
            name="id"
            value={signinFormData.id}
            onChange={onChangeSigninFormData}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon style={{ color: palette.white }}>
                    <PersonOutline />
                  </Icon>
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiFormLabel-root': {
                fontWeight: '500',
                fontSize: '14px',
              },
              '& .MuiInput-underline:before': {
                borderBottom: `2px solid ${palette.white}`,
              },
              '& .MuiInput-underline:after': {
                borderBottom: `2px solid ${palette.white}`,
              },
              '& .MuiInput-underline.Mui-focused:after': {
                borderBottom: `2px solid ${palette.primary.main}`,
              },
              '& .MuiInput-underline:hover:before': {
                borderBottom: `2px solid ${palette.white}`,
              },
            }}
          />
          <TextField
            color="primary"
            label="Password"
            placeholder="Enter your Password"
            type={isMaskingPassword ? 'text' : 'password'}
            variant="standard"
            name="password"
            value={signinFormData.password}
            onChange={onChangeSigninFormData}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon style={{ color: palette.white }}>
                    <LockOutlined />
                  </Icon>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    style={{ color: palette.white }}
                    onClick={onToggleIsMaskingPassword}
                  >
                    {isMaskingPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiFormLabel-root': {
                fontWeight: '500',
                fontSize: '14px',
                color: palette.white,
              },
              '& .MuiInput-underline:before': {
                borderBottom: `2px solid ${palette.white}`,
              },
              '& .MuiInput-underline:after': {
                borderBottom: `2px solid ${palette.white}`,
              },
              '& .MuiInput-underline.Mui-focused:after': {
                borderBottom: `2px solid ${palette.primary.main}`,
              },
              '& .MuiInput-underline:hover:before': {
                borderBottom: `2px solid ${palette.white}`,
              },
            }}
          />
          <Button
            variant="rounded"
            type="submit"
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.black.main,
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
          >
            Login
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default SigninSection;

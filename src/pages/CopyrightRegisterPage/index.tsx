import {
  Box,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  TextareaAutosize,
  Radio,
  FormControlLabel,
  RadioGroup,
  FormControl,
  Button,
  Icon,
} from '@mui/material';
import { WarningAmber } from '@mui/icons-material';
import Template from '@/components/common/CustomUI/template';
import palette from '@/styles/mui/palette';
import theme from '@/styles/mui/theme';
const CopyrightRegisterPage = () => {
  return (
    <Template>
      <Box sx={{ textAlign: 'center', mb: '67px' }}>
        <Typography
          variant="h3"
          sx={{ color: palette.grey[400], marginBottom: '30px' }}
        >
          Copyright register
        </Typography>
      </Box>
      <form>
        <Stack
          gap="24px"
          sx={{
            width: '416px',
            mb: '40px',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Typography variant="body5">Prompt</Typography>
            <Box
              component={TextareaAutosize}
              name="Outlined"
              placeholder="Type in here…"
              minRows={5}
              sx={{
                border: 'none',
                width: '100%',
                backgroundColor: 'transparent',
                outline: '1px solid #FFF',
                borderRadius: '8px',
                padding: '12px 16px',
                fontSize: '16px',
                fontFamily: 'Noto Sans',
                color: palette.white,
                '&:focus': {
                  outline: `2px solid ${palette.primary.main}`,
                },
              }}
            />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Typography variant="body5">Current Account</Typography>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Box sx={{ paddingLeft: '10px', marginTop: '6px' }}>
                      <img
                        src="/imgs/meta-logo.png"
                        width="24"
                        height="24"
                        alt="Ethereum Logo"
                      />
                    </Box>
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              disabled
              value={'0X13'}
              sx={{
                '&:hover': {
                  border: 'none',
                },
              }}
            />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Typography variant="body5">AI Model</Typography>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="Midjourney"
                  label="Midjourney"
                  control={
                    <Radio
                      sx={{
                        color: 'grey',
                        '&$checked + .MuiFormControlLabel-label': {
                          color: 'white',
                        },
                      }}
                    />
                  }
                  sx={{
                    '.MuiTypography-body1': {
                      color: 'grey',
                    },
                  }}
                />
                <FormControlLabel
                  value="DALL-E"
                  label="DALL-E"
                  control={
                    <Radio
                      sx={{
                        color: 'grey',
                        '&$checked + .MuiFormControlLabel-label': {
                          color: 'white',
                        },
                      }}
                    />
                  }
                  sx={{
                    '.MuiTypography-body1': {
                      color: 'grey',
                    },
                  }}
                />
                <FormControlLabel
                  value="Stable Diffusion"
                  label="Stable Diffusion"
                  control={
                    <Radio
                      sx={{
                        color: 'grey',
                        '&$checked + .MuiFormControlLabel-label': {
                          color: 'white',
                        },
                      }}
                    />
                  }
                  sx={{
                    '.MuiTypography-body1': {
                      color: 'grey',
                    },
                  }}
                />
              </RadioGroup>
            </FormControl>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Typography variant="body5">Copyright Name</Typography>
              <TextField variant="outlined" value={'0X13'} />
            </Box>
          </Box>
        </Stack>
        <Button
          variant="rounded"
          type="submit"
          sx={{
            width: '100%',
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.black.main,
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
            },
          }}
        >
          Register
        </Button>
      </form>

      <Box
        sx={{
          border: '1px solid #E74A3B',
          backgroundColor: 'rgba(231, 74, 59, 0.15)',
          color: palette.white,
          padding: '16px',
          borderRadius: '4px',
          mt: '56px',
          width: '416px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '16px',
            alignItems: 'center',
          }}
        >
          <Icon style={{ color: '#E74A3B' }}>
            <WarningAmber />
          </Icon>
          <Typography variant="body2">Registration not possible.</Typography>
        </Box>
        <Typography variant="body1" sx={{ ml: '37px' }}>
          There is a prompt with 60% similarity to the purchased ticket, and
          registration is not possible.
        </Typography>
      </Box>
    </Template>
  );
};

export default CopyrightRegisterPage;

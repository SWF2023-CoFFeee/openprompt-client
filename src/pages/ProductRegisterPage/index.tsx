import { ChangeEvent, useState } from 'react';
import {
  Box,
  Container,
  InputAdornment,
  TextField,
  Typography,
  TextareaAutosize,
  Button,
} from '@mui/material';
import styled from '@emotion/styled';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Template from '@/components/common/CustomUI/template';
import palette from '@/styles/mui/palette';
import ImageBox from './ImageBox';
import DropdownSelectMenu from './DropdownSelectMenu';

const MetaIcon = () => {
  return (
    <img src="/imgs/meta-logo.png" width="24" height="24" alt="Ethereum Logo" />
  );
};

const ProductRegisterPage = () => {
  const [selectedColor, setSelectedColor] = useState<string>('');

  const handleColorChange = (event: ChangeEvent<{ value: unknown }>) => {
    setSelectedColor(event.target.value as string);
  };

  return (
    <Template>
      <Typography
        variant="h3"
        sx={{ color: palette.grey[400], marginBottom: '30px' }}
      >
        Register for sale
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'row',
            height: '669px',
            gap: '24px',
          }}
        >
          {/* Left */}
          <Box
            sx={{
              width: '503px',
              height: '100%',
              paddingLeft: '40px',
              paddingRight: '40px',
            }}
          >
            {/* Register Type : radioButton*/}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <Typography variant="body5">Register Type</Typography>
              <RowRadioButtonsGroup />
            </Box>
            {/* Current Account: disabled TextFied */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginTop: '24px',
              }}
            >
              <Typography variant="body5">Current Account</Typography>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Box sx={{ paddingLeft: '10px', marginTop: '6px' }}>
                        <MetaIcon />
                      </Box>
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                disabled
                value={'0X13'}
              />
            </Box>
            {/* Image: ImageBox */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '24px',
                gap: '10px',
              }}
            >
              <Typography variant="body5">Image</Typography>
              <ImageBox />
            </Box>
          </Box>
          {/* Right */}
          <Box
            sx={{
              width: '503px',
              height: '100%',
              paddingLeft: '40px',
              paddingRight: '40px',
              // backgroundColor: 'red',
            }}
          >
            {/* Name: TextField */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <Typography variant="body5">Name</Typography>
              <TextField variant="outlined" placeholder="text" />
            </Box>
            {/* Price: TextField */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginTop: '24px',
              }}
            >
              <Typography variant="body5">Price</Typography>
              <TextField variant="outlined" placeholder="text" />
            </Box>
            {/* Description: TextField */}
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  marginTop: '24px',
                }}
              >
                <Typography variant="body5">Description</Typography>
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
            </Box>
            {/* Select Copyright : DropDown Menu */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginTop: '24px',
              }}
            >
              <Typography variant="body5">Select Copyright</Typography>
              <DropdownSelectMenu
                label="Please select one copyright to sell."
                options={[
                  { value: 'red', label: '빨강' },
                  { value: 'blue', label: '파랑' },
                  { value: 'green', label: '초록' },
                ]}
                selectedValue={selectedColor}
                onChange={setSelectedColor}
              />
            </Box>
            <Button
              variant="rounded"
              sx={{
                width: '400px',
                backgroundColor: palette.primary.main,
                color: palette.black.main,
                marginTop: '64px',
              }}
            >
              {`Register`}
            </Button>
          </Box>
        </Container>
      </Box>
    </Template>
  );
};

export default ProductRegisterPage;

const StyledRadio = styled(Radio)`
  color: grey;
  &.Mui-checked + .MuiFormControlLabel-label {
    color: white;
  }
`;

const StyledFormControlLabel = styled(FormControlLabel)`
  .MuiTypography-body1 {
    color: grey;
  }
`;

const RowRadioButtonsGroup = () => {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <StyledFormControlLabel
          value="ticket"
          label="Ticket"
          control={<StyledRadio />}
        />
        <StyledFormControlLabel
          value="copyright"
          label="Copyright"
          control={<StyledRadio />}
        />
      </RadioGroup>
    </FormControl>
  );
};

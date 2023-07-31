import {
  Box,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import styled from '@emotion/styled';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import Template from '@/components/common/CustomUI/template';
import palette from '@/styles/mui/palette';

const MetaIcon = () => {
  return (
    <img src="/imgs/meta-logo.png" width="24" height="24" alt="Ethereum Logo" />
  );
};

const ProductRegisterPage = () => {
  return (
    <Template>
      <Typography
        variant="h3"
        sx={{ color: palette.grey[400], marginBottom: '30px' }}
      >
        Register for sale
      </Typography>
      <Box sx={{ width: '90%' }}>
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
              backgroundColor: 'red',
              paddingLeft: '40px',
              paddingRight: '40px',
            }}
          >
            {/* Register Type : radioButton*/}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Typography variant="body5">Register Type</Typography>
              <RowRadioButtonsGroup />
            </Box>
            {/* Current Account: disabled TextFied */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
                sx={{
                  // hover border 컬러 제거
                  '&:hover': {
                    border: 'none',
                  },
                }}
                // icon={<EthereumIcon />}
              />
            </Box>
            {/* Image: ImageBox */}
            <Box>
              <Typography variant="body5">Image</Typography>
            </Box>
          </Box>
          {/* Right */}
          <Box sx={{ width: '503px', height: '100%', backgroundColor: 'red' }}>
            {/* Name: TextField */}
            <Box>
              <Typography variant="body5">Name</Typography>
            </Box>
            {/* Price: TextField */}
            <Box>
              <Typography variant="body5">Price</Typography>
            </Box>
            {/* Description: TextField */}
            <Box>
              <Typography variant="body5">Description</Typography>
            </Box>
            {/* Select Copyright : DropDown Menu */}
            <Box>
              <Typography variant="body5">Select Copyright</Typography>
            </Box>
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

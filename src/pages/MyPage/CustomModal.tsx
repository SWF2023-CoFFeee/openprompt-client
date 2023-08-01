import React from 'react';
import { styled } from '@mui/material/styles';
import { Modal, Box, Typography, Button } from '@mui/material';

// Emotion으로 스타일을 적용한 컴포넌트 생성
const BackdropFilter = styled('div')({
  backdropFilter: 'blur(8px)', // backdropFilter 속성을 사용하여 블러 처리
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  zIndex: 0, // Modal의 뒤에 배경이 보이도록 zIndex 설정
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  maxWidth: 1100,
  height: 700,
  bgcolor: '#050C1A',
  border: '1px solid #000',
  boxShadow: 24,

  paddingTop: '45px',
  paddingBottom: '45px',
  paddingLeft: '60px',
  paddingRight: '60px',
  color: 'white',
  fontFamily: 'Roboto', // 이거 바꿔야 함 !!! 에러 방지용
};

const CustomModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <BackdropFilter onClick={handleClose} />
          <Box sx={style}>
            <Box sx={{ display: 'flex', width: '100%', height: '100%' }}>
              <Box
                sx={{
                  border: '1px solid red',
                  display: 'flex',
                  flex: '1.1',
                  flexDirection: 'column',
                  width: '100%',
                  height: '100%',
                }}
              >
                <Box sx={{ border: '1px solid red', flex: '0.9' }}>Image</Box>
                <Box
                  sx={{
                    border: '1px solid red',
                    flex: '0.1',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '40px',
                  }}
                >
                  <Box sx={{ border: '1px solid red' }}>Stable Diffusion</Box>
                  <Box sx={{ border: '1px solid red' }}>Username</Box>
                </Box>
              </Box>
              <Box
                sx={{
                  border: '1px solid red',
                  flex: '0.9',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  height: '100%',
                }}
              >
                <Box sx={{ border: '1px solid red', flex: '0.1' }}>Xbox</Box>
                <Box sx={{ border: '1px solid red', flex: '0.80' }}>
                  description
                </Box>
                <Box sx={{ border: '1px solid red', flex: '0.1' }}>Buttons</Box>
              </Box>
              <Box sx={{ border: '1px solid red' }}></Box>
            </Box>
          </Box>
        </>
      </Modal>
    </div>
  );
};

export default CustomModal;

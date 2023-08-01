import { Button, Box, Typography, Stack, Icon } from '@mui/material';
import Lottie from 'react-lottie';
import { CheckCircleOutline } from '@mui/icons-material';
import Template from '@/components/common/CustomUI/template';
import palette from '@/styles/mui/palette';
import failLottie from './openprompt_fail.json';

const SimilarityFailurePage = () => {
  return (
    <Template>
      <LottieComponent />
    </Template>
  );
};

export default SimilarityFailurePage;

const LottieComponent: React.FC<any> = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: failLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const mocks = [
    {
      copyright_name: 'A) American Barbizon School_Satori Canton',
      similarity: 0.85,
      validate: false,
    },
    {
      copyright_name: 'B) American Barbizon School_Satori Canton',
      similarity: 0.65,
      validate: false,
    },
    {
      copyright_name: 'C) American Barbizon School_Satori Canton',
      similarity: 0.2,
      validate: true,
    },
  ];

  return (
    <Box>
      <Lottie options={defaultOptions} height={240} width={240} />
      <Box sx={{ marginTop: '40px' }}>
        <Typography variant="h3" sx={{ marginBottom: '40px' }}>
          Similar copyright exists!
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            marginBottom: '24px',
          }}
        >
          <Typography variant="body5">Similarity List</Typography>
          {mocks.map((mock, index) => {
            const { copyright_name, similarity, validate } = mock;

            if (validate) {
              return (
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  key={index}
                  gap="8px"
                  sx={{
                    minHeight: '48px',
                    width: '100%',
                    borderRadius: '8px',
                    border: '1px solid #777',
                    padding: '12px 12px 12px 16px',
                  }}
                >
                  <Typography
                    variant="body1"
                    color="#777"
                    sx={{
                      maxWidth: '300px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {copyright_name}
                  </Typography>
                  <Icon style={{ color: '#777' }}>
                    <CheckCircleOutline />
                  </Icon>
                </Stack>
              );
            }

            return (
              <Stack
                key={index}
                gap="8px"
                sx={{
                  minHeight: '48px',
                  width: '100%',
                  borderRadius: '8px',
                  border: '1px solid #E74A3B',
                  padding: '12px 12px 12px 16px',
                }}
              >
                <Typography variant="body1">{copyright_name}</Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ position: 'relative' }}
                >
                  <Typography variant="body5">Similarity</Typography>
                  <Typography
                    variant="body5"
                    sx={{
                      position: 'absolute',
                      bottom: '-0.8px',
                      left: `${similarity * 93}%`,
                      color: '#E74A3B',
                    }}
                  >{`${similarity * 100}%`}</Typography>
                  <Typography variant="body5" color="rgba(255, 255, 255, 0.30)">
                    100%
                  </Typography>
                </Stack>
                <Box
                  sx={{
                    width: '100%',
                    height: '3px',
                    backgroundColor: 'rgba(255, 255, 255, 0.30)',
                  }}
                >
                  <Box
                    sx={{
                      width: `${similarity * 100}%`,
                      height: '100%',
                      backgroundColor: '#E74A3B',
                    }}
                  ></Box>
                </Box>
              </Stack>
            );
          })}
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            gap: '40px',
            marginTop: '40px',
            justifyContent: 'space-between',
          }}
        >
          <Button
            variant="rounded"
            sx={{
              width: '50%',
              backgroundColor: palette.grey[300],
              color: palette.black.main,
              '&:hover': {
                backgroundColor: palette.grey[400],
              },
            }}
          >
            Back
          </Button>
          <Button sx={{ width: '50%' }} variant="roundedOutlined">
            MyPage
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

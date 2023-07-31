import { Typography, Box, Container } from '@mui/material';
import { useState, useRef } from 'react';
import Template from '@/components/common/CustomUI/template';
import CustomTabs, {
  ContentType,
} from '@/components/common/CustomUI/tabs/CustomTabs';

import {
  ContentDonateHistory,
  ContentOwnNFT,
  ContentPersonalInfo,
} from './Contents';

const MyPage = () => {
  const [content, setContent] = useState<ContentType>('donationHistory');
  const [showContent, setShowContent] = useState(true);

  type ContentData = {
    // eslint-disable-next-line no-unused-vars
    [key in ContentType]: {
      label: string;
      component: JSX.Element;
    };
  };

  const contentsData: ContentData = {
    donationHistory: {
      label: '기부 이력',
      component: <ContentDonateHistory />,
    },
    NFT: {
      label: 'NFT',
      component: <ContentOwnNFT />,
    },
    personalInfo: {
      label: '개인정보',
      component: <ContentPersonalInfo />,
    },
  };

  const refs: Record<ContentType, React.RefObject<HTMLButtonElement>> = {
    donationHistory: useRef(null),
    NFT: useRef(null),
    personalInfo: useRef(null),
  };

  const handleChangeContent = (value: ContentType) => {
    setShowContent(false);
    setTimeout(() => {
      setContent(value);
      setShowContent(true);
    }, 150);
  };

  return (
    <Template variant="animation" withBackButton>
      <Typography variant="subtitle1" color="primary" sx={{ marginY: '10px' }}>
        마이페이지
      </Typography>
      <Typography color="white" variant="h2" sx={{ marginBottom: '10px' }}>
        나의 기부 이력
      </Typography>
      <Box sx={{ marginY: '10px' }}>
        <CustomTabs
          buttons={Object.keys(contentsData).map((value) => ({
            value,
            label: contentsData[value].label,
          }))}
          refs={refs}
          selectedValue={content}
          onChange={handleChangeContent}
        />
      </Box>
      <Container
        maxWidth="md"
        sx={{
          paddingTop: '20px',
          minHeight: '500px',
          width: '100%',
        }}
      >
        <Box
          sx={{
            opacity: showContent ? 1 : 0,
            transition: 'opacity 150ms ease-in-out',
          }}
        >
          {contentsData[content].component}
        </Box>
      </Container>
    </Template>
  );
};

export default MyPage;

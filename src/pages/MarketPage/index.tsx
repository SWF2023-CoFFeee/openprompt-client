import React, { useState, useRef } from 'react';
import { Typography, Box, Container, Button, Checkbox } from '@mui/material';
import Template from '@/components/common/CustomUI/template';
import { ContentType } from '@/components/common/CustomUI/tabs/CustomTabs';
import {
  mockRightsOfUsageProductData,
  mockCopyrightProductData,
} from '../../mocks/mockData';
import CustomTabs from '../../components/common/CustomUI/tabs/CustomTabs';
import { ContentTicket, ContentCopyRight } from './Contents';

type ButtonVariantType =
  | 'text'
  | 'outlined'
  | 'contained'
  | 'rounded'
  | 'roundedOutlined'
  | 'transparent'
  | 'transparentLight';

type ButtonColorType = 'default' | 'primary' | 'black';

type CheckedState = {
  All: boolean;
  Midjourney: boolean;
  DALL_E: boolean;
  StableDiffusion: boolean;
};

const MarketPage = () => {
  const [buttonVariant, setButtonVariant] = useState<ButtonVariantType>('text');
  const [buttonColor, setButtonColor] = useState<ButtonColorType>('default');
  const [content, setContent] = useState<ContentType>('License');
  const [showContent, setShowContent] = useState(true);
  const [isChecked, setIsChecked] = useState<CheckedState>({
    All: true,
    Midjourney: true,
    DALL_E: true,
    StableDiffusion: true,
  });

  const handleButtonClick = (
    variant: ButtonVariantType,
    color: ButtonColorType = 'default',
  ) => {
    setButtonVariant(variant);
    setButtonColor(color);
  };

  type ContentData = {
    // eslint-disable-next-line no-unused-vars
    [key in ContentType]: {
      label: string;
      component: JSX.Element;
    };
  };

  const contentsData: ContentData = {
    License: {
      label: 'Ticket',
      component: (
        <ContentTicket products={mockRightsOfUsageProductData.productsList} />
      ),
    },
    CopyRight: {
      label: 'CopyRight',
      component: (
        <ContentCopyRight products={mockCopyrightProductData.productsList} />
      ),
    },
  };

  const handleChangeContent = (value: ContentType) => {
    setShowContent(false);
    setTimeout(() => {
      setContent(value);
      setShowContent(true);
    }, 150);
  };

  const refs: Record<ContentType, React.RefObject<HTMLButtonElement>> = {
    License: useRef(null),
    CopyRight: useRef(null),
  };

  const handleCheckboxChange = (name: keyof CheckedState) => {
    setIsChecked({
      ...isChecked,
      [name]: !isChecked[name],
    });
  };

  return (
    <Template>
      <Box
        sx={{
          marginBottom: '10px',
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%',
        }}
      >
        <Button
          sx={{ color: '#AEFF29' }}
          onClick={() => handleButtonClick('roundedOutlined')}
          variant="roundedOutlined"
        >
          Register
        </Button>
      </Box>
      <Typography variant="h3">Market</Typography>
      <br />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            // Box의 너비 설정 (필요에 따라 조정)
          }}
        >
          <CustomTabs
            buttons={Object.keys(contentsData).map((value) => ({
              value,
              label: contentsData[value].label,
            }))}
            gap="20px"
            refs={refs}
            selectedValue={content}
            onChange={handleChangeContent}
          />
          <Box
            sx={{
              display: 'flex', // 요소들을 가로로 배치하기 위해 flex 사용
              justifyContent: 'space-between', // 요소들을 양 끝으로 정렬
              width: '100%', // Box의 너비 설정 (필요에 따라 조정)
            }}
          >
            <Typography
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              AI Model
            </Typography>
            <Box
              sx={{
                display: 'flex', // 요소들을 가로로 배치하기 위해 flex 사용
                justifyContent: 'space-between', // 요소들을 양 끝으로 정렬
                width: '85%', // Box의 너비 설정 (필요에 따라 조정)
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Checkbox
                  checked={isChecked.All}
                  onChange={() => handleCheckboxChange('All')}
                  style={{
                    color: isChecked.All === true ? '#AEFF29' : '#FFFFFF',
                  }}
                />
                <Typography variant="body1">All</Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Checkbox
                  checked={isChecked.Midjourney}
                  onChange={() => handleCheckboxChange('Midjourney')}
                  style={{
                    color:
                      isChecked.Midjourney === true ? '#AEFF29' : '#FFFFFF',
                  }}
                />
                <Typography variant="body1">Midjourney</Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Checkbox
                  checked={isChecked.DALL_E}
                  onChange={() => handleCheckboxChange('DALL_E')}
                  style={{
                    color: isChecked.DALL_E === true ? '#AEFF29' : '#FFFFFF',
                  }}
                />
                <Typography variant="body1">DALL-E</Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Checkbox
                  checked={isChecked.StableDiffusion}
                  onChange={() => handleCheckboxChange('StableDiffusion')}
                  style={{
                    color:
                      isChecked.StableDiffusion === true
                        ? '#AEFF29'
                        : '#FFFFFF',
                  }}
                />
                <Typography variant="body1">Stable Diffusion</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ marginY: '10px' }}></Box>
        <Container
          sx={{
            minHeight: '500px',
            width: '100%',
            m: '0px',
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
      </Box>
    </Template>
  );
};

export default MarketPage;

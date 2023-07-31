import { ReactNode } from 'react';
import { Box, Container } from '@mui/material';
import { Background } from '@/components/common/CustomUI/background';

import { CustomBackButton } from '@/components/common/CustomUI/button/CustomBackButton';

import { TBackgroundVariant, TBackgroundColor } from '../background/types';

interface TemplateProps {
  children: ReactNode;
  variant?: TBackgroundVariant; // default는 'basic'으로 설정
  bgcolor?: TBackgroundColor;
  withBackButton?: boolean;
}

const Template: React.FC<TemplateProps> = ({
  children,
  variant = 'basic',
  bgcolor,
  withBackButton = false,
}) => {
  return (
    <Background variant={variant} color={bgcolor}>
      <Container>
        {withBackButton && (
          <Box sx={{ marginBottom: '10px' }}>
            <CustomBackButton variant="outlined" />
          </Box>
        )}
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {children}
        </Container>
      </Container>
    </Background>
  );
};

export default Template;

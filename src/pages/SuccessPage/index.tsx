import {
  Button,
  Box,
  Typography,
  TextField,
  TextareaAutosize,
} from '@mui/material';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Lottie from 'react-lottie';
import palette from '@/styles/mui/palette';
import Template from '@/components/common/CustomUI/template';
import RouterMeta from '@/lib/RouterMeta';
import successLottie from './openprompt_success.json';

export const SUCCESS_TYPE = ['copyright_regist', 'copyright_buy', 'ticket_buy'];
type TransActionVariant = 'copyright_regist' | 'copyright_buy' | 'ticket_buy';

const SuccessPage: React.FC<SuccessPageProps> = () => {
  const { successtype } = useParams();
  const { state } = useLocation();

  return (
    <Template>
      <LottieComponent variant={successtype} state={state} />
    </Template>
  );
};

export default SuccessPage;

interface SuccessPageProps {
  variant: TransActionVariant;
  state: any;
}

const LottieComponent: React.FC<any> = ({ variant, state }) => {
  const navigate = useNavigate();
  let successType = '';
  switch (variant) {
    case 'copyright_regist':
      successType = 'Copyright registration complete!';
      break;
    case 'copyright_buy':
      successType = 'Copyright purchase complete!';
      break;
    case 'ticket_buy':
      successType = 'Ticket purchase complete!';
      break;
  }

  const data_copyright_name = '';
  const data_prompt = '';

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: successLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Box>
      <Lottie options={defaultOptions} height={240} width={240} />
      <Box sx={{ marginTop: '40px', width: '416px' }}>
        <Typography
          variant="h3"
          sx={{ marginBottom: '80px' }}
          textAlign="center"
        >
          {successType}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            marginBottom: '24px',
          }}
        >
          <Typography variant="body5">Copyright Name</Typography>
          <Box
            sx={{
              padding: '12px 12px 12px 16px',
              borderRadius: '8px',
              border: '1px solid #AEFF29',
              color: '#FFF',
            }}
          >
            <Typography variant="body1">
              American Barbizon School_Satori Canton
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Typography variant="body5">Prompt</Typography>
          <Box
            sx={{
              padding: '12px 12px 12px 16px',
              borderRadius: '8px',
              border: '1px solid #AEFF29',
              color: '#FFF',
            }}
          >
            <Typography variant="body1">
              Close up of a forest drwaing on white paper laying on a oak wooden
              table with color pencils and coffee on it, shot from above in
              natural sunlight. The style is hyper - realistic, with a high
              level of detail in the texture.
            </Typography>
          </Box>
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
            onClick={() => {
              navigate(RouterMeta.MarketPage.path);
            }}
            sx={{
              width: '50%',
              backgroundColor: palette.grey[300],
              color: palette.black.main,
              //hover 색상 조금 더 진하게
              '&:hover': {
                backgroundColor: palette.grey[400],
              },
            }}
          >
            Market
          </Button>
          <Button
            sx={{ width: '50%' }}
            variant="roundedOutlined"
            onClick={() => {
              navigate(RouterMeta.MyPage.path);
            }}
          >
            MyPage
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

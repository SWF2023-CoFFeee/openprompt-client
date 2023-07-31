import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import CustomCardOutlinedGradient from '@/components/common/CustomUI/card/CustomCardOutlinedGradient';
import CustomCardOutlinedRounded from '@/components/common/CustomUI/card/CustomCardOutlinedRounded';
import palette from '@/styles/mui/palette';

const ContentDonateHistory = () => {
  return (
    <Container
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
      }}
    >
      <CustomCardOutlinedRounded sx={{ height: '130px' }} />
      <CustomCardOutlinedRounded sx={{ height: '130px' }} />
      <CustomCardOutlinedRounded sx={{ height: '130px' }} />
      <CustomCardOutlinedRounded sx={{ height: '130px' }} />
    </Container>
  );
};

const ContentOwnNFT = () => {
  return (
    <Container
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
      }}
    >
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6} md={4}>
          <CardExample />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardExample />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardExample />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardExample />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardExample />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardExample />
        </Grid>
      </Grid>
    </Container>
  );
};

const ContentPersonalInfo = () => {
  return (
    <Container
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
      }}
    >
      <CustomCardOutlinedGradient sx={{ height: '150px' }} />
      <CustomCardOutlinedGradient sx={{ height: '150px' }} />
      <CustomCardOutlinedGradient sx={{ height: '150px' }} />
      <CustomCardOutlinedGradient sx={{ height: '150px' }} />
    </Container>
  );
};

export { ContentDonateHistory, ContentOwnNFT, ContentPersonalInfo };

const CardExample = () => {
  return (
    <Card
      sx={{
        minWidth: '100px',
        maxWidth: '220px',
        borderRadius: '0.8rem',
        border: `solid 1px ${palette.grey[400]}`,
      }}
    >
      <CardActionArea>
        <Box sx={{ padding: '12px' }}>
          <CardMedia
            component="img"
            width="212px"
            height="160px"
            image=""
            alt="card image"
            sx={{ borderRadius: '0.8rem', backgroundColor: '#000000' }}
          />

          <CardContent sx={{ padding: 1 }}>
            <Typography variant="subtitle2">CARD Example</Typography>
            <Typography variant="body1">카드 예시입니다~</Typography>
            <Divider sx={{ paddingTop: '2px', paddingBottom: '2px' }} />
            <Typography variant="body1" color={palette.grey[300]}>
              카드 예시입니다~
            </Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};

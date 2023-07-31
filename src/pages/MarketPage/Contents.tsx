import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Chip,
} from '@mui/material';
import styled from '@emotion/styled';
import palette from '@/styles/mui/palette';
import CustomChip from './CustomChip';
interface IProduct {
  id: string;
  address: string;
  price: string;
  thumbNail: string;
  like: number;
  options: string;
  category: string;
  prompt_type: string;
}

interface IProductListProps {
  products: IProduct[];
}

interface ICardExampleProps {
  product: IProduct;
}

const ContentCopyRight: React.FC<IProductListProps> = ({ products }) => {
  return (
    <Container
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        margin: '0px',
        gap: '40px',
      }}
    >
      <Grid container spacing={5}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <CardExample product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const ContentTicket: React.FC<IProductListProps> = ({ products }) => {
  return (
    <Container
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        margin: '0px',
        gap: '40px',
      }}
    >
      <Grid container spacing={5}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <CardExample product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const TopGradientOverlay = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background: linear-gradient(
    -180deg,
    rgba(128, 128, 128, 1) 0%,
    rgba(128, 128, 128, 0) 70%
  );

  border-radius: 4px;
  z-index: 0;
`;
const DownGradientOverlay = styled('div')`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background: linear-gradient(
    180deg,
    rgba(128, 128, 128, 0) 30%,
    rgba(128, 128, 128, 1) 100%
  );

  border-radius: 4px;
  z-index: 0;
`;

export { ContentCopyRight, ContentTicket };

const CardExample: React.FC<ICardExampleProps> = ({ product }) => {
  return (
    <Card
      sx={{
        minWidth: '100px',
        maxWidth: '300px',
        maxHeight: '300px',
        borderRadius: '0.8rem',
        border: `solid 1px ${palette.grey[400]}`,
      }}
    >
      <CardActionArea>
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            width="100%"
            height="160px"
            image={product.thumbNail}
            alt="card image"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '0.8rem',
              backgroundColor: '#000000',
            }}
          />
          <CardContent
            sx={{
              padding: 1,
              display: 'flex',
              flexDirection: 'column',
              position: 'absolute',
              width: '100%',
              color: 'white',
              top: 0,
              left: 0,
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                display: 'grid',
                columnGap: '16px',
                gridTemplateColumns: '99.5px 110px',
                width: '247px',
                height: '81.813px',
              }}
            >
              <Typography variant="body1" color={palette.grey[300]}>
                UserName
              </Typography>
              <CustomChip AI_type={product.prompt_type} />
            </Box>
            <Box
              sx={{
                display: 'grid',
                columnGap: '16px',
                gridTemplateColumns: '115.5px 115.5px',
                width: '247px',
                height: '81.813px',
                placeItems: 'center',
              }}
            ></Box>
            <Box
              sx={{
                display: 'grid',
                columnGap: '16px',
                gridTemplateColumns: '115.5px 115.5px',
                width: '247px',
                height: '81.813px',
                placeItems: 'center',
              }}
            >
              <Box>
                <Typography variant="subtitle1">{product.id}</Typography>
                <Typography variant="subtitle2">{product.price}</Typography>
              </Box>
              <Box>
                <Typography variant="body2">{product.like}</Typography>
              </Box>
            </Box>
          </CardContent>
          <TopGradientOverlay />
          <DownGradientOverlay />
        </Box>
      </CardActionArea>
    </Card>
  );
};

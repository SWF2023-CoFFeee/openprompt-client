import Lottie from 'react-lottie';
import Template from '@/components/common/CustomUI/template';
// import loadingLottie from '../../components/layout/openprompt_loading.json';
import successLottie from './openprompt_success.json';
// import loadingLottie from './openprompt_loading.json';

const SuccessPage = () => {
  return (
    <Template>
      <LottieComponent />
    </Template>
  );
};

export default SuccessPage;

const LottieComponent = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: successLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

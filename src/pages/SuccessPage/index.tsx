import Lottie from 'react-lottie';
import Template from '@/components/common/CustomUI/template';

import successLottie from './openprompt_success.json';

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
    loop: false,
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

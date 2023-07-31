import Template from '@/components/common/CustomUI/template';
import { useInputs } from '@/lib/hooks/useInputs';

const AuthPage = () => {
  const [data, onChange, onInit] = useInputs<{
    received: string;
    amount: string;
  }>({
    received: '',
    amount: '',
  });

  return (
    <Template variant="gradient">
      {data.received}
      {data.amount}

      <input
        type="text"
        name="received"
        placeholder="받을 사람"
        value={data.received}
        onChange={onChange}
      />
      <input
        type="text"
        name="amount"
        placeholder="보낼 돈"
        value={data.amount}
        onChange={onChange}
      />
      <button type="button" onClick={onInit}>
        초기화 예시
      </button>
    </Template>
  );
};

export default AuthPage;

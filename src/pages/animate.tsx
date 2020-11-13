import { username } from '@state/user';
import { NextPage } from 'next';
import { useRecoilState } from 'recoil';

const Animate: NextPage = () => {
  const [text, setText] = useRecoilState<string>(username);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <p>{text}</p>
      <input type="text" value={text} onChange={onChange} />
    </div>
  );
};

export default Animate;

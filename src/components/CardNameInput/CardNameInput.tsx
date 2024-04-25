import { ChangeEvent } from 'react';
import Input from '../Input/Index';

interface Props {
  nickname: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CardNameInput = ({ nickname, onChange }: Props) => {
  return (
    <Input.Container className='input-container flex-center w-100'>
      <Input
        className='input-underline w-75'
        placeholder='카드 별칭 (선택)'
        variant='underline'
        maxLength={10}
        value={nickname}
        onChange={onChange}
      />
    </Input.Container>
  );
};

export default CardNameInput;

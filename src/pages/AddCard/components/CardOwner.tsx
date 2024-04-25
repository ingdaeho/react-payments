import { forwardRef, useImperativeHandle } from 'react';
import useCardOwner, { OWNER_NAME_MAX_LENGTH } from '../hooks/useCardOwner';
import Input from '../../../components/Input/Index';

const CardOwner = forwardRef<HTMLInputElement>((_, forwardedRef) => {
  const { ref, owner, handleOwner } = useCardOwner();

  useImperativeHandle(forwardedRef, () => ref.current!);

  return (
    <Input.Container label='카드 소유자 이름(선택)'>
      <div className='input-relative'>
        <span className='owner-length'>
          {owner?.length} / {OWNER_NAME_MAX_LENGTH}
        </span>
        <Input
          ref={ref}
          placeholder='카드에 표시된 이름과 동일하게 입력하세요.'
          maxLength={OWNER_NAME_MAX_LENGTH}
          value={owner}
          onChange={handleOwner}
        />
      </div>
    </Input.Container>
  );
});

export default CardOwner;

import classNames from 'classnames';
import type { CardInfo } from '../../types';

const MASK_START_INDEX = 2;

interface Props extends CardInfo {
  size?: 'small' | 'big';
  error?: boolean;
  onClick?: () => void;
}

const Card = ({
  brand,
  numbers,
  owner,
  expiration,
  size = 'small',
  error,
  onClick,
}: Props) => {
  const cardNumbers = Object.values(numbers)
    .map((number, index) => {
      if (index >= MASK_START_INDEX) return number.replace(/\d/g, '*');
      return number;
    })
    .join(' ');

  return (
    <div className='card-box' onClick={onClick}>
      <div
        className={classNames(`${size}-card`, { error })}
        style={{ backgroundColor: brand.color }}
      >
        <div className='card-top'>
          <span className='card-text'>{brand.label}</span>
        </div>
        <div className='card-middle'>
          <div className={`${size}-card__chip`} />
        </div>
        <div className='card-bottom'>
          <div className='card-bottom__number'>
            <span className='card-text'>{cardNumbers}</span>
          </div>
          <div className='card-bottom__info'>
            <span className='card-text'>{owner || 'NAME'}</span>
            <span className='card-text'>
              {expiration[0] || 'MM'} / {expiration[1] || 'YY'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

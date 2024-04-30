import { useCallback, useEffect } from 'react';
import { Brand } from '../../../types';
import { CardContext } from '../../../App';
import { CardBrandList } from '../components/BrandList';

export const useCardBrands = () => {
  const { send } = CardContext.useActorRef();
  const { numbers, brand } = CardContext.useSelector(
    ({ context }) => context.cardState
  );

  const selectBrand = useCallback(
    (brand: Brand) => {
      send({ type: 'UPDATE_BRAND', payload: { key: 'brand', value: brand } });
    },
    [send]
  );

  const findLabelByNumbers = useCallback((first: string, second: string) => {
    return CardBrandList.find(({ bankId }) => {
      return first.startsWith(bankId[0]) && second.startsWith(bankId[1]);
    });
  }, []);

  useEffect(() => {
    if (!brand.label) {
      const brand = findLabelByNumbers(numbers[0], numbers[1]);
      if (brand) {
        selectBrand(brand);
      }
    }
  }, [brand.label, numbers]);

  return {
    selectBrand,
  };
};

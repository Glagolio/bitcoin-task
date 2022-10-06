import { useSelector, useDispatch } from 'react-redux';
import getPrice from '../../redux/price/price-operation';
import { useEffect } from 'react';
import style from './Price.module.scss';
import Title from '../Title/Title';
import CurrencyList from '../CurrencyList/CurrencyList';

const Price = () => {
  const dispatch = useDispatch();
  const currency = useSelector(state => state.price.currency);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(getPrice());
    }, 60 * 1000);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  return (
    <div className={style.main}>
      <Title titleText="Current token price" />
      <CurrencyList currenty={currency} />
    </div>
  );
};

export default Price;

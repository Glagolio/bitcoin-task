import style from './CurrencyList.module.scss';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import getPrice from '../../redux/price/price-operation';
import { decode } from 'html-entities';

const CurrencyList = () => {
  const dispatch = useDispatch();
  const currency = useSelector(state => state.price.currency);

  useEffect(() => {
    dispatch(getPrice());

    const intervalId = setInterval(() => {
      dispatch(getPrice());
    }, 60 * 1000);

    return () => clearInterval(intervalId);
  }, [dispatch]);
  return (
    <ul className={style.price_info}>
      {currency.map(item => (
        <li key={item.code} className={style.price_info__item}>
          <h2 className={style.currency}>{item.description}</h2>
          <p className={style.rate}>
            {decode(item.symbol)}
            {item.rate_float.toFixed(2)}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default CurrencyList;

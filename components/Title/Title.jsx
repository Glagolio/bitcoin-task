import style from './Title.module.scss';
import { useSelector } from 'react-redux';

const Title = ({ titleText }) => {
  const time = useSelector(state => state.price.time);

  return (
    <div>
      <h1 className={style.title}>{titleText}</h1>
      <p className={style.time}>last update: {time}</p>
    </div>
  );
};

export default Title;

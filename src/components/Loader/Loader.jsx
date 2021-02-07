import Loader from 'react-loader-spinner';
import s from './Loader.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function Spinner() {
  return (
    <div className={s.wrapper}>
      <Loader
        className="spinner"
        type="ThreeDots"
        color="#8B0000"
        height={80}
        width={80}
      />
    </div>
  );
}

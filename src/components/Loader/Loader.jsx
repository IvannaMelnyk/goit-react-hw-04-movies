import React from 'react';
import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

function LoaderSpinner() {
  return (
    <div className={s.wrapper}>
      <Loader
        className="Loader"
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
}

export default LoaderSpinner;

import React from 'react';

import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '2',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        background: 'rgba(0, 0, 0, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
    <Oval
  height={100}
  width={100}
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="#4fa94d"
  strokeWidth={8}
  strokeWidthSecondary={8}
      />
    </div>
  );
};


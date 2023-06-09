import React from "react";
import { Circle, Path, Svg } from "react-native-svg";

const EditBtn = () => {
  return (
    <Svg width={40} height={40} viewBox='0 0 40 40' fill='none'>
      <Circle cx={20} cy={20} r={20} fill='#ECEBE8' />
      <Path
        d='M14.064 16.242l-6.67 6.683a1.147 1.147 0 000 1.62c.368.37.939.446 1.392.186l1.291-.739-.743 1.27a1.161 1.161 0 00.18 1.406l2.123 2.127c.389.39.998.452 1.457.147l4.172-2.77-2.792 4.138c-.31.46-.252 1.076.14 1.469l.825.825c.446.448 1.17.448 1.616 0l6.67-6.682-9.661-9.68zM26.111 21.913l-1.38-1.383a1.802 1.802 0 01.18-2.704l5.658-4.329a2.935 2.935 0 00.293-4.403 2.923 2.923 0 00-4.395.294l-4.321 5.668c-.66.865-1.93.95-2.699.18l-1.38-1.383a1.142 1.142 0 00-1.616 0l-1.74 1.742 9.663 9.68 1.738-1.741a1.147 1.147 0 000-1.62v-.001zm1.415-9.438a1.606 1.606 0 010-2.268 1.599 1.599 0 012.264 0 1.606 1.606 0 010 2.268 1.599 1.599 0 01-2.264 0z'
        fill='#BAB4B6'
      />
    </Svg>
  );
};

export default EditBtn;

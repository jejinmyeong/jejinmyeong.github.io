import React from 'react';
import { Square } from 'assets/svg/Figures';

const LevelTable = () => {
  const levellist: string [] = ['lv1', 'lv2', 'lv3', 'lv4', 'lv5'];

  return (
    <div className='flex gap-1 items-center justify-end pb-2'>
      <div className='text-sm'>less</div>
      {levellist.map((color, idx) => <Square key={idx} color={color} />)}
      <div className='text-sm'>more</div>
    </div>
  );
};

export default LevelTable;
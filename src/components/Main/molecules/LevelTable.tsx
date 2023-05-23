import React from 'react';
import { ReactComponent as Square } from 'assets/svg/square.svg';
import classNames from 'classnames';

type Props = {
  classname?: string;
}

const LevelTable = ({ classname }: Props) => {
  const levelTableClasses = classNames('flex gap-1 items-center text-sm', classname)
  return (
    <div className={levelTableClasses}>
      less
      <Square className='inline h-3 fill-blue-200'/>
      <Square className='inline h-3 fill-blue-300'/>
      <Square className='inline h-3 fill-blue-400'/>
      <Square className='inline h-3 fill-blue-500'/>
      <Square className='inline h-3 fill-blue-600'/>
      more
    </div>
  );
};

export default LevelTable;
import React from 'react';
import cn from 'classnames';

import './Cube.scss';

interface CubeProps {
    className?: string;
}

const Cube: React.FC<CubeProps> = ({ className }) => {
    return (
        <div className={cn('cube', className)}>
            <div className='cube__face cube__face--front'></div>
            <div className='cube__face cube__face--back'></div>
            <div className='cube__face cube__face--right'></div>
            <div className='cube__face cube__face--left'></div>
            <div className='cube__face cube__face--top'></div>
            <div className='cube__face cube__face--bottom'></div>
        </div>
    );
};

const CubeWrapped: React.FC<CubeProps> = ({ className }) => {
    return (
        <div className={cn(className)}>
            <div className={'cube'}>
                <div className='cube__face cube__face--front'></div>
                <div className='cube__face cube__face--back'></div>
                <div className='cube__face cube__face--right'></div>
                <div className='cube__face cube__face--left'></div>
                <div className='cube__face cube__face--top'></div>
                <div className='cube__face cube__face--bottom'></div>
            </div>
        </div>
    );
};

export { CubeWrapped };

export default Cube;

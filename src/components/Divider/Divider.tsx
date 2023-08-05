import React from 'react';
import cn from 'classnames';

import './Divider.scss';

interface DividerProps {
    tag?: string;
    className?: string;
}

const Divider: React.FC<DividerProps> = ({ tag, className }) => {
    if (tag) {
        return (
            <div className='horizontal center'>
                <div className='divider accent padded' />
                <span className='font-fancy'>{tag}</span>
                <div className='divider accent padded' />
            </div>
        );
    }

    return <div className={cn('divider', className)} />;
};

export default Divider;

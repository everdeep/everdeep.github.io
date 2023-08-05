import React, { useState, useEffect } from 'react';
import cn from 'classnames';

import { Blog } from '@components/Blog';

const Cryptobot: React.FC = () => {

    const [isOnMainPage, setIsOnMainPage] = useState(true);

    return (
        <div className='project__container'>
            <div className={cn({ hidden: !isOnMainPage })}>
                <h1>Cryptobot</h1>

                <div>
                    <p>
                        Cryptobot is a cryptocurrency trading bot that I built
                        using advanced methods and practices
                    </p>
                </div>
            </div>
            <Blog endpoint={'cryptobot'} toggleMainPageView={() => setIsOnMainPage(!isOnMainPage)}/>
        </div>
    );
};

export default Cryptobot;

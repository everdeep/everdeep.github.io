import React from 'react';

interface NotFoundProps {
    setNotFound: (notFound: boolean) => void;
}

const NotFound: React.FC<NotFoundProps> = ({ setNotFound }) => {
    React.useEffect(() => {
        // setNotFound(true);
    }, []);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <div className='center' style={{position: 'relative', top: '20%'}}>
                <p style={{ fontWeight: 900, fontSize: 35 }}>404</p>
                <h2 style={{ fontWeight: 400 }}>Page not found</h2>
            </div>
        </div>
    );
};

export default NotFound;

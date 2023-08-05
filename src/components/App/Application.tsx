import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

// SCSS
import './Application.scss';

import { alertClear } from '@src/actions';
import ProtectedRoute from '@components/ProtectedRoute';
import { AppContextInterface, AppContextProvider } from './AppContext';

import Alert from '@components/Alert';
import Loading from '@components/Loading';
import Navigation from '@components/Navigation';

// Platform components
import Resume from '@pages/Resume';
import NotFound from '@pages/NotFound';
import Overview from '@pages/Overview';
import Projects from '@pages/Projects';
import Cryptobot from '@pages/Projects/Cryptobot';
import { Post, PostList } from '@src/components/Blog';

interface ApplicationProps {
    alert: any;
    alertClear: () => void;
}

const Application: React.FC<ApplicationProps> = ({ alert, alertClear }) => {
    const [darkTheme, setDarkTheme] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [loading, setLoading] = useState(false);

    const appContext: AppContextInterface = {
        loading: loading,
        setLoading: setLoading,
        darkTheme: darkTheme,
        toggleTheme: () => setDarkTheme(!darkTheme),
    };

    /**
     * On component mount
     */
    useEffect(() => {
        const useDarkTheme = parseInt(localStorage.getItem('dark-mode'));
        if (isNaN(useDarkTheme)) {
            setDarkTheme(false);
        } else if (useDarkTheme == 1) {
            setDarkTheme(true);
        } else if (useDarkTheme == 0) {
            setDarkTheme(false);
        }

        // Reset not found
        setNotFound(false);
    }, []);

    /**
     * On alert change
     * Clear alert after 5 seconds
     */
    useEffect(() => {
        if (alert.active) {
            setTimeout(() => {
                alertClear();
            }, 5000);
        }
    }, [alert.active]);

    /**
     * On Dark theme change
     */
    useEffect(() => {
        if (darkTheme) {
            localStorage.setItem('dark-mode', '1');
            document.body.classList.add('dark-mode');
        } else {
            localStorage.setItem('dark-mode', '0');
            document.body.classList.remove('dark-mode');
        }
    }, [darkTheme]);

    return (
        <BrowserRouter>
            {loading && <Loading />}

            {alert.active && (
                <Alert message={alert.message} className={alert.className} />
            )}

            <>
                <AppContextProvider value={appContext}>
                    {/* Navigation */}
                    <Navigation />

                    <Routes>
                        <Route path='/' element={<Resume />} />
                        <Route path='projects' element={<Projects />}>
                            <Route index element={<Overview />} />
                            <Route path='cryptobot' element={<Cryptobot />}>
                                <Route index element={<PostList />} />
                                <Route path=':postId' element={<Post />} />
                            </Route>
                        </Route>

                        <Route
                            path='error'
                            element={<NotFound setNotFound={setNotFound} />}
                        />
                        {/* <Route
                            path='*'
                            element={<Navigate to='/error' replace />}
                        /> */}
                    </Routes>
                </AppContextProvider>
            </>
        </BrowserRouter>
    );
};

const mapStateToProps = (state: any) => {
    return {
        alert: state.alert,
    };
};

export default connect(mapStateToProps, { alertClear })(Application);

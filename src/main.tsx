import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { store, persistor } from '@src/configureStore';
import Application from '@components/App';

// Say something
console.log('[LOG] : Renderer execution started');

const queryClient = new QueryClient();

// Render application in DOM
createRoot(document.getElementById('app')).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <QueryClientProvider client={queryClient}>
                <GoogleOAuthProvider clientId='657043937655-qvha0bqn6ip4inb4j8tunp8ro6pjdq7i.apps.googleusercontent.com'>
                    <Application />
                </GoogleOAuthProvider>
            </QueryClientProvider>
        </PersistGate>
    </Provider>,
);

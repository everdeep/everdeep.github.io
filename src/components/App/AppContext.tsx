import React from 'react';

export interface AppContextInterface {
    loading: boolean;
    setLoading: (loading: boolean) => void;
    darkTheme: boolean;
    toggleTheme: () => void;
}

const ctxt = React.createContext<AppContextInterface | null>(null);

export const AppContextProvider = ctxt.Provider;

export const AppContextConsumer = ctxt.Consumer;

// This function takes a component...
export function withAppContext(Component: React.ComponentType<any>) {
    // ...and returns another component...
    return function ComponentBoundWithAppContext(props: any) {
        // ... and renders the wrapped component with the current context!
        // Notice that we pass through any additional props as well
        return (
            <AppContextConsumer>
                {(appContext) => (
                    <Component {...props} appContext={appContext} />
                )}
            </AppContextConsumer>
        );
    };
}

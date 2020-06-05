import React from 'react';
import {
    RouteProps as ReactRouterDOMProps,
    Route as ReactRouterDOMRoute,
    Redirect,
} from 'react-router-dom';

import useAuth from '../hooks/useAuth';
import Default from '../layouts/Default';

interface RouteProps extends ReactRouterDOMProps {
    isPrivate?: boolean;
    component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
    isPrivate = false,
    component: Component,
    ...rest
}) => {
    const { signed } = useAuth();

    return (
        <ReactRouterDOMRoute
            {...rest}
            render={({ location }) => {
                return isPrivate === signed ? (
                    <Default>
                        <Component />
                    </Default>
                ) : (
                    <Redirect
                        to={{
                            state: { from: location },
                            pathname: isPrivate ? '/' : '/home',
                        }}
                    />
                );
            }}
        />
    );
};

export default Route;

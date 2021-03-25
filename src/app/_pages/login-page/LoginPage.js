import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

const login = React.lazy(() => import('../../components/login/Login'));

function LoginPage(props) {
    return (
        <HashRouter>
            <React.Suspense>
                <Switch>
                    <Route path={"/login"}  component={login} />
                </Switch>
            </React.Suspense>
        </HashRouter>
    );
}

export default LoginPage;
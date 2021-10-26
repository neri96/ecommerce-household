import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { useHistory } from 'react-router';

import Header from './components/Header';
import MainPage from './components/MainPage';
import ProductList from './components/Products/ProductList';
import ProductDetails from './components/Products/ProductDetails/ProductDetails';
import AdminPanel from './components/AdminPanel';

import { AuthStatus } from './context';

import { getUserData, removeUserData } from './utils/storeData';

import GlobalStyle from './style';
import styled from 'styled-components';

const Background = styled.main`
    height: 100%;
    width: 100%;
    background-image: url('background.jpg');
    background-size: cover;
`;

const App = () => {
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const history = useHistory();

    const handleAuth = () => setIsAuth(!isAuth);

    useEffect(() => {
        const userData = getUserData();

        if(userData && !isAuth) {
            setIsAuth(true);
        } else if(!userData && isAuth) {
            setIsAuth(false);
        }
    }, [isAuth])

    useEffect(() => {
        if(isAuth) {
            const now = Date.now();
            const { expirationDate } = getUserData();

            const expireCheck = setTimeout(() => {
                removeUserData();
                handleAuth();

                history.push('/');
            }, (expirationDate - now))

            return () => clearTimeout(expireCheck)
        }
    }, [isAuth])

    return (
        <>
            <GlobalStyle />
            <AuthStatus.Provider value={{ isAuth, handleAuth }}>
                <Header />
                <Switch>
                    <Route exact path='/' component={MainPage} />
                    <Route path='/admin' component={AdminPanel} />
                    <Route exact path='/products/:category' component={ProductList} />
                    <Route path='/products/:category/:name' component={ProductDetails} />
                </Switch>
            </AuthStatus.Provider>
        </>
    )
}

export default App;
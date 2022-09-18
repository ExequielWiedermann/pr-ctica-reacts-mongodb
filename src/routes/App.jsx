import React from 'react';
import '../styles/global.scss';
import {} from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import '../styles/global.scss';

const App = () => {
    return (
        <Layout>
            //Sino recibe valores, es mejor este
            <Login />
            <RecoveryPassword />
        </Layout>
    );
}

export default App;
import React from 'react';
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
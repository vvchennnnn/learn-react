import React from 'react';
import Header from './app/Header';
import Page from './app/Page';
import Footer from './app/Footer';

// 函数返回JSX片段，这就是functional component
const App = () => (
    <div class="main">
        <div class="container">
            <Header />
            <Page />
            <Footer />
        </div>
    </div>
);

export default App;
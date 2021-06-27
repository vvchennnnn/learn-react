import React from 'react';
import HomePage from './components/HomePage';
import ResumePage from './components/ResumePage';
import ServicePage from './components/ServicePage';


const Page = () => (
    <div className="pages">
        <HomePage />
        <ResumePage />
        <ServicePage />
        <div id="CONTACT" class="page"></div>
    </div>
);
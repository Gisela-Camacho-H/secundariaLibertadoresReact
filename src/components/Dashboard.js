import React from 'react'
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';

export default function Dashboard() {
	return (
        <React.Fragment>
        <div id="wrapper">
        <SideBar />
        <ContentWrapper />
    </div>
</React.Fragment>

	);
}
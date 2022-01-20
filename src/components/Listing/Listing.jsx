import React from 'react';
import { useSelector } from 'react-redux';
import Nav from "../Navbar/Nav";

export default function Listing(props) {
    
    const details = useSelector(state => state.users.postDetails);

    return (
        <div>
            <Nav/>
            <h1>Post displayed here</h1>
        </div>
    );
}
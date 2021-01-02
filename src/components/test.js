import React from 'react';
import { Link } from 'react-router-dom';

const Test = () => (
    <div>
        <Link to="/companyDetails">Details</Link>
        <Link to="/companyChart">Chart</Link>
    </div>
);

export default Test;
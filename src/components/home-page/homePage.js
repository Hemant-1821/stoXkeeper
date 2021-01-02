import React from 'react';

import Footer from './footer/footer';
import MMI from './mmi/mmi';
import Mid from './mid/mid';
import Heading from './heading/heading';

const HomePage = () => (
    <div>
        <Heading/>
        <Mid />
        <MMI />
        <Footer />
    </div>
);

export default HomePage;
import React from 'react';
import BlinkBox from './Components/BlinkBox';
const App = () => {
    return (
        <>
            <BlinkBox width={30} speed={100} percent={0.5} radii={'80%'}/>
        </>
    );
};

export default App;

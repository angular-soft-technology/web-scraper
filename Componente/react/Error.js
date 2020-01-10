import React from 'react';
import {Link} from 'react-router-dom';

const Error = () => {
    return(
        <div>
            <p>Page not found.</p>
            <p>Lost in space? Go back to our <Link to="/">homepage</Link></p>
        </div>
    );
}

export default Error;
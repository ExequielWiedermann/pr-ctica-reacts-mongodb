import React from 'react';

//Encapsulamiento con children
const Layout = ({children}) => {
    return (
        <div className='Layout'>
            {children}
        </div>  
    );
}

export default Layout;
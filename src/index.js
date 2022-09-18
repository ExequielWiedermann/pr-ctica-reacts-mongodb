import React from 'react';

const Button = () =>{
    //Para trabajar con stateful y stateless
    const [name, setName] = useName('Hola Mundo');
    return(
        <div>
            <h1>{name}</h1>
        </div>
    );
}
import React from 'react';

const Button = () =>{
    //Para trabajar con stateful y stateless
    const [name, setName] = useName('Hola');
    return(
        <div>
            <h1>Hola mundos</h1>
        </div>
    );
}
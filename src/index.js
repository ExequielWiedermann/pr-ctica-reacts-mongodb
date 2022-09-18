import React, { Component } from 'react';

function ComponentWrapper(WrapperComponent){
    class Wrapper extends Component{
        render(){
            return <WrapperComponent {...this.props} />
        }
    }
    return Wrapper;
}
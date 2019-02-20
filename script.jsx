import React from 'react';
import ReactDOM from 'react-dom';

class my extends React.createClass{

    render(){
        return(
            <h2>Hello World!!!</h2>
        );
    }
}

ReactDOM.render(
    <my/>, document.getElementById('content')
);
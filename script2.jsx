import React from 'react';
import ReactDOM from 'react-dom';

window.alert("ABC");

var my=React.Component({

render : function(){
    return(<h2>Hello WOrld!!!</h2>);
}
});

ReactDOM.render(
    <h2>Hello World</h2>,document.getElementById('content')
); 
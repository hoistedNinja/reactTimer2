import React from "react";
import ReactDOM, { render } from "react-dom";

import "./styles.css";

const styles={
  fontFamily:'Sans-Serif',
  textAlign:'center',
};
class App extends React.Component{
  render(){
    return (
      <div style={styles}>
        <h2>{this.props.count}</h2>
      
      
      </div>
    )
  }
}


let count=0
setInterval(function(){render(<App count={count++}/>,document.getElementById('root'))},1000)

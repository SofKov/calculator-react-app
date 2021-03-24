import React from 'react';
import { evaluate } from "mathjs";
import './App.css';
// installed mathjs for the calulations


//define root app component, state for output screen, starting with 0, defining the buttons/keys and adding css styling names for later styling
class App extends React.Component{
  state = {
    screen:["0"],
    keys:[
      {value: "AC", styling:"clear wide"},
      {value: "/", styling:"operator"},
      {value: "7", styling:"num"},
      {value: "8", styling:"num"},
      {value: "9", styling:"num"},
      {value: "*", styling:"operator"},
      {value: "4", styling:"num"},
      {value: "5", styling:"num"},
      {value: "6", styling:"num"},
      {value: "+", styling:"operator"},
      {value: "1", styling:"num"},
      {value: "2", styling:"num"},
      {value: "3", styling:"num"},
      {value: "-", styling:"operator"},
      {value: "0", styling:"zero wide"},
      {value: ".", styling:"num"},
      {value: "=", styling:"operator"},
    ],
  };


//originally started with each esle if statement as a seperate function, combine all three under one function for calculator
  handleInput = (val) => {
    if (val == "AC"){
      this.setState({screen: ["0"]});
    }
    else if (val == "="){
      let evalStr = this.state.screen.join("");
      let output = evaluate(evalStr);
      this.setState({screen: [output]});
    }
    else{
      let newArray = [...this.state.screen, val];
      if (newArray[0] === "0"){
        newArray.shift();
      }
      this.setState({screen: newArray});
    }
  };

// render method
  render() {
    return(
      <div className = "container">
        <h1>Calculator App</h1>

        <div className = "wrap">
          <div className = "screen">
            <h2>{this.state.screen}</h2>
          </div>
          <div className="buttons">
            {
              this.state.keys.map(key => {
                return (
                <KeyBtn 
                number={key.value} 
                styling={key.styling}
                handleInput={this.handleInput} 
                />
              );
            })}
          </div>
        </div>
      
        <h4>Made with 💜 | <a href="https://github.com/SofKov" target="_blank">My GitHub</a></h4>
      </div>
    );
  };
}

//button event
const KeyBtn = (props) => {
  return (
    <button className={`btn ${props.styling}`} onClick={()=> props.handleInput(props.number)}>{props.number}</button>
  );
}


export default App;
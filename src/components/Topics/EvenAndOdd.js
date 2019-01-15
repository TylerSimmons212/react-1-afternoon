// imports React from wherever we got it from
import React, {Component} from 'react';
//  class title's the component EvenAndOdd and extends which which tells us its a child of another class
class EvenAndOdd extends Component {
    // the constructor is the information being passed into this component
    constructor(){
        // super allows this to call functions on the object's parent
        super()
        //  this.state is creating a global state object which can be modified by whoever is calling it.
        this.state = {
            // creating an empty array called 'evenArray'
            evenArray : [],
            // creating an empty array called 'oddArray'
            oddArray : [],
            // creating an empty string called 'userInput'
            userInput : ''
        }
    }
    // creating a method called handleChange given a parameter of value
    handleChange(value){
        // grabbing the state object via 'this' and resetting it using the method setState
        this.setState({
            // reseting the value of the userImput key to the parameter of value for future input.
            userImput:value
        })
    }
    // creating a method called assignEvenAndOdds given a parameter of userInput
    assignEvenAndOdds(userInput){
        // creating a variable called 'arr' which is set to the value of the parameter userInput.split which will split the array of strings at ',' into substrings
        var arr=userInput.split(',');
        // creating a variabl;e called evens and setting it to an empty array
        var evens = [];
        // creating a variabl;e called odds and setting it to an empty array
        var odds = [];
        // creating a for loop to loop through an array starting at the beginning going to the length of the array and moving on one at a time
        for (var i=0;i<arr.length; i++){
            // creating an if statement to test if the given number is even
            if (arr[i]%2 === 0){
                // ??
                evens.push(parseInt(arr[i],10) );
            }
            else {
                // ??
                odds.push( parseInt(arr[i],10) );
            }
        }
        // grabbing the state object via 'this' and resetting it using the method setState so its array take the value of evens, and odds
        this.setState({evenArray:evens, oddArray:odds});
    }
    // render is the information which is displayed to the viewer from the component
    render(){
        // return ends the functions and gives specific values to everything being returned to the function caller
        return(
        // creating a parent div with the className as "puzzleBox evenAndOddPB"
        <div className = "puzzleBox evenAndOddPB">
        {/* Creating the heading "Evens and Odds with the <h4> tags" */}
        <h4>"Evens and Odds"</h4>
        {/* creating and area to input with the input tags giving them a className of 'inputLine and adding the onChange attribute so whenever the user changes the value(or types) is places the new value into the handleChange method */}
        <input className = "inputLine" onChange = {(e) => this.handleChange(e.target.value)}></input>
        {/* Creating a button to be clicked with the className of "confirmationButton" where whenever it's clicked activates the method assignEvenAndOdds */}
        <button className = "confirmationButton" onClick = {() => {this.assignEvenAndOdds(this.state.userImput)}}>Split</button>
        {/*  creates a span with the className of "resultsBox" to group all of the Evens in.*/}
        <span className = "resultsBox"> Evens: {JSON.stringify(this.state.evenArray)}</span>
        {/*  creates a span with the className of "resultsBox" to group all of the Evens in.*/}
        <span className = "resultsBox"> Odds: {JSON.stringify(this.state.oddArray)}</span>  
        </div>
        )
    }
}
// exports all if the information on this page as 'EvenAndOdd' for ther pages to access.
export default EvenAndOdd;
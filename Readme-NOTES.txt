* Props = a way in react to pass any type of data from a parent component to a child component
* Making the child component more reusable
* React Fragment <> </> or   <React.Fragment> </React.Fragment> if you have props in your Fragment
* Children prop
* Portals (outputing components somewhere else) using ReactDOM.createPortal(Children, Container)
* Class components are older way of making components (before useState), now function components are used.
* Class components has constructor, render, this keyword
* Class components are declared as follows

class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date: new Date()
        }
    }
}

render(){
    return (

        <div>
            <h1> Hello, {this.props.name} </h1>
            <h2> Hello, {this.state.date.toLocaleTimeString} </h2>
        </div>
    );    
    
}
import logo from './logo.svg'
import './App.css'
import React from 'react'
import HomePageFunctional from './Component/HomePageFunctional'


class Header extends React.Component{
  constructor(props){
    super(props)
    console.log("this header conStructor");
  }
  render(){
    console.log("this render header=>",this.props.color);
    const textStyle = {
      color:this.props.color,
      backgroundColor:this.props.backgroundColor,
      fontSize:this.props.fontSize
    }
    return <div style={textStyle}>{this.props.title} {this.props.amount}</div>
  }
}

class App extends React.Component{

// con
  constructor(props) {
    super(props);
    console.log("this APP constructor");
    this.state = { color:"blue" };
  }

// life cycle method
  componentDidMount(){
    // this.setState({
    //   color: "green",
    // });
    console.log("THis method component from app");
  }

// render
  render(){
    console.log("render =>",this.state);
    return(
      <div className="box" onClick={()=>{
        this.setState({
          color:"white"
        })
      }}>
        <Header title="This is Data from props title" amount="1000" color={this.state.color} backgroundColor="#333" fontSize="32px"/>
        <HomePageFunctional color="red"/>
      </div>
    )
  }
}

export default App

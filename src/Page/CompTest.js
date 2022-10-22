import { Button } from "antd";
import React from "react";
import img from "./asserts/logo192.png"



function withMouse(WrapperCom) {
    class Mouse extends React.Component {
        state = {
            x:0,y:0
        }
        handleMouseMove = e => {
            this.setState({
                x:e.clientX,
                y:e.clientY
            })
        }
        componentDidMount () {
            window.addEventListener('mousemove', this.handleMouseMove)
        }
        render() {
            return <WrapperCom {...this.state}></WrapperCom>
        }
        componentWillUnmount() {
            window.removeEventListener('mousemove', this.handleMouseMove)
        }
    }
    return Mouse
}

const Pos = props => (
    <p>
        weizhi:(x: {props.x} , y:{props.y})
    </p>
)

const Cat = props => (
    <img 
    src={img} 
    alt="" 
    style ={{
      position:'absolute',
      top:props.y-96,
      left:props.x-96
    }} />
)

const MousePos = withMouse(Pos)
const MouseCat = withMouse(Cat)


class CompTest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
    console.log("constructor");
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    console.log("CompTest render");
    return (
      <div id="wst">
        {this.state.count > 3 ? (
          <p>die</p>
        ) : (
          <Counter count={this.state.count} />
        )}
        <Button onClick={this.handleClick}>beat dd</Button>

        {/* <Mouse
          children={(mouse) => {
            return (
              <p>
                pos: {mouse.x}, {mouse.y}
              </p>
            );
          }}
        /> */}
        <MousePos />
        <MouseCat />
        {/* <Mouse>
          {(mouse) => {
            return (
              <p>
                pos: {mouse.x}, {mouse.y}
              </p>
            );
          }}
        </Mouse> */}
        {/* <Mouse children={(mouse)=>{
          return (<
            img src={img} 
            alt="cat" 
            style ={{
              position:'absolute',
              top:mouse.y-96,
              left:mouse.x-96
            }} 
            />)
        }}/> */}

        {/* <Mouse>
          {(mouse) => {
            return (
              <img
                src={img}
                alt="cat"
                style={{
                  position: "absolute",
                  top: mouse.y - 96,
                  left: mouse.x - 96,
                }}
              />
            );
          }}
        </Mouse> */}
      </div>
    );
  }

  componentDidMount() {
    console.log("CompTest componentDidMount");
    const title = document.getElementById("wst");
    console.log(title);
  }

  componentDidUpdate() {
    console.log("CompTest componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("CompTest componentWillUnmount");
  }
}

class Counter extends React.Component {
  render() {
    console.log("Counter render");
    return <h1> be beated : {this.props.count}</h1>;
  }
  componentDidMount() {
    console.log("Counter componentDidMount");
    const title = document.getElementById("wst");
    console.log(title);
  }

  componentDidUpdate() {
    console.log("Counter componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Counter componentWillUnmount");
  }
}

export default CompTest;

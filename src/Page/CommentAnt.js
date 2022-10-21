import React from "react";
import './CommentAnt.css';
import CommentCompnent from "./componet/Comment";
import AvatarCompnent from "./componet/AvatarCompnent";
import SelectCompnent from "./componet/SelectCompnent";

// const usernames = [ "nouser", "clc", "cici"]
 const usernames = [
  {index:"0", name:"nouser"},
  {index:"1", name:"clc"},
  {index:"2", name:"cici"}
 ]

class CommentAnt extends React.Component {
  state={
    cur_username:"nouser",
  }

  getCurName = (name)=> {
    this.setState ({
      cur_username:name
    }) 
  }

  render() {
    return (
      <div className="comments">
        <br/>
        <label style={{color:"red"}}>当前用户</label>
        <AvatarCompnent name={this.state.cur_username}/>
        <SelectCompnent uns={usernames} getMsg={this.getCurName}/>
        <br/>
        <CommentCompnent name={this.state.cur_username} />
        <br/>
      </div>
    );
  }
}

export default CommentAnt;

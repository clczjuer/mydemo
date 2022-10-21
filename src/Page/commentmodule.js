import React from "react";
import './CommentModule.css';
import moment from 'moment'


// const usernames = [ "nouser", "clc", "cici"]
 const usernames = [
  {index:"0", name:"nouser"},
  {index:"1", name:"clc"},
  {index:"2", name:"cici"}
 ]

class CommentModule extends React.Component {

  state={
    cur_username:"nouser",
    content:"input now",
    history_content:[{
      index:0, username:"clc", time:"10-20 20:19:00", content:"my first content"
    },
    {
      index:1, username:"cici", time:"10-20 20:19:01", content:"my content"
    }
  ]}

  handleClick=()=>{

    if (this.state.cur_username.trim() === 'nouser' ||
    this.state.content.trim() === '') {
      //alert("please input your comment")
      //return
    }


    const new_content = {index: this.state.history_content.length, 
      username:this.state.cur_username, 
      time:moment().format("MM-DD HH:mm:ss"), 
      content:this.state.content}

    this.setState({
      history_content:[new_content, ...this.state.history_content],
      content:""
    })
  }
  handleChange=e=>{
    const target = e.target
    const {value, name} = target
 
    console.log(target)
    
     this.setState({
       [name]:value
     })
  }
  optionChange=e=> {
 
    this.setState({
      cur_username:e.target.value
    })
  }

  getContents =(params)=> {
    return (
      <div>
        {params.map(item=><li key={item.index}>
          <h3>{item.index},{item.time}({item.username}):</h3>
          <p>{item.content}</p>
          </li>)}
      </div>
    )
  }

  render() {
    const {cur_username, content} = this.state
    return (
      <div className="comments">
        <br/>
        <select name="selection" className="select" value={cur_username} 
        label = "nouser" onChange={e=>this.optionChange(e)}>
          {usernames.map(item=><option key={item.index}>{item.name}</option>)}
        </select>
        <br/>
        <label style={{color:"red"}}>评论人</label>
        <input type="text" name="cur_username" className="cur_username" readOnly={true}
          value={cur_username} onChange={this.handleChange}></input>
        <br/>
        <label style={{color:"red"}}>内容</label>
        <textarea name="content" value={content} className="content"
         onChange={this.handleChange}>input content</textarea>
        <br/>
        <button className="commit" onClick={this.handleClick}>commit</button>
        <br/>
        <br/>
        <label>history_content</label>
        <div>
          {this.getContents(this.state.history_content)}
        </div>
      </div>
    );
  }
}

export default CommentModule;

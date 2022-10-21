import { Avatar } from 'antd';
import React from 'react';


const AvatarCompnent = (props) => (
  <>
    <Avatar
      style={{
        color: '#f56a00',
        backgroundColor: '#fde3cf',
      }}
    >
      {props.name}
    </Avatar>
  </>
);
export default AvatarCompnent;
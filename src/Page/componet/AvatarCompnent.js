import { Avatar } from 'antd';
import React from 'react';
import PropTypes from 'prop-types'

function AvatarCompnent(props) {
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
};

AvatarCompnent.propTypes = {
  name:PropTypes.string
}
export default AvatarCompnent;
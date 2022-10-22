import { Select } from "antd";
import React from "react";
import PropTypes from 'prop-types'
const { Option } = Select;



class SelectCompnent extends React.Component {
  onChange = (value) => {
    console.log(`selected ${value}`);
    console.log(this.props);
    this.props.getMsg(value)
  };
  onSearch = (value) => {
    console.log("search:", value);
  };
  render() {
    return (
      <Select
        showSearch
        placeholder="Select a person"
        optionFilterProp="children"
        className="user_select"
        onChange={this.onChange}
        onSearch={this.onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().includes(input.toLowerCase())
        }
      >
        {this.props.uns.map((item) => (
          <Option key={item.index} value={item.name}>
            {item.name}
          </Option>
        ))}
      </Select>
    );
  }
}
SelectCompnent.propTypes = {
    getMsg: PropTypes.func,
    uns: PropTypes.array
}
export default SelectCompnent;

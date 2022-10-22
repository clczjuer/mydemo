import React from "react";


class Mouse extends React.Component {
    state = {
        x:0,
        y:0
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
        return this.props.children(this.state)
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMouseMove)
    }
}

export default Mouse
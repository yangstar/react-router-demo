import React from 'react';
import { Link } from 'react-router'
class Index extends React.Component {
    render () {
        return (
            <div>
                module2
                {this.props.children}
            </div>
        );
    }
}
export default Index;


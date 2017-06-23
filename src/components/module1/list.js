import React from 'react';
import { Link } from 'react-router'
class List extends React.Component {
    render () {
        return (
            <div>
                我是列表list
                <Link to="/module1/detail">详情</Link>
            </div>
        );
    }
}
export default List;

import React from 'react'
import { Link } from 'react-router'
class NewDetail extends React.Component {
    render () {
        return (
            <div>
                我是资讯详情页
                {this.props.params.id}
                <br/>
                <Link to="/news">返回资讯列表</Link>
            </div>
        )
    }
}
export default NewDetail
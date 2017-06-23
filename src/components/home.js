import React from 'react'
import { Link } from 'react-router'
class Home extends React.Component {
    render () {
        return (
            <div>
                <div>
                    我是首页
                </div>
                <ul>
                    <li>
                        <Link to="/module1/list">module1列表</Link>
                    </li>
                    <li>
                        <Link to="/module2/list">module2列表</Link>
                    </li>
                </ul>
                
                

                
            </div>
        )
    }
}
export default Home
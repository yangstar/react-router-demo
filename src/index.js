import React from 'react'
import { render } from 'react-dom'
import { Link, IndexLink } from 'react-router'

class Index extends React.Component {
    
    render () {
        return (
            <div>
                
                <ul>
                    {
                        <li>
                            <IndexLink activeStyle={{color: 'red'}} to="/">首页</IndexLink>
                        </li>
                    }
                    {
                    // <li>
                    //     <Link activeStyle={{color: 'red'}} onlyActiveOnIndex={true} activeClassName="active" to="/">首页</Link>
                    // </li>
                    }
                    <li>
                        <Link activeStyle={{color: 'red'}} onlyActiveOnIndex={true} to="/">首页</Link>
                    </li>
                    <li>
                        <Link activeStyle={{color: 'red'}} to="/about">关于我们</Link>
                    </li>
                    <li>
                        <Link activeStyle={{color: 'red'}} to="/introduce">产品介绍</Link>  
                    </li>
                    <li>
                        <Link activeStyle={{color: 'red'}} to="/news">最新资讯</Link>
                    </li>
                </ul>
                <div>******************我是头部********************</div>
                <br/>
                <div>
                    {this.props.children || '你好，我是首页'}
                </div>
                <div>******************我是尾部********************</div>
            </div>
        )
    }
}
export default Index;
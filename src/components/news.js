import React from 'react'
import { Link, Redirect  } from 'react-router'

class News extends React.Component {
    render () {
        let data = [
            {
                id: '1',
                title: '资讯1',
                content: '资讯1111111111111'
            },{
                id: '2',
                title: '资讯2',
                content: '资讯2222222222222'
            },{
                id: '3',
                title: '资讯3',
                content: '资讯3333333333333'
            },
        ]
        return (
            <div>
                <ul>
                {
                    data.map( t => {
                        return (
                            <li key={`li-` + t.id}>
                                <Link to={`/news/newDetail/`+ t.id} >{t.title}</Link>
                            </li>                          
                        )
                    }) 
                }
                </ul>
                {this.props.children}
            </div>
        )
    }
}
export default News
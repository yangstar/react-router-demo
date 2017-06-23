// *****************context对象es6写法******************
import React from 'react';
import PropTypes from 'prop-types'
import { Link, browserHistory  } from 'react-router'

class About extends React.Component{
    constructor(props, context) {
        super(props, context);
        
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit () {
        // browserHistory.push('/');
        this.context.router.push('/')
        // this.aa();
    }
    aa() {
        console.log('我是aa');
    }
    render () {
        return (
            <div>
                关于我们~~
                <Link to='/'>返回首页</Link>

                <p>问题反馈</p>
                
                    <input type="text"/>
                    <input type="button" value="提交" onClick={this.handleSubmit}/>
                
            </div>
            
        )
    }
}
About.contextTypes = {
    router: PropTypes.object
}
export default About


// // *****************context对象es5写法******************
// import React from 'react';
// import { Link, browserHistory } from 'react-router'

// let About = React.createClass({
//     contextTypes: {
//       router: React.PropTypes.object  
//     },
//     handleSubmit () {
//         // browserHistory.push('/');
//         this.context.router.push('/')
//     },
//     render () {
//         return (
//             <div>
//                 关于我们~~
//                 <Link to='/'>返回首页</Link>

//                 <p>问题反馈</p>
//                 <form>
//                     <input type="text"/>
//                     <input type="button" value="提交" onClick={this.handleSubmit}/>
//                 </form>
//             </div>
            
//         )
//     }
// })

// export default About
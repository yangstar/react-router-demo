# react-router-demo
纯react-router实现多模块项目搭建

此demo以react-router 2.x为基础

1.路由配置

方法一：使用JSX嵌套

	ReactDom.render(
	    <Router history={hashHistory} >
	        <Route path='/' component={Index}  >
	            <IndexRoute component={Home} onEnter={() => {
	                    console.log('Home');
	                }}></IndexRoute>
	            <Route path="about" component={About}></Route>
	            <Route path="introduce" component={Introduce}></Route>
	            <Route path="news">
	                <IndexRoute component={News} onEnter={() => {
	                    console.log('News');
	                }}></IndexRoute>
	                <Route path="newDetail/:id" component={NewDetail} onEnter={() => {
	                    console.log('newDetail');
	                }}></Route>
	            </Route>  
	        </Route>
	    </Router>
	    , 
	    document.getElementById('app')
	);

方法二：使用原生route数组对象

	const routeConfig = {
        path: '/',
        component: Index,// 作为子路由的外壳，点击自路由后，此组件始终都显示
        indexRoute: { component: Home }, // 作为子路由默认加载组件，点击子路由后，此组件会被替代
        childRoutes:[
            {path: 'about', component: About},
            {path: 'introduce', component: Introduce},
            // {path: 'news', component: Introduce},
            {
                path: 'news', 
                // component: News,   
                indexRoute: { component: News },
                childRoutes:[
                    {
                        path: 'newDetail/:id',
                        component: NewDetail
                    }
                ]
            },
            // {path: 'news(/*)', component: News},
            {   
                path: 'newDetail(/:id)', 
                component: NewDetail,
                onEnter: (nextState, replaceState) => {
                    console.log(111111111,nextState,replaceState);
                }
        
            }
        ] 
    }
	ReactDom.render(
	    <Router history={browserHistory} routes={routeConfig}/>
	    , 
	    document.getElementById('app')
	);

2.跳转

1. 正常跳转`Link`
2. 点击跳转，如点击按钮跳转

	- browserHistory.push
	- context对象（ps：es5与es6写法不同）
	
	es5用法

        import React from 'react';
    	import { Link, browserHistory } from 'react-router'
    	
    	let About = React.createClass({
	    	contextTypes: {
	    	  router: React.PropTypes.object  
	    	},
	    	handleSubmit () {
	    		// browserHistory.push('/');

	    		//this.context.router.push('/')；
				this.context.router.push({pathname: '/', params: {})
	    	},
	    	render () {
		    	return (
			    	<div>
			    		关于我们~~
			    		<Link to='/'>返回首页</Link>
			    	
			    		<p>问题反馈</p>
				    	<form>
					    	<input type="text"/>
					    	<input type="button" value="提交" onClick={this.handleSubmit}/>
				    	</form>
			    	</div>
		    	
		    	)
	    	}
    	})
    	
    	export default About

		

	es6用法

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


	// 获取参数

	    componentDidMount() {
			let params = this.props.location.params
		}



3.默认路由IndexRouter 和 IndexLink


1. IndexRouter给父组件配置默认加载组件
2. IndexLink解决根路由一直高亮问题

方式一：
	
	<IndexLink to="/">首页</IndexLink>
    
方式二：

	<Link onlyActiveOnIndex={true} activeClassName="active" to="/">首页</Link>


4.结合webpack代码拆分

使用webpack

	getChildRoutes(nextState, cb) {
	    require.ensure([], (require) => {
	      cb(null, [
	        {
	          path: 'list',
	          getComponents(nextState, cb) {
	            require.ensure([], function (require) {
	              cb(null, List)
	            })
	          },
	        },
	        {
	          path: 'detail',
	          getComponents(nextState, cb) {
	            require.ensure([], function (require) {
	              cb(null, Detail)
	            })
	          },
	        }
	      ])
	    })
	  },
	
	  getIndexRoute(nextState, cb) {
	      require.ensure([], function (require) {
	        cb(null, List)
	      })
	      return cb()
	  },
	
	  getComponents(nextState, cb) {
	    require.ensure([], (require) => {
	      cb(null, Index)
	    })
	  }
	
未使用webpack

	  getChildRoutes(nextState, cb) {
	    cb(null, [
	        {
	          path: 'list',
	          getComponents(nextState, cb) {
	            cb(null, List)
	          },
	        },
	        {
	          path: 'detail',
	          getComponents(nextState, cb) {
	            cb(null, Detail)
	          },
	        }
	      ])
	  },
	
	  getIndexRoute(nextState, cb) {
	      cb(null, List)
	      return cb()
	  },
	
	  getComponents(nextState, cb) {
	    cb(null, Index)
	  }

ps：其中 `getChildRoutes`, `getIndexRoute`, `getComponents`, `getComponent`仅实现了异步加载，
    `require.ensure`实现了代码拆分
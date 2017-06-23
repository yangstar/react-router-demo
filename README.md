# react-router-demo
纯react-router实现多模块项目搭建

此demo以react-router 2.x为基础

1.路由配置

    // 方法一：使用JSX嵌套
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

	// 方法二：使用原生route数组对象
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




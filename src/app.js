import React from 'react'
import ReactDom from 'react-dom'
import { Router,Route,Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Index from './index'
import About from './components/about'
import Home from './components/home'
import Introduce from './components/introduce'
import News from './components/news'
import NewDetail from './components/newDetail'

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

// const routeConfig = {
//         path: '/',
//         component: Index,// 作为子路由的外壳，点击自路由后，此组件始终都显示
//         indexRoute: { component: Home }, // 作为子路由默认加载组件，点击子路由后，此组件会被替代
//         childRoutes:[
//             {path: 'about', component: About},
//             {path: 'introduce', component: Introduce},
//             // {path: 'news', component: Introduce},
//             {
//                 path: 'news', 
//                 // component: News,   
//                 indexRoute: { component: News },
//                 childRoutes:[
//                     {
//                         path: 'newDetail/:id',
//                         component: NewDetail
//                     }
//                 ]
//             },
//             // {path: 'news(/*)', component: News},
//             {   
//                 path: 'newDetail(/:id)', 
//                 component: NewDetail,
//                 onEnter: (nextState, replaceState) => {
//                     console.log(111111111,nextState,replaceState);
//                 }
        
//             }
//         ] 
//     }




// // 多个根路由案例
// import Module1Router from './components/module1/router'
// import Module2Router from './components/module2/router'
// const routeConfig = {
//         path: '/',
//         // component: Index, //一定要是一个组件，不能是一个div
//         indexRoute: { component: Home }, // 默认加载子组件home，如果没有 默认路由indexRoute，那么打开根路由，进来是什么东西都没有的
//         childRoutes:[
//             Module1Router,
//             Module2Router
//         ] 
//     }

// ReactDom.render(
//     <Router history={browserHistory} routes={routeConfig}/>
//     , 
//     document.getElementById('app')
// );

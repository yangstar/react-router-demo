import Index from './index'
import List from './list'
import Detail from './detail'

const Router = {

  path: 'module1/',
  onEnter: () => {
    console.log('我是module1');
  },

  getChildRoutes(location, cb) {
      cb(null, [
        {
          path: 'list',
          onLeave: () => {
            alert('我是list，我要离开前往其他路由啦~');
          },
          getComponents(location, cb) {
              cb(null, List)
          },
        },
        {
          path: 'detail',
          getComponents(location, cb) {
              cb(null, Detail)
          }
        },
      ])
    
  },

  getIndexRoute(location, cb) {
      cb(null, {
        component: List
      })
  },

  getComponents(location, cb) {
      cb(null, Index)
  }


  // 结合webpack代码进行拆分
  // getChildRoutes(location, cb) {
  //   require.ensure([], (require) => {
  //     cb(null, [
  //       {
  //         path: 'list',
  //         onLeave: () => {
  //           alert('我是list，我要离开前往其他路由啦~');
  //         },
  //         getComponents(location, cb) {
  //           require.ensure([], (require) => {
  //             cb(null, List)
  //           })
  //         },
  //       },
  //       {
  //         path: 'detail',
  //         getComponents(location, cb) {
  //           require.ensure([], (require) => {
  //             cb(null, Detail)
  //           })
  //         }
  //       },
  //     ])
  //   })
  // },

  // getIndexRoute(location, cb) {
  //   require.ensure([], (require) => {
  //     cb(null, {
  //       component: List
  //     })
  //   })
  // },

  // getComponents(location, cb) {
  //   require.ensure([], (require) => {
  //     cb(null, Index)
  //   })
  // }
}

export default Router;
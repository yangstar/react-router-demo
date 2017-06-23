import Index from './index'
import List from './list'
import Detail from './detail'

const loanRouter = {

  path: 'module2/',
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
}

export default loanRouter;
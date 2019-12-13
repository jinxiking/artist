export default [
    {
      path: '/',
      component: () => import('../../views/home'),
      children: [
        {
          path: '/',
          component: () => import('../../views/home/homeIndex'),
          name: 'homeIndex',
          meta: {
            isLogin: false,
            isFooterShow: true,
            title : '首页-包拯'
          }
        }
      ]
    }
  ]
  
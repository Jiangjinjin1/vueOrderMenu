const Home = r => require.ensure([], () => r(require('../page/home/home')), 'home')

export default [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  }
]

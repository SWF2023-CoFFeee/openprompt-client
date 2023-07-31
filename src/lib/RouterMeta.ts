export interface IRouterMeta {
  name?: string;
  path: string;
  isShow: boolean;
}

export type RouterMetaType = {
  [key: string]: IRouterMeta;
};

const RouterMeta: RouterMetaType = {
  HomePage: {
    name: 'Home',
    path: '/',
    isShow: true,
  },
  AuthPage: {
    name: 'Auth',
    path: '/auth',
    isShow: false,
  },
  MarketPage: {
    name: 'Market',
    path: '/market',
    isShow: true,
  },
  ProductDetailPage: {
    name: 'PDP',
    path: '/product/:productid',
    isShow: true,
  },
  CopyrightRegisterPage: {
    name: 'CopyrightRegister',
    path: '/register/copyright',
    isShow: true,
  },
  ProductRegisterPage: {
    name: 'ProductRegister',
    path: '/register/product',
    isShow: true,
  },
  SuccessPage: {
    name: 'Success',
    path: '/success',
    isShow: true,
  },
  MyPage: {
    name: 'Mypage',
    path: '/mypage',
    isShow: true,
  },
  DesignSystemPage: {
    name: 'Design',
    path: '/design-system',
    isShow: true,
  },
};

export default RouterMeta;

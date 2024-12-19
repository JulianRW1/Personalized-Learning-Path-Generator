
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/welcome",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/welcome"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/signup"
  },
  {
    "renderMode": 2,
    "route": "/profile"
  }
],
  assets: {
    'index.csr.html': {size: 692, hash: 'd084fed10bdad996b6b74bae79a3f71ab384892f4a32bcc721457153f45ee506', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1005, hash: '57dcb717453cdd634702dc5da6bea5e8757d45a4e308c122baea17978ddabccb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'welcome/index.html': {size: 4253, hash: 'a1418f732c2449962d50caaee2df987e3b33ecf8bf4471650e83dc4669bcca3e', text: () => import('./assets-chunks/welcome_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 5173, hash: '7beb58a8114cec4b4e448153fc9c1001f2eaf0cefc128c1125e32ccac8aeef5e', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 5116, hash: 'd7d0a7985a53bbd4b65919f9094e256cb834ee86c83675500c7357eda6c0f64e', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 9410, hash: '16569a078c7bae6ffb98d1529891c32d68c6dbd3246e5149fdd34b2b6846f657', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 5768, hash: '5a9ca0d8346ea4d869258eb664efa5b5784097afd8ac71480e01ac062018f525', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'styles-HEGO4NNR.css': {size: 76, hash: 'vWlrQcvdkDc', text: () => import('./assets-chunks/styles-HEGO4NNR_css.mjs').then(m => m.default)}
  },
};

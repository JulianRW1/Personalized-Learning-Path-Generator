
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
    'index.csr.html': {size: 692, hash: 'bef26f2f12cd01b695e393f6824eb5e9a1ef4be0fd6e7df1cababe701c4e8621', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1005, hash: 'f10196ff9f5a77db7231d08d1d9f3b7b9a5e9cd148f124a65f7b3e114f060da0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'welcome/index.html': {size: 4253, hash: 'acfc0d94ab5abfb1564f7831a3479e9c211c7b0b73e6586c0c5096c0db680402', text: () => import('./assets-chunks/welcome_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 5173, hash: 'a0d586981ab41524fd740db52dd24791d522bd1ec9037b562c57bb5bdca855ce', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 5768, hash: '686ee59babdd292890451946241374af736fa79b6bb4a060749f88e0bbf18e16', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 9442, hash: 'aa74714541fd9d19b18c53b0103ef186aa7749d7a0dbb0991fd7856a87538337', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 9410, hash: '06172735c9beab2a0dc794dc5c8cd71a55d3aca5fa6526ec403b7210756473f9', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'styles-HEGO4NNR.css': {size: 76, hash: 'vWlrQcvdkDc', text: () => import('./assets-chunks/styles-HEGO4NNR_css.mjs').then(m => m.default)}
  },
};

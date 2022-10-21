import config from '@/config';

//layouts
import { HeaderOnly } from '@/layouts/';

//pages
import Home from '@/pages/Home';
import Following from '@/pages/Following';
import Upload from '@/pages/Upload';
import Profile from '@/pages/Profile';
import Search from '@/pages/Search';

//sẽ dùng cho những router mà bạn muốn ko cần đăng nhập vẫn xem được
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];
//những router phải đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };

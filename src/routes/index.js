//layouts
import { HeaderOnly } from '@/components/Layout/';

//pages
import Home from '@/pages/Home';
import Following from '@/pages/Following';
import Upload from '@/pages/Upload';
import Profile from '@/pages/Profile';
import Search from '@/pages/Search';

//sẽ dùng cho những router mà bạn muốn ko cần đăng nhập vẫn xem được
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/@:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];
//những router phải đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };

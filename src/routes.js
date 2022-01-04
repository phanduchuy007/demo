import Main_Admin from './components/Admin/Main_Admin';
import ForgotPass from './components/ForgotPassword/ForgotPass';
import NewPass from './components/ForgotPassword/NewPass';
import OtpCheck from './components/ForgotPassword/OtpCheck';
import Login from './components/Login';
import LoginAdmin from './components/LoginAdmin';
import ChangePass from './components/Profile/ChangePass';
import Register from './components/Register';
import AddProductPage from './pages/AddProductPage';
import AgentPage from './pages/AgentPage';
import BuyCategoryPage from './pages/BuyCategoryPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ManamentPage from "./pages/ManamentPage";
import NotFoundPage from './pages/NotFoundPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProfilePage from './pages/ProfilePage';
import RentCategoryPage from './pages/RentCategoryPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/about',
        exact: false,
        main: () => <AgentPage />
    },
    {
        path: '/buy',
        exact: false,
        main: () => <BuyCategoryPage />
    },
    {
        path: '/rent',
        exact: false,
        main: () => <RentCategoryPage />
    },
    {
        path: '/addproduct',
        exact: false,
        main: () => <AddProductPage />
    },
    {
        path: '/manamentPage',
        exact: false,
        main: () => <ManamentPage />
    },
    {
        path: '/profilePage',
        exact: false,
        main: () => <ProfilePage />
    },
    {
        path: '/contact',
        exact: false,
        main: () => <ContactPage />
    },
    {
        path: '/forgotPass',
        exact: false,
        main: () => <ForgotPass />
    },
    {
        path: '/otpCheck/:email',
        exact: false,
        main: () => <OtpCheck />
    },
    {
        path: '/newPass/:email',
        exact: false,
        main: ({match}) => <NewPass match={match.params}/>
    },
    {
        path: '/adminPage',
        exact: false,
        main: () => <Main_Admin />
    },
    {
        path: '/loginAdmin',
        exact: false,
        main: () => <LoginAdmin />
    },
    {
        path: '/productDetailPage/:id',
        exact: false,
        main: ({ match }) => <ProductDetailPage match={match.params} />
    },
    {
        path: '/manament',
        exact: false,
        main: () => <ManamentPage />
    },
    {
        path: '/changePass',
        exact: false,
        main: () => <ChangePass />
    },
    {
        path: '/login',
        exact: false,
        main: () => <Login />
    },
    {
        path: '/register',
        exact: false,
        main: () => <Register />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    },
];

export default routes;

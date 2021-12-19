
import SignIn from './components/Common/SignIn'
import NotFound from './components/Common/NotFound'
import Admin from './container/Admin/User/Pages/UserPage'
import MovieDetail from './container/Client/MovieDetail'
import SeatPlan from './container/Client/SeatPlan'

const routes = [
    {
        path: "/sign-in",
        exact: true,
        element: < SignIn />
    },
    {
        path: "/admin",
        exact: true,
        element: < Admin />
    },
    {
        path: "*",
        exact: false,
        element: < NotFound />
    },
    {
        path: "/movie-detail/:maPhim",
        exact: true,
        element: < MovieDetail />
    },
    {
        path: "/seat-plan/:maLichChieu",
        exact: true,
        element: < SeatPlan />
    }
]

export default routes
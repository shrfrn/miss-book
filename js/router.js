import bookDetails from "./pages/book-details.js"
import homePage from "./pages/home-page.js"
import aboutPage from "./pages/about-page.js"
import missBook from "./pages/miss-book.js"

const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/about',
        component: aboutPage
    },
    {
        path: '/book',
        component: missBook
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    },
]

export const router = new VueRouter({routes})
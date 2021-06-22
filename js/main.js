import userMsg from './cmps/user-msg.js'
import missBookHeader from './cmps/header.js'
import missBookFooter from './cmps/footer.js'
import { router } from "./router.js"

const options = {
    el: '#app',
    router,
    template:`
        <section>
            <user-msg />
            <miss-book-header :title="'Miss Book!'"/>
            <router-view />
            <miss-book-footer :text="'Come again soon :-)'"/>
        </section>
    `,
    components: {
        userMsg,
        missBookHeader,
        missBookFooter,
    }
}
new Vue(options)
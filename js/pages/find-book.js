import { bookService } from "../services/book-service.js";
import { googleBooks } from "../services/google-books-service.js"
import googleBookList from "../cmps/google-book-list.js";

export default 
{
    template:`
        <section class="find-book app-main">
            <h2>Search Google Books...</h2>
            <input type="text" v-model="queryStr" placeholder="type here...">
            <button @click="getBooks">Search</button>

            <google-book-list v-if="googleBooks" :googleBooks="googleBooks"/>
        </section>
    `,
    data() {
        return {
            queryStr: '',
            googleBooks: null,
        }
    },
    methods: {
        getBooks(){
            googleBooks.query(this.queryStr)
                .then(books => {
                    this.googleBooks = books.data.items
                })
        }
    },
    components: {
        googleBookList,
    }
}
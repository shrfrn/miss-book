import { bookService } from "../services/book-service.js";
import { googleBooks } from "../services/google-books-service.js"
import googleBookList from "../cmps/google-book-list.js";

export default 
{
    template:`
        <section class="find-book app-main">
            <h2>Search Google Books...</h2>
            <input type="text" placeholder="type here...">
            <button @click="getBooks">Search</button>

            <google-book-list v-if="googleBooks" :googleBooks="googleBooks"/>
        </section>
    `,
    data() {
        return {
            googleBooks: null,
        }
    },
    methods: {
        getBooks(){
            console.log('getBooks...');
            googleBooks.query()
                .then(books => {
                    this.googleBooks = books
                    console.log(this.googleBooks);
                    // this.googleBooks = books.data.items
                })
        }
    },
    components: {
        googleBookList,
    }
}
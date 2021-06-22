import { bookService } from '../services/book-service.js'
import bookList from '../cmps/book-list.js'
import bookDetails from "./book-details.js"
import bookFilter from '../cmps/book-filter.js'

/* Page: Miss Book */

export default {
    template:`
        <section class="miss-book">
            <book-filter @filter=setFilter></book-filter>
            <book-list :books="getBooks" @selected="bookSelected"/>
            <book-details 
                v-if="selectedBook" 
                :book="selectedBook" 
                @close-detail="selectedBook = null"/>      
        </section>
    `,
    data() {
        return {
            books: bookService.query(),
            selectedBook: null,
            filterBy: null,
        }
    },

    methods: {
        bookSelected(book){
            this.selectedBook = book
            console.log(this.selectedBook);
        },
        setFilter(filterBy){
            this.filterBy = filterBy
        },
    },
    
    computed: {
        getBooks(){
            
            if(this.filterEmpty)   return this.books

            let filteredBooks = null

            if(this.filterBy.title){
                const titleFilter = this.filterBy.title.toLowerCase()
                filteredBooks = this.books.filter(book => {
                    return book.title.toLowerCase().includes(titleFilter)
                })
            }
            if(this.filterBy.fromPrice){
                if(!filteredBooks)  filteredBooks = this.books
                filteredBooks = filteredBooks.filter(book => {
                    return book.listPrice.amount >= this.filterBy.fromPrice
                })
            }
            if(this.filterBy.toPrice){
                if(!filteredBooks)  filteredBooks = this.books
                filteredBooks = filteredBooks.filter(book => {
                    return book.listPrice.amount <= this.filterBy.toPrice
                })
            }
            return filteredBooks
        }, 
        
        filterEmpty(){
            return (
                !this.filterBy ||
                (this.filterBy.title === '' || this.filterBy.title === null) &&
                (this.filterBy.fromPrice === '' || this.filterBy.fromPrice === null) && 
                (this.filterBy.toPrice === '' || this.filterBy.toPrice === null) 
            )
        }
    },

    created() {
        bookService.query()
            .then(books => this.books = books)
    },

    destroyed() {
    },
    components: {
        bookList,
        bookDetails,
        bookFilter,
    }
}
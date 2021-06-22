import { bookService } from "../services/book-service.js"
// Component: google-book-preview

export default
{
    props: ['googleBook'],
    template: `
        <article>
            <span>{{googleBook.volumeInfo.title}}</span>
            <button @click="addGoogleBook">+</button>
        </article>
    `,
    data() {
        return {
        }
    },

    methods: {
        addGoogleBook() {
            bookService.addGoogleBook(this.googleBook)
        }
    },

    computed: {
    },

    created() {
    },

    mounted() {
    },

    destroyed() {
    }
}

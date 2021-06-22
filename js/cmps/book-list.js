import bookPreview from '../cmps/book-preview.js'

// Component: book-list

export default 
{
    props: ['books'],
    template: `
        <ul class="book-list">
            <li v-for="book in books" :key="book.id" class="book-preview-container">
                <book-preview :book="book" class="book-preview" />
                <router-link :to="'/book/' + book.id">Details</router-link>
            </li>
        </ul>
    `,
    data() {
        return {
        }
    },

    methods: {
    },

    computed: {
    },

    created() {
    },

    destroyed() {
    },

    components: {
        bookPreview,
    }
}

import googleBookPreview from "./google-book-preview.js"

// Component: google-book-list

export default 
{
    props: ['googleBooks'],
    template: `
        <ul>
            <li v-for="googleBook in googleBooks" :key="googleBook.volumeInfo.id">
                <google-book-preview :googleBook="googleBook"/>
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
        googleBookPreview,
    }
}

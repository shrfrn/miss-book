import reviewPreview from "./review-preview.js"
import { bookService } from "../services/book-service.js";

// Component: review-list

export default {
    props: ['book'],
    template: `
        <section class="review-list">
            <review-preview 
                v-for="review in book.reviews"  
                :key="review.id"  
                :review="review"  
                @remove-review="removeReview"/>
        </section>
    `,
    data() {
        return {
        }
    },

    methods: {
        removeReview(reviewId){
            this.$emit('remove-review', reviewId)
        },
    },

    computed: {
    },

    created() {
    },

    destroyed() {
    },

    components: {
        reviewPreview,
    }
}
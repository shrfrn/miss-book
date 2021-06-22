import { bookService } from "../services/book-service.js"
import longText from "./long-text.js"

// Component: review-preview

export default {
    props: ['review'],
    template: `
        <article class="review-preview"> 
            <p>Review by {{review.userName}} {{review.reviewDate}} 
                <span class="star-rating">{{getRating}}</span>
                <button @click="removeReview">x</button>
            </p>
            <long-text :text="review.text" :length="30"/>
        </article>
    `,
    data() {
        return {
        }
    },

    methods: {
        removeReview(){
            this.$emit('remove-review', this.review.id)
        },
    },

    computed: {
        getRating(){
            return '⭐'.repeat(this.review.rating)
        }
    },

    created() {
    },

    destroyed() {
    },

    components: {
        longText,
    }
}
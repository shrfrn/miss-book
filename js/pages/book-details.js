// Component: book-details
import longText from "../cmps/long-text.js"
import reviewList from "../cmps/review-list.js"
import { bookService } from "../services/book-service.js"
import { eventBus } from "../services/event-bus-service.js"

export default {
    template: `
        <section v-if="book" class="book-detail">
            <img :src="book.thumbnail" alt="">
            <div class="book-stats">
                <img v-if="book.listPrice.isOnSale" src="../../img/on-sale.png" alt="">
                <h1>{{book.title}}</h1>
                <h2>{{book.subtitle}}</h2>
                <h3>by
                    <span v-for="author in book.authors">
                        {{author}} 
                    </span>
                </h3>
                <p>published: {{book.publishedDate}} {{bookAge}}</p>
                <p>
                    <span v-for="category in book.categories">
                        {{category}} 
                    </span>
                </p>
                <p>{{book.pageCount}} {{readLength}}</p>
                <h3 :class="priceStyling"><span v-bind:class=currencyIcon></span> {{book.listPrice.amount}}</h3>
                <p>{{book.language}}</p>
                <long-text :text="book.description" :length="100"/>
                <router-link :to="'/book/'">Back</router-link>
            </div>
            <section class="reviews-section">
                <review-list 
                    class="review-list"
                    v-if="book.reviews" 
                    :book="book"
                    :reviews="book.reviews"
                    @remove-review="removeReview"/>
                <form class="review-form" @submit.prevent="addReview">
                    <input v-model="review.userName" type="text" name="user-name" ref="userName">
                    <input v-model="review.reviewDate" type="date" name="read-on">
                    <select v-model="review.rating" name="book-ratin" id="">
                        <option value="0">Choose...</option>
                        <option value="1">⭐</option>
                        <option value="2">⭐⭐</option>
                        <option value="3">⭐⭐⭐</option>
                        <option value="4">⭐⭐⭐⭐</option>
                        <option value="5">⭐⭐⭐⭐⭐</option>
                    </select>
                    <textarea 
                        v-model="review.text" 
                        type="text" 
                        name="book-review"
                        rows="5"
                        cols="40">
                    </textarea>
                    <input type="submit">
                </form>
            </section>
        </section>
        
    `,
    data() {
        return {
            book: null,
            review: {
                id: '',
                userName: '',
                reviewDate: 0,
                rating: 0,
                text: '',
            },
        }
    },

    methods: {
        addReview(){
            bookService.addReview(this.review, this.book.id)
                .then(book => {
                    this.book = JSON.parse(JSON.stringify(book))
                    const msg = {text: 'Added review', type: 'success'}
                    eventBus.$emit('show-msg', msg)
                })
        },
        removeReview(reviewId){
            bookService.removeReview(this.book.id, reviewId)
                .then(book => {
                    this.book = JSON.parse(JSON.stringify(book))
                    const msg = {text: 'Removed review', type: 'success'}
                    eventBus.$emit('show-msg', msg)
                })
        },
},

    computed: {
        readLength(){

            if(this.book.pageCount > 500)   return 'Long reading!'
            if(this.book.pageCount > 200)   return 'Descent reading!'
            if(this.book.pageCount < 100)   return 'Light reading!'

            return ''
        },
        bookAge(){

            const now = new Date
            let bookAge = now.getFullYear() - this.book.publishedDate
            
            if(bookAge >= 10)   return 'Veteran book!'
            if(bookAge < 1)     return 'New!'

            return ''
        },
        priceStyling(){
            return {
                expensive: this.book.listPrice.amount > 150,
                cheap: this.book.listPrice.amount < 20,
            }
        },
        currencyIcon() {
            switch(this.book.listPrice.currencyCode) {
                case 'USD':
                    return {usd: true}
                case 'EUR':
                    return {eur: true}
                case 'ILS':
                    return {nis: true}
            }
        }
},

    components: {
        longText,
        reviewList,
    },

    created() {
        const { bookId } = this.$route.params
        bookService.getById(bookId)
            .then(book => this.book = book)
    },
    mounted(){
        // let elUserName = this.$refs.userName
        // elUserName.focus()
    },
    destroyed() {
    }
}

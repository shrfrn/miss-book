// Component: book-preview

export default
{
    props: ['book'],
    
    template: `
        <div class="book-preview">
            <p>{{book.title}}</p>
            <p class="book-price"><span v-bind:class=currencyIcon></span> {{book.listPrice.amount}}</p>
        </div>
    `,

    data() {
        return {
        }
    },

    methods: {
    },

    computed: {
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

    created() {
    },

    destroyed() {
    }
}
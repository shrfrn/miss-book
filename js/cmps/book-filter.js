// Component: book-filter

export default {
    template: `
        <div class="filter-inputs">
            <input v-model="filterBy.title" 
                @input="filter" 
                type="text" 
                placeholder="type to search">

            <input v-model="filterBy.fromPrice" 
                @input="filter" 
                type="number" 
                placeholder="type min. price">

            <input v-model="filterBy.toPrice" 
                @input="filter" 
                type="number" 
                placeholder="type max. price">
        </div>
    `,
    data() {
        return {
            filterBy: {
                title: '',
                fromPrice: null,
                toPrice: null,
            }
        }
    },

    methods: {
        filter(){
            console.log('filter', this.filterBy)
            this.$emit('filter', this.filterBy)
        }
    },

    computed: {
    },

    created() {
    },

    destroyed() {
    }
}

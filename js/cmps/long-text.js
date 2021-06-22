// Component: long-text

export default {
    props: ['text', 'length'],
    template: `
        <p>{{getText}} 
            <span class="long-text-link" @click="isShort = !isShort">{{getLink}}</span>
        </p>
    `,
    data() {
        return {
            isShort: true,
        }
    },

    methods: {
    },

    computed: {
        getText() {
            if (this.isShort) return this.text.substr(0, this.length)
            return this.text
        },
        getLink() {
            if (this.text.length < this.length) return ''
            if (this.isShort) return '... read more'
            return '<<< read less'
        }
    },

    created() {
    },

    destroyed() {
    }
}
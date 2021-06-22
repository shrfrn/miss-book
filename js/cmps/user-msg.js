import { eventBus } from "../services/event-bus-service.js";

// Component: user-msg

export default{
    template: `
        <div v-if="msg" class="user-msg" :class="msgAnimation">
            <p>{{msg.text}}</p>
        </div>
    `,
    data() {
        return {
            msg: null,
            easeIn: false,
            fadeOut: false,
        }
    },

    methods: {
        showMsg(msg) {
            console.log(msg);
            this.msg = msg;
            setTimeout(() => { this.easeIn = true }, 100);
            setTimeout(() => { this.fadeOut = true }, 2500);
            setTimeout(() => { 
                this.msg = null 
                this.easeIn = this.fadeOut = false
            }, 3000);
        }
    },

    computed: {
        msgAnimation(){
            return {easein: this.easeIn, fadeout: this.fadeOut}
        }
    },

    created() {
        eventBus.$on('show-msg', this.showMsg)
    },
    
    destroyed() {
        eventBus.$off('show-msg', this.showMsg)
    }
}
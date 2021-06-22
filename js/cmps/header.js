
// Component: header

export default 
{
    props: ['title'],
    template: `
    <header class="header-cmp">
        <h1>{{title}}</h1>
        <div class="navbar-links">
            <router-link :to="'/'">Home</router-link>
            <router-link :to="'/book'">Store</router-link>
            <router-link :to="'/about'">About</router-link>
        </div>
    </header>
    `,
}
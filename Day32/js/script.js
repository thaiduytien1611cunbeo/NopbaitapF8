F8.component('counter-app', {
    data: () => ({
        count: 0,
        title: 'Counter App',
    }),

    template: `
        <h2>{{ title }}</h2>
        <h3>Counted : {{ count }}</h3>
        <button v-on:click='count--'>-</button>
        <button v-on:click='count++'>+</button>
        <button v-on:dblclick='title= "I Love You 3000"'>Change Title</button>
    `,
});


F8.component("header-component", {
    template: `<h1>HEADER</h1>`
})

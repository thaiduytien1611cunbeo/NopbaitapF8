import { client } from "./client.js";
import { config } from "./config.js";
const { PAGE_LIMIT } = config;
const btnComeBack = document.querySelector('.icon-return-start')

const app = {
    rootEl: document.querySelector('.posts'),
    query: {
        // _sort: "id",
        _limit: PAGE_LIMIT,
        _page: 1,
    },

    render: function (posts) {
        const stripHtml = (html) => html.replace(/(<([^>]+)>)/ig, "");

        

        posts.map(({title, content}) => {
            const post = document.createElement('div');
            post.classList.add('post-item');

            post.innerHTML = `
            <div class="post-item-title">
                <div class="img">
                    <img src="../imageANDicon/onepice3.jpg" alt="">
                </div>
                <div class="title-text">${stripHtml(title)}</div>
            </div>

            <div class="post-item-img">
                <img src="../imageANDicon/onepice3.jpg" alt="">
            </div>

            <div class="post-item-content">${stripHtml(content)}</div>

            <div class="post-item-contact">
                <div class="x6s0dn4 x78zum5 xdt5ytf xl56j7k" bis_skin_checked="1"><span class=""><svg aria-label="Like" class="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Like</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg></span></div>
                <svg aria-label="Comment" class="x1lliihq x1n2onr6 x1roi4f4" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
            </div>
            `;

            this.rootEl.append(post);
        })
    },

    getPosts: async function (query = {}) {
        let queryString = new URLSearchParams(query).toString();
        queryString = queryString ? "?" + queryString : "";
        const { data:posts } = await client.get(`/posts${queryString}`);
        this.render(posts);
    },

    comeBack : function (btnComeBack) {
        btnComeBack.addEventListener('click', function (e) {
            window.scrollTo({top:0,behavior:'smooth'})
            btnComeBack.classList.remove('show');
        })  
    },

    start: function () {
        const _this = this;
        let isDrag = true;
        let initialHeight = 0;
        const minUpdate = window.screen.height / 1.2;

        this.getPosts(this.query);
        this.comeBack(btnComeBack);

        document.addEventListener('scroll', function (e) {
            if(window.scrollY > 1000) btnComeBack.classList.add('show');

            if(isDrag) {
                initialHeight = window.scrollY;
                isDrag = false;
            } else {
                if(window.scrollY - initialHeight > minUpdate) {
                    _this.query._page++;
                    _this.getPosts(_this.query);
                    isDrag = true;
                }
            }
        })
    }
}

//RUN APP
app.start();



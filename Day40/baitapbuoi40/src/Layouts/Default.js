import "bootstrap/dist/css/bootstrap.min.css";
import "../Assets/Style.scss";

export const DefaultLayout = () => {
    return `
        <header class="mb-3">
            <div class="container">
            <h1><a href="/" data-route>HEADER</a></h1>
            </div>
        </header>
        <main>
            <div class="container">
            <div class="row">
                <div class="col-3">
                <h2>Menu</h2>
                <ul>
                    <li><a href="/" data-route>Trang Chủ</a></li>
                    <li><a href="/gioi-thieu" data-route>Giới Thiệu</a></li>
                    <li><a href="/san-pham" data-route>Sản Phẩm</a></li>
                </ul>
                </div>
                <div class="col-9">
                    <div id="body">
                        
                    </div>
                </div>
            </div>
            </div>
        </main>
        <footer class="mt-3">
            <div class="container">
            <h1>FOOTER</h1>
            </div>
        </footer>
    `
}


import image from "./Assets/Images/404.jpg"
import "./Assets/Error.scss";

export const Error = () => {
    return `
        <div class="error-page">
            <img src="${image}" />
        </div>
    `
}   
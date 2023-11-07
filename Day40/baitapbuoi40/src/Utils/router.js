import Navigo from 'navigo'; // When using ES modules.
import { Error } from '../../src/Error';

export const routerLib = new Navigo('/');
const rootEL = document.querySelector('#root');

export const router = (listComponent, componentDefault) => {
    rootEL.innerHTML = componentDefault();

    const bodyEl = rootEL.querySelector('#body');

    listComponent.forEach(element => {
        console.log(element);
        routerLib.on(`${element.path}`, function () {
            bodyEl.innerHTML = element.component();
        })
        .notFound(() => {
            document.body.innerHTML = Error();
        })
        .resolve()
    });
    

    // .on('/san-pham/1', function () {
    //     bodyEl.innerHTML = listComponent[3].component({ params: {id:1}});
    // })

    // .on('/san-pham/2', function () {
    //     bodyEl.innerHTML = listComponent[3].component({ params: {id:2}});
    // })

    // .on('/san-pham/3', function () {
    //     bodyEl.innerHTML = listComponent[3].component({ params: {id:3}});
    // })

}

window.navigate = (path) => {
    return routerLib.navigate(`${path}`)
}

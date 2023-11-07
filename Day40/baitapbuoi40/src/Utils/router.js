import Navigo from 'navigo'; // When using ES modules.
import { Error } from '../../src/Error';

export const routerLib = new Navigo('/', { linksSelector: "a" });
const rootEL = document.querySelector('#root');

export const router = (listComponent, componentDefault) => {
    rootEL.innerHTML = componentDefault();

    const bodyEl = rootEL.querySelector('#body');

    listComponent.forEach((element) => {
        routerLib.on(element.path, function (data) {
            console.log(data);
            const id = data.data?.id;

            if(id) {
                if(/^[0-9]*$/.test(id)) {
                    bodyEl.innerHTML = element.component({ params: { id:id }});
                } else {
                    document.body.innerHTML = Error();
                }
            } else {
                bodyEl.innerHTML = element.component();           
            }

        })
        .resolve()
    });

    routerLib.notFound(() => {
        document.body.innerHTML = Error();
    }).resolve()
}

window.navigate = (path) => {
    return routerLib.navigate(`${path}`)
}

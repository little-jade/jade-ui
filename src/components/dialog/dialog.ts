import Dialog from './Dialog.vue';
import {render, h} from 'vue';

function open(title:string, content:string,) {
    return new Promise((rerolve, reject)=>{
        const props = {
            title,
            visible:true,
            onAction(action:string){
                render(null, container);
                if(action == 'ok') rerolve(action);
                reject(action);
            }
        };
        const container = document.createElement('div');
        const vnode = h(Dialog, props);
        render(vnode, container);
        document.body.append(container.firstChild!);
    });

}
export default {
    alert(title:string, content:string) {
        return open(title, content);
    },
    confirm(title:string, content:string) {
        return open(title, content);
    }
}
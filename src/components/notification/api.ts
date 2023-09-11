import { ref, watch, h, render, shallowRef, computed, reactive, watchEffect } from "vue";
import NotificationGroup from './NotificationGroup.vue';

type Placement = 'top'|'top-left'|'top-right'|'bottom'|'bottom-left'|'bottom-right';
type NoticeType = 'success'|'info'

interface Notice {
    key: string
    placement: Placement
    title: string
    content: string
    onClose?: ()=>void
}

interface OpenConfig {
    placement: Placement
    title: string
    content: string
    type: NoticeType
}

let index = 0;
const placementMap = new Map();

function createNoticeGroup(placement: string) {
    const notices = ref<Notice[]>([]);
    const props = {
        notices: notices,
        placement,
        onRemove(key:string){
            notices.value = notices.value.filter(item => item.key!==key)
        },
        onAllRemoved(){
            render(null, container);
        }
    };
    const vm = h(NotificationGroup, props);
    const container = document.createElement('div');
    render(vm, container);
    document.body.append(container.firstChild!);

    return {
        add(notice:Notice) {
            notices.value.push(notice);
        },
        clear() {
            notices.value = notices.value.slice(1);
        }
    }
}
function getGroup(placement:string) {
    if(placementMap.has(placement)) return placementMap.get(placement);
    const group = createNoticeGroup(placement);
    placementMap.set(placement, group);
    return group;
}

function add(config:OpenConfig) {
    const {placement} = config;
    const key = `notice_${placement}_${index++}`;
    const instance: Notice = {
        ...config, 
        key,
        title: key,
        content: key,
    };
    getGroup(placement).add(instance);
}
function clear() {
    for(const group of placementMap.values()) {
        group.clear();
    }
}
export default {
    open(message:string) {
        add({
            title: message,
            content: '',
            placement: 'top-right',
            type: 'info'
        });
    },
    clear() {
        clear();
    }
}
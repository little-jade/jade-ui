import { ref, h, render } from "vue";
import NotificationGroup from './NotificationGroup.vue';

export type Placement = 'top'|'top-left'|'top-right'|'bottom'|'bottom-left'|'bottom-right';
export type NoticeType = 'success'|'info'

interface Notice {
    key: string
    placement: Placement
    title: string
    content: string
    onClose?: ()=>void
}

export interface OpenConfig {
    placement: Placement
    title: string
    content: string
    type?: NoticeType
    duration?: number
    showClose?: boolean
}

let index = 0;
const placementMap = new Map();

function createNoticeGroup(placement: Placement) {
    const notices = ref<Notice[]>([]);
    const props = {
        notices: notices,
        placement,
        onRemove(key:string){
            notices.value = notices.value.filter(item => item.key!==key)
        },
        onAllRemoved(){
            render(null, container);
            placementMap.delete(placement);
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
            notices.value = [];
        }
    }
}
function getGroup(placement:Placement) {
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
    };
    getGroup(placement).add(instance);
}
function clear() {
    for(const group of placementMap.values()) {
        group.clear();
    }
}
export default {
    open(config: OpenConfig) {
        add(config);
    },
    clear() {
        clear();
    }
}
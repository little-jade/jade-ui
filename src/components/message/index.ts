import notification from './../notification';
import type { NoticeType } from './../notification';

const message: Record<string,any> = {};
['success','error','info','warning'].forEach(type => {
    message[type] = function(content: string) {
        notification.open({
            placement: 'top',
            title: content,
            content: '',
            showClose: false,
            duration: 2500,
            type: type as NoticeType
        });
    }
});
export default message;
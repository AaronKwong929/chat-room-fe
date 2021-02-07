import { ElInput, ElAvatar, ElButton } from 'element-plus';

const Element = {
    install: function (Vue: any) {
        Vue.use(ElInput);
        Vue.use(ElAvatar);
        Vue.use(ElButton);
    },
};

export default Element;

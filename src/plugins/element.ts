import {
    ElInput,
    ElAvatar,
    ElButton,
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem,
} from 'element-plus';

const Element = {
    install: function (Vue: any) {
        Vue.use(ElInput);
        Vue.use(ElAvatar);
        Vue.use(ElButton);
        Vue.use(ElDropdown);
        Vue.use(ElDropdownMenu);
        Vue.use(ElDropdownItem);
    },
};

export default Element;

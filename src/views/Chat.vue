<template>
    <div
        class="chat"
        :style="{
            '--bg-image': `url('${backgroundImage}')`,
        }"
    >
        <div class="chat--sidebar">
            <chat-sidebar />
        </div>

        <div class="chat--contact-list">
            <chat-contact-list />
        </div>

        <div class="chat--details">聊天区域</div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { BACKGROUND_IMAGE } from '@/constants/index';

import ChatSidebar from '@/components/ChatSidebar.vue';
import ChatContactList from '@/components/ChatContactList.vue';

export default defineComponent({
    name: `Chat`,

    components: {
        ChatSidebar,
        ChatContactList,
    },

    setup() {
        const backgroundImage = ref(BACKGROUND_IMAGE);
        return {
            backgroundImage,
        };
    },
});
</script>

<style lang="scss" scoped>
.chat {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    overflow: hidden;
    box-shadow: 10px 20px 80px rgba(0, 0, 0, 0.8);
    border-radius: 6px;

    &::after {
        content: '';
        background: var(--bg-image) 0 / cover fixed;
        position: absolute;
        object-fit: cover;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        filter: blur(5px);
        z-index: -1;
        margin: -30px;
    }

    &--sidebar {
        flex: 1;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        overflow: hidden;
    }

    &--contact-list {
        flex: 3;
        background: rgba(0, 0, 0, 0.3);
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }

    &--details {
        flex: 10;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        background: lightcyan;
    }
}
</style>

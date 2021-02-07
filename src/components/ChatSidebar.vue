<template>
    <div class="sidebar">
        <div class="sidebar--avatar center">
            <el-avatar shape="square" size="large" :src="avatarUrl" />
        </div>

        <div class="sidebar--operate-area">
            <el-button
                icon="el-icon-more"
                @click="handleClick"
                size="small"
                plain
                round
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { AVATAR_URL } from '@/constants/index.ts';

export default defineComponent({
    name: `ChatSidebar`,

    setup() {
        const avatarUrl = ref(AVATAR_URL);
        const handleClick = (e: Event) => {
            console.log(e);
        };
        return {
            avatarUrl,
            handleClick,
        };
    },
});
</script>

<style lang="scss" scoped>
.sidebar {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    &--avatar {
        margin-top: 20px;

        &:hover {
            transform: scale(1.1);
            transition: all 0.3s;
            cursor: pointer;
        }
    }

    &--operate-area {
        margin-top: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }
}
</style>

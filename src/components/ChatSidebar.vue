<template>
    <div class="sidebar">
        <div class="sidebar--avatar center">
            <el-avatar shape="square" size="large" :src="avatarUrl" />
        </div>

        <div class="sidebar--operate-area">
            <i
                title="Info"
                class="iconfont icon-prompt icon"
                @click="handleClick(1)"
            />

            <i
                title="Github"
                class="iconfont icon-github icon"
                @click="handleClick(2)"
            />

            <i
                title="退出登录"
                class="iconfont icon-sign-out icon"
                @click="handleClick(3)"
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
        const handleClick = (e: number): void => {
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
        transition: all 0.3s;

        &:hover {
            transform: scale(1.2);
            transition: all 0.3s;
            cursor: pointer;
        }
    }

    &--operate-area {
        margin-top: auto;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        .icon {
            cursor: pointer;
            font-weight: 100;
            font-size: 2rem;
            color: white;
            transition: all 0.3s;
            margin-top: 20px;

            &:first-child {
                margin-top: 0;
            }

            &:hover {
                transition: all 0.3s;
                color: #3a8fb7;
            }
        }
    }
}
</style>

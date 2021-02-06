<template>
    <div class="router--wrapper">
        <router-view />
    </div>

    <img alt="background-image" :src="backgroundImage" class="background" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { BACKGROUND_IMAGE } from '@/constants/index';

export default defineComponent({
    name: 'App',

    setup() {
        const backgroundImage = ref(BACKGROUND_IMAGE);
        return {
            backgroundImage,
        };
    },
});
</script>

<style lang="scss" scoped>
.router--wrapper {
    width: 60%;
    height: 70vh;
    display: flex;
    box-shadow: 10px 20px 80px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    position: relative;
    z-index: 1;

    &::after {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        filter: blur(10px);
        margin: -30px;
        background-color: rgba(0, 0,0, 0.5);
        content: '';
        border-radius: 16px;
        display: block;
        transform: scale(1.08);
        object-fit: cover;
    }
}

.background {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    height: 100vh;
    width: 100%;
    z-index: -1;
    // background-attachment: fixed;
}
</style>

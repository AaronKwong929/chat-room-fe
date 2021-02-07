<template>
    <div class="sidebar">
        <el-input placeholder="输入内容" size="small" v-model="input" />
        {{ input }}
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: `ChatSidebar`,

    setup() {
        const input = ref(`321`);
        return {
            input,
        };
    },
});
</script>

<style lang="scss" scoped></style>

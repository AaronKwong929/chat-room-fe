<template>
    <div class="router--content">首页</div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: `Home`,
});
</script>

<style lang="scss" scoped>
.router--content {
    flex: 1;
    // background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    overflow: hidden;
    // border-radius: 16px;
    padding: 10px;
}
</style>

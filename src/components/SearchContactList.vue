<template>
    <el-input
        placeholder="搜索联系人"
        v-model="searchTerm"
        clearable
        size="small"
        class="input"
    >
        <template #append>
            <el-dropdown size="mini" @command="handleCommand">
                <i class="el-icon-arrow-down el-icon--right" />
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item command="a">黄金糕</el-dropdown-item>
                        <el-dropdown-item command="b">狮子头</el-dropdown-item>
                        <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
                        <el-dropdown-item command="e" divided
                            >蚵仔煎</el-dropdown-item
                        >
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </template>
    </el-input>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: `SearchContactList`,
    setup() {
        const searchTerm = ref(``);

        const handleCommand = (command: string): void => {
            console.log(command);
        };

        return {
            searchTerm,
            handleCommand,
        };
    },
});
</script>

<style lang="scss" scoped>
.input {
    width: 90%;
}
</style>

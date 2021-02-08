<template>
    <div class="chat--contact-list--item"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: `ContactListItem`,

    setup(props) {
        return {
            props,
        };
    },
});
</script>

<style lang="scss" scoped>
.chat--contact-list--item {
    width: 100%;
    height: 60px;
    background: rgba(0, 0, 0, 0.8);

    &--left {
        width: 60px;

        .avatar {
        }
    }

    &--right {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
}
</style>

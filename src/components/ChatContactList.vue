<template>
    <div class="chat--contact-list--top center">
        <search-contact-list />
    </div>

    <div class="chat--contact-list--bottom">
        <contact-list-item />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchContactList from '@/components/SearchContactList.vue';
import ContactListItem from '@/components/ContactListItem.vue';

export default defineComponent({
    name: `ChatContactList`,

    components: {
        SearchContactList,
        ContactListItem,
    },
});
</script>

<style lang="scss" scoped>
.chat--contact-list {
    &--top {
        width: 100%;
        height: 50px;
    }

    &--bottom {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        overflow: auto;
    }
}
</style>

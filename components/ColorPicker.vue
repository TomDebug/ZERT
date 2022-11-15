<template>
        <div style="padding-left:15px">
            <button :key="btnLabel" @click="changeMode">
                <component :is="`icon-${btnLabel}`" />
            </button>
        </div>
</template>
<script>
import IconSystem from '@/assets/icons/system.svg?inline'
import IconLight from '@/assets/icons/light.svg?inline'
import IconDark from '@/assets/icons/dark.svg?inline'
import IconSepia from '@/assets/icons/sepia.svg?inline'

export default {
    components: {
        IconSystem,
        IconLight,
        IconDark,
        IconSepia
    },

    data() {
        return {
            colors: ['system', 'light', 'dark', 'sepia']
        }
    },

    computed: {
        btnLabel() {
            return this.$colorMode.preference === 'light' ? 'dark' : 'light' 
        }
    },

    methods: {
        changeMode() {
            this.$colorMode.preference =
                this.$colorMode.preference === 'light' ? 'dark' : 'light'
        }
    }
}
</script>
<style scoped>
button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
}

.feather {
    position: relative;
    top: 0px;
    cursor: pointer;
    padding: 7px;
    background-color: var(--bg-secondary);
    border: 2px solid var(--border-color);
    margin: 0;
    border-radius: 5px;
    transition: all 0.1s ease;
}

.feather:hover {
    top: -3px;
}

.feather.preferred {
    border-color: var(--color-primary);
    top: -3px;
}

.feather.selected {
    color: var(--color-primary);
}


</style>

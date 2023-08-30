<script>
    export default {
        data() {
            return {
                filter: 'all',
                btns: [
                    {
                        id: 1,
                        name: 'Barcha kinolar',
                        title: 'all',
                        isActive: true
                    },
                    {
                        id: 2,
                        name: "Eng ko'p ko'rilgan kinolar",
                        title: 'popular',
                        isActive: false
                    },
                    {
                        id: 3,
                        name: 'Saqlangan kinolar',
                        title: 'saved',
                        isActive: false
                    }
                ]
            }
        },
        methods: {
            filterHandler(title) {
                this.$emit('setFilterHandler', title);
                this.filter = title;
            }
        }
    }
</script>
        
<template>
    <Box class='btn-group w-100 gap-1'>
        <DarkButton v-for="btn in this.btns" :key="btn.id" @click="filterHandler(btn.title)" class="btn" :class="[ btn.title == this.filter ? 'btn-dark' : 'btn-white']">{{ btn.name }}</DarkButton>
    </Box>
</template>
        
<style scoped>
    .btn-white {
        background: white;
        color: black;
        transition: all .45s ease;
    }
</style>
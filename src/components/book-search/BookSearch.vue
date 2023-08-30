<script>
    export default {
        data() {
            return {
                term: ''
            }
        },
        methods: {
            termHandler() {
                this.$emit('setTermHandler', this.term)
            }
        }
    }
</script>
        
<template>
    <Box class='book-search'>
        <Input type="text" placeholder="Search..." v-model="this.term" @input="this.$emit('setTermHandler', this.term)" />
    </Box>
</template>
        
<style scoped>
   .book-search {
        margin-top: 1.5rem;
    }     
</style>
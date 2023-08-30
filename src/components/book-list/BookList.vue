<script>
    import BookItem from '../book-item/BookItem.vue';
    
    export default {
        components: {
            BookItem
        },
        props: {
            books: {
                type: Array,
                required: true
            }
        }
    }
</script>
        
<template>
    <Box class='book-list'>
        <p v-if="books.length == 0" class='text-danger text-center fs-3 mb-0'>Kitoblar mavjud emas !</p>
        <BookItem v-else v-for="book in books" :key="book.id" :book="book" @onSavedHandler="this.$emit('onSavedHandler', book.id)" @onLikeHandler="this.$emit('onLikeHandler', book.id)" @onDeleteHandler="this.$emit('onDeleteHandler', book.id)" />
    </Box>
</template>
        
<style scoped>
    .book-list {
        box-shadow: 0 5px 0 #fff;
        padding: 2.5rem;
        padding-top: 0;
        color: white;
    }    
</style>
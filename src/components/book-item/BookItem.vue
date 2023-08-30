<script>
    export default {
        props: {
            book: {
                type: Object,
                required: true
            }
        }
    }
</script>
        
<template>
    <li class='book-item d-flex flex-direction-column justify-content-between align-items-center p-3 '>
      <p class="book-name fs-4 mb-0 w-50" :class="[book.isSaved && 'text-primary']" @dblclick="this.$emit('onLikeHandler', book.id)">{{ book.name }}</p>
      <input type="number" class="readCount text-center bg-transparent border-0 fs-5 p-2" :class="[book.isSaved ? 'text-primary' : 'text-light']" :defaultValue="book.readCount" />
      <Box class="icons">
        <i class="fa-solid fa-trash text-warning me-4 fs-4" @click="this.$emit('onDeleteHandler', book.id)"></i>
        <i class="text-primary fa-bookmark me-4 fs-4" :class="[book.isSaved ? 'fa-solid' : 'fa-regular']" @click="this.$emit('onSavedHandler', book.id)"></i>
        <i class="text-danger fa-heart fs-4" :class="[book.isLike ? 'fa-solid' : 'fa-regular']" @click="this.$emit('onLikeHandler', book.id)"></i>
      </Box>
    </li>
</template>
        
<style scoped>
    .book-item {
        border-bottom: 1px solid white;
        user-select: none;
    }

    .book-item p {
        cursor: pointer;
    }

    .book-item:last-child {
        border-bottom: none;
    }

    .icons i {
        cursor: pointer;
    } 
</style>
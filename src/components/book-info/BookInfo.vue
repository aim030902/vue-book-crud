<script>
    export default {
        props: {
            allBooksCount: {
                type: Number,
                required: true
            },
            favouriteBooksCount: {
                type: Number,
                required: true
            }
        }
    }
</script>
        
<template>
    <Box className='book-info'>
      <h3>Barcha kitoblar soni: {{ allBooksCount }} </h3>
      <h4>Sevimli kitoblar soni: {{ favouriteBooksCount }} </h4>
    </Box>
</template>
        
<style scoped>
    .book-info {
        box-shadow: 5px 5px 5px #fff;
        padding: 2.5rem;
        color: white;
    }    
</style>
<script>
    export default {
        data() {
            return {
                name: '',
                readCount: ''
            }
        },
        methods: {
            addHandler() {
                if(this.name == '' || this.readCount == '') return;

                this.$emit('onAddHandler', { name: this.name, readCount: this.readCount });

                this.name = '';
                this.readCount = '';
            }
        }
    }
</script>
        
<template>
    <Box class='book-add'>
      <h3>Yangi kitob qo'shish</h3>
      <form class="d-flex gap-2 mt-4" @submit.prevent @submit="addHandler">

        <Input type="text" placeholder="Kitob nomi" v-model="this.name" />
        <Input type="number" placeholder="O'qilishlar soni" v-model="this.readCount" />

        <DarkButton :type="submit" class="btn-dark">Qo'shish</DarkButton>

      </form>
    </Box>
</template>
        
<style scoped>
    .book-add {
        padding: 2.5rem;
        color: white;
    }
</style>
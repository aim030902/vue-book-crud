<script>
    export default{
        name: 'Input',
        props: {
            modelValue: {
                type: [String, Number],
                required: true
            }
        },
        methods: {
            updateInput(e) {
                this.$emit('update:modelValue', e.target.value)
            }
        }
    }
</script>
        
<template>
    <input :value="modelValue" @input="updateInput" class="form-control p-3" >
</template>
        
<style scoped>
        
</style>
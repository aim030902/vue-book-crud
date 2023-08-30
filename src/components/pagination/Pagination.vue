<script>
    export default {
        data() {
            return {
                activePage: 1
            }
        },
        props: {
            pageCount: {
                type: Number,
                required: true
            }
        },
        methods: {
            changePage(pageNumber) {
                this.activePage = pageNumber;
                this.$emit('setCurrentPageHander', pageNumber)
            }
        }
    }
</script>
        
<template>
    <div class='mt-4 d-flex justify-content-center'>
        <nav aria-label="Page navigation example">
            <ul class="pagination text-dark">
                <li v-if="activePage != 1" class="page-item" @click="changePage(activePage - 1)">
                    <a class="page-link" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>

                <li v-for="idx in Array(pageCount).keys()" :key="idx + 1" @click="changePage(idx + 1)" class="page-item">
                    <a class="page-link" :class="[activePage == idx + 1 && 'page-active']">{{ idx + 1 }}</a>
                </li>

                <li v-if="activePage != pageCount" class="page-item" @click="changePage(activePage + 1)">
                    <a class="page-link" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>
        
<style scoped>
    .pagination li a {
        color: #000;
    }

    .pagination li a:hover {
        background: #000;
        color: #fff;
        border: 1px solid #fff;
    }

    .pagination li {
        cursor: pointer;
    }

    .pagination li a:focus {
        box-shadow: none;
    }

    .page-active {
        background: #000!important;
        color: #fff!important;
        border: 1px solid #fff;
    }
    
</style>
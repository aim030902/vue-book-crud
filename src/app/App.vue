<script>
  import { BookInfo, BookSearch, BookFilter, BookList, BookAdd, Pagination, Loader  } from '../components';
  import axios from 'axios';

  export default {
    data() {
      return {
        books: [],
        term: '',
        filter: 'all',
        isLoading: false,
        currentPage: 1
      }
    },
    components: {
      BookInfo,
      BookSearch,
      BookFilter,
      BookList,
      BookAdd,
      Pagination,
      Loader
    },
    methods: {
      setTermHandler(term) {
        this.term = term;
      },
      setFilterHandler(filter) {
        this.filter = filter;
      },
      setCurrentPageHander(currentPage) {
        this.currentPage = currentPage;
      },
      onTermHandler(books, term) {
        return books.filter(book => book.name.toLowerCase().indexOf(term.toLowerCase()) > -1);
      },
      onFilterHandler(books, filter) {
        switch (filter) {
          case 'saved':
            return books.filter(book => book.isSaved);
          case 'popular': 
            return books.filter(book => book.readCount > 800).sort((a, b) => b.readCount - a.readCount);
      
          default:
            return books;
        }
      },
      onSavedHandler(id) {
        this.books = this.books.map(book => {
          if(book.id == id) {
            return { ...book, isSaved: !book.isSaved}
          }
          return book;
        })
      },
      onLikeHandler(id) {
        this.books = this.books.map(book => {
          if(book.id == id) {
            return { ...book, isLike: !book.isLike}
          }
          return book;
        })
      },
      onDeleteHandler(id) {
        this.books =  this.books.filter(book => book.id != id);
      },
      onAddHandler(book) {
        this.books = [ ...this.books, { ...book, id: this.books.length, isSaved: false, isLike: false }]
      },
      async fetchMovie() {
        try {
          this.isLoading = true;
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
          const newArr = response.data.map(item => ({
            id: item.id,
            name: item.title,
            readCount: Math.floor(Math.random() * 1500),
            isSaved: false,
            isLiked: false,
          }));
          this.books = newArr;
        }
        catch(error) {
          alert(error.message)
        }
        finally {
          this.isLoading = false;
        }
      }
    },
    mounted() {
      this.fetchMovie();
    },

    // watch: {
    //   currentPage() {
    //     this.fetchMovie()
    //   }
    // }
  }
</script>
    
<template>
  <div class='container'>
      <div class="app font-monospace">
        <BookInfo :allBooksCount="this.books.length" :favouriteBooksCount="this.books.filter(book => book.isLike).length" />
        <div class="sf">
          <BookFilter @setFilterHandler="setFilterHandler" />
          <BookSearch @setTermHandler="setTermHandler" />
        </div>
        <Loader v-if="this.isLoading" />
        <BookList v-else :books="onTermHandler(onFilterHandler(this.books, this.filter), this.term).slice((this.currentPage - 1) * 10, (this.currentPage - 1) * 10 + 10)" @onSavedHandler="onSavedHandler" @onLikeHandler="onLikeHandler" @onDeleteHandler="onDeleteHandler" />
        <Pagination v-if="(!this.isLoading && onTermHandler(onFilterHandler(this.books, this.filter), this.term).length > 10)" :pageCount="Math.ceil(onTermHandler(onFilterHandler(this.books, this.filter), this.term).length / 10)" @setCurrentPageHander="setCurrentPageHander" />
        <BookAdd @onAddHandler="onAddHandler" />
      </div>
    </div>
</template>
    
<style scoped>
  .app {
      min-height: 95vh;
      margin-top: 2%;
      margin-bottom: 2%;
      border: 1px solid black;
      color: white;
      background: #000;
      box-shadow: 5px 5px 5px #fff;
      padding: 2.5rem;
  }

  .sf {
      padding: 2.5rem;
      color: white;
  }
</style>

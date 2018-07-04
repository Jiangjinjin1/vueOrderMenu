<template>
  <div>
    <span id="hello" class="rating_page" v-html="message"></span>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component
  export default class Hello extends Vue {
    message = 'Hello World'
  }
</script>
<style>
  .rating_page{
    margin-top: 1.95rem;
    font-size: 1rem;
    display: inline-block;
    transform: translate(3rem);
  }
</style>

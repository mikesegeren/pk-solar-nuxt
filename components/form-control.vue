<template>
  <div :class="col">
    <div v-if="!options && type === 'text'" class="form-group">
      <label :for="name">{{name}}</label>
      <input class="form-control" :type="type" :placeholder="placeholder">
    </div>
    <div v-if="options" class="form-group">
      <label :for="name">{{name}}</label>
      <select class="form-control">
        <option v-for="option in options" :key="option" :value="option">{{option}}</option>
      </select>
    </div>
    <div v-if="type === 'textarea'">
      <label :for="name">{{name}}</label>
      <textarea class="form-control"></textarea>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'form-control',
    props: {
      name: String,
      placeholder: {
        type: String,
        default: 'placeholder'
      },
      type: {
        type: String,
        default: 'text'
      },
      options: {
        type: Array
      },
      col: {
        type: String,
        default: 'col-md-6'
      }
    }
  }
</script>

<style scoped>

</style>

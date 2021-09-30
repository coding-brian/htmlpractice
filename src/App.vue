<template>
  <div id="app">
    <Form/>
    <Table/>
  </div>
</template>

<script>
import Form from '@/components/Form.vue';
import Table from '@/components/Table.vue';

export default {
  name: 'App',
  components: {
    Table,
    Form
  }
};
</script>

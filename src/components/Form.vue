<template>
<div>
    <b-container class="bc">
        <a>表單:</a>
        <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group id="input-group-2" label="Your Name:" label-for="input-2" class="item">
                <b-form-input
                id="input-2"
                v-model.trim="form.name"
                placeholder="Enter name"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Your Phone:" label-for="input-2" class="item">
                <b-form-input
                id="input-2"
                v-model.number="form.phone"
                placeholder="Enter Phone"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group
                id="input-group-1"
                label="Address:"
                label-for="input-1"
                class="item"
            >
                <b-form-input
                id="input-1"
                v-model.trim="form.address"
                placeholder="Enter address"
                required
                ></b-form-input>
            </b-form-group>

            <b-button class="subbutton" type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
    </b-container>
</div>

</template>
<script>
export default {
  name: 'Form',
  data() {
    return {
      form: {
        address: '',
        name: '',
        phone: ''
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$swal('Hello Vue world!!!');
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.address = '';
      this.form.name = '';
      this.form.phone = '';

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style scoped>

.item{
    margin: 10px;
}

.subbutton{
    margin-right: 10px;
}
.bc{
margin-top: 10px;
}
</style>

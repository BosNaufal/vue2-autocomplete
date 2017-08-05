
<template>
  <div>
    <autocomplete
      url="https://maps.googleapis.com/maps/api/geocode/json?address="
      :customParams="{ token: 'dev' }"
      :classes="{ input: 'form-control', wrapper: 'input-wrapper'}"
      anchor="formatted_address"
      label="formatted_address"
      :process="processJSON"
      :onSelect="handleSelect" >
    </autocomplete>
  </div>
</template>

<script>

  import Autocomplete from './vue-autocomplete.vue';
  require("../../../dist/style/vue2-autocomplete.css")

  export default {
    components: { Autocomplete },

    methods: {
      processJSON(json) {
        return json.results;
      },

      // getData(value) {
      //   return new Promise((resolve, reject) => {
      //     let ajax = new XMLHttpRequest();
      //     ajax.open('GET', `https://maps.googleapis.com/maps/api/geocode/json?address=${value}`, true);
      //     // On Done
      //     ajax.addEventListener('loadend', (e) => {
      //       const { responseText } = e.target
      //       let response = JSON.parse(responseText);
      //       // The options to pass in the autocomplete
      //       resolve(response.results)
      //     });
      //     ajax.send();
      //   })
      // },

      handleSelect(data) {
        console.log(data);
      }
    }
  };

</script>

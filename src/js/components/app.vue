
<template>
  <div>
    <autocomplete
      url="https://maps.googleapis.com/maps/api/geocode/json?address="
      :custom-params="{ token: 'dev' }"
      anchor="formatted_address"
      label="formatted_address"
      :process="processJSON"
      :on-select="getData" >
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
      getData(data) {
        console.log(data);
      }
    }
  };

</script>

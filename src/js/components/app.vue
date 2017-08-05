
<template>
  <div>
    <autocomplete
      url="https://maps.googleapis.com/maps/api/geocode/json?address="
      anchor="formatted_address"
      label="geometry.location.lat"
      name="autocomplete"
      :customParams="{ token: 'dev' }"
      :classes="{ input: 'form-control', wrapper: 'input-wrapper'}"
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

      handleSelect(data) {
        console.log(data);
      }
    }
  };

</script>

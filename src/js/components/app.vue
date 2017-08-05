
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
      :onSelect="handleSelect"
    >
    </autocomplete>

    <pre v-if="preContent" :style="preStyle">
      <b>Selected Data:</b>
      {{ preContent }}
    </pre>
  </div>
</template>

<script>

  import Autocomplete from './vue-autocomplete.vue';
  require("../../../dist/style/vue2-autocomplete.css")

  export default {
    components: { Autocomplete },

    data () {
      return  {
        preContent: "",
        preStyle: {
          background: "#f2f2f2",
          fontFamily: "monospace",
          fontSize: "1em",
          display: "inline-block",
          padding: "15px 7px",
        }
      }
    },

    methods: {
      processJSON(json) {
        return json.results;
      },

      handleSelect(data) {
        this.preContent = JSON.stringify(data, null, 4)
      }
    }
  };

</script>

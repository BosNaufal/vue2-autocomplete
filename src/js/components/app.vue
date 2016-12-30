
<template>
  <div>
    <autocomplete
      url="http://localhost/proyek/goodmovie/api/api/v1/search"
      :custom-params="{ token: 'dev' }"
      anchor="title"
      label="writer"
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
      getData(data) {
        console.log(data);
      }
    }
  };

</script>

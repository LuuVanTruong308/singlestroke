<template>
  <Map :location="mapLocation"/>
</template>

<script>
// @ is an alias to /src
import Map from '@/components/Map'

export default {
  name: 'mapHome',

  components: {
    Map
  },

  props: {
    mapLocation : {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
     
    }
  },
}
</script>
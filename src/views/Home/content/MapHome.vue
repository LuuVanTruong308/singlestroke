<template>
  <Map :location="mapLocation" :control="false"/>
</template>

<script>
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
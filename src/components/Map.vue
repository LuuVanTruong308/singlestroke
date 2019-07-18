<template>
  <div class="map">
    <gmap-map
      :center="center"
      :zoom="15"
      style="width:100%;  height: 460px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      />
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: 'Map',
  data() {
    return {
      center: { lat: 21.024040, lng: 105.646100 },
      markers: [{
        position: {
          lat: 21.024040,
          lng: 105.646100
        }
      }],
      places: [],
      currentPlace: null
    }
  },
  mounted() {
    this.geolocate();
  },

  methods: {
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.map {
  height: 460px;
  margin: 0;
}
</style>

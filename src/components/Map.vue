<template>
  <div class="map">
    <gmap-map
      :center="center"
      :zoom="12"
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
      center: { lat: 21.012621, lng: 105.812477 },
      markers: [{
        position: {
          lat: 21.022621,
          lng: 105.812477
        }
      },{
        position: {
          lat: 21.013621,
          lng: 105.812477
        }
      },{
        position: {
          lat: 21.012621,
          lng: 105.821477
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

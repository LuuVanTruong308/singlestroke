<template>
  <div class="map">
    <l-map ref="myMap"
      :zoom="zoom"
      :center="center"
      :options="{zoomControl: false}"
      @update:center="centerUpdated"
      @click="addMarker">
      <l-tile-layer :url="url"></l-tile-layer>

      <l-marker v-for="(marker, index) in markers" :key="index" :lat-lng="marker.marker" @click="removeMarker(index)">
        <l-tooltip>{{ marker.name }}</l-tooltip>
      </l-marker>

      <l-control v-if="control" :position="position" >
        <button v-if="mapReset" @click="ResetMap">
          reset map
        </button>

        <button v-if="add" @click="actionAdd">
          add Marker
        </button>

        <button v-if="remove" @click="actionRemove">
          remove Marker
        </button>
      </l-control>
    </l-map>
  </div>
</template>

<script>
import {LMap, LTileLayer, LMarker, LControl, LTooltip} from 'vue2-leaflet'
export default {
  name: 'Map',

  components: {
    LMap,
    LTileLayer,
    LMarker,
    LControl,
    LTooltip
  },

  props: {
    location : {
      type: Object,
      default: () => {}
    },

    control: {
      type: Boolean,
      default: true
    },

    mapReset : {
      type: Boolean,
      default: true
    },

    add: {
      type: Boolean,
      default: false
    },

    remove: {
      type: Boolean,
      default: false
    },

    position: {
      type: String,
      default: 'bottomleft'
    }
  },

  data() {
    return {
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      zoom: 10,
      center:  this.location.center,
      markers: this.location.markers,
      isAdd: false,
      isRemove: false
    }
  },

  methods: {
    ResetMap () {
      // todo
    },

    centerUpdated (center) {
      this.center = center;
    },

    actionRemove() {
      this.isRemove = true
    },

    removeMarker(index) {
      if (this.isRemove) {
        this.markers.splice(index, 1)
        this.isRemove = false
      }
    },

    actionAdd() {
      setTimeout(() => {
        this.isAdd = true
      }, 1000);
    },

    addMarker(event) {
      if (this.isAdd) {
        this.markers.push({
          marker: event.latlng,
          name: 'ahihi'
        })

        this.isAdd = false
      }
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

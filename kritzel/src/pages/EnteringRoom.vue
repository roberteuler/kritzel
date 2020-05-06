<template>
  <div class="section">
    <div class="container">
      <div class="tile is-ancestor">
        <div class="tile is-vertical">
          <div class="tile is-parent">
            <div class="tile is-6 is-child  krz-room">
              <setup></setup>
            </div>
            <div class="tile is-4 is-child">
              <tutorial></tutorial>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import setup from "../components/SetupContainer";
import tutorial from "../components/TutorialContainer";

export default {
  name: "EnteringRoom",
  props: {
    msg: String
  },
  components: {
    setup,
    tutorial
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.krz-room{
  padding-right: 2rem;
}
</style>

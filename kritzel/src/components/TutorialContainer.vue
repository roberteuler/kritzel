<template>
  <div class="card krz-card">
    <div class="card-content krz-card-header">
      <div class="media">
        <div class="media-left">
          <figure class="image is-128x128">
            <img src="../assets/Tutorial.png" />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4 gameTitle">How-To</p>
        </div>
      </div>
    </div>

    <div class="card-content">
      <div class="content">
          <p>
              1. Just enter your name, select the desired language to play in and press 'Create Room'.
          </p>
          <p>
              2.  Give the generated link to your mates and start playing.  
          </p>
          <p><strong> Is it that hard?</strong></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TutorialContainer",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gameTitle {
  color: #8675f3;
  font-weight: bold;
  font-size: 3rem;
}
.gameSubTitle {
  color: #60b0f4;
  font-size: 1.5rem;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.krz-card{
  border-radius: 5px;
}
.krz-card-header{
  border-bottom:lightgray;
  border-bottom-width: 3px;
  border-bottom-style: solid;
  border-bottom-left-radius: 1px;
  border-bottom-right-radius: 1px;
}
</style>

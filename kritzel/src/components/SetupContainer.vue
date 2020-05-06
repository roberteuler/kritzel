<template>
  <div class="card krz-card">
    <div class="card-content krz-card-header">
      <div class="media">
        <div class="media-left">
          <figure class="image is-128x128">
            <img src="../assets/Logo.png" />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4 gameTitle">New Game</p>
          <p class="subtitle is-6 gameSubTitle">Begin Kritzeling in no Time</p>
        </div>
      </div>
    </div>

    <div class="card-content">
      <div class="content">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Enter name" />
          </div>
        </div>
        <div class="field">
          <label class="label">Language</label>
          <div class="control">
            <div class="select">
              <select>
                <option>German</option>
                <option>English</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Create Room</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: "SetupContainer",
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

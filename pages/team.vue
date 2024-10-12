<template>
  <div>
    <div class="team-container">
      <h1 id="team1">Our Team 1</h1>
      <div class="team-members">
        <div class="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 1" />
          <h2>John Doe</h2>
          <p>Lead Developer</p>
        </div>
        <div class="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 2" />
          <h2>Jane Smith</h2>
          <p>Project Manager</p>
        </div>
        <div class="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 3" />
          <h2>Emily Johnson</h2>
          <p>UX Designer</p>
        </div>
      </div>
    </div>
    <div class="team-container">
      <h1 id="team2">Our Team 2</h1>
      <div class="team-members">
        <div class="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 1" />
          <h2>John Doe</h2>
          <p>Lead Developer</p>
        </div>
        <div class="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 2" />
          <h2>Jane Smith</h2>
          <p>Project Manager</p>
        </div>
        <div class="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 3" />
          <h2>Emily Johnson</h2>
          <p>UX Designer</p>
        </div>
      </div>
    </div>
    <div class="team-container">
      <h1 id="team3">Our Team 3</h1>
      <div class="team-members">
        <div class="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 1" />
          <h2>John Doe</h2>
          <p>Lead Developer</p>
        </div>
        <div class="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 2" />
          <h2>Jane Smith</h2>
          <p>Project Manager</p>
        </div>
        <div class="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 3" />
          <h2>Emily Johnson</h2>
          <p>UX Designer</p>
        </div>
      </div>
    </div>
    <div class="team-container">
      <h1 id="team4">Our Team 4</h1>
      <div class="team-members">
        <div class="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 1" />
          <h2>John Doe</h2>
          <p>Lead Developer</p>
        </div>
        <div class="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 2" />
          <h2>Jane Smith</h2>
          <p>Project Manager</p>
        </div>
        <div class="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 3" />
          <h2>Emily Johnson</h2>
          <p>UX Designer</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Our Team",
});
</script>

<style scoped>
.team-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.team-members {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.team-member {
  @apply flex flex-col items-center;
  margin: 10px;
  text-align: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.team-member img {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 10px;
}

h2 {
  margin: 10px 0;
  color: #333;
}

p {
  color: #555;
}
</style>

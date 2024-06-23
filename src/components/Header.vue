<template>
  <div class="header">
    <nav>
      <RouterLink to="/Home">HOME</RouterLink>
      <RouterLink to="/projekte">PROJEKTE</RouterLink>
      <RouterLink to="/lebenslauf">LEBENSLAUF</RouterLink>
      <RouterLink to="/login">LOGIN</RouterLink>
      <img src="../assets/html.svg" alt="" class="bild" />
    </nav>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup></script>
<style>
nav {
  list-style: none;
  display: flex;

  justify-content: space-evenly;
  align-content: center;
}

.header {
  height: 15vh;
  width: 100vw;

  background-color: rgb(43, 71, 71);
}
.bild {
  width: 6%;
  height: 6%;
  margin-block: auto;
  border-radius: 100%;
  box-shadow: 0.3px 0.5px 8px 4px rgb(152, 196, 152);

  transition: rotate 3s linear infinity;
  animation: rotatet 8s infinite;
}

@keyframes rotatet {
  0% {
    transform: rotateZ(0deg);
  }

  50% {
    transform: rotateZ(360deg);
  }
  75% {
    transform: rotateZ(360deg);
  }

  100% {
    transform: rotateZ(-1deg);
  }
}

a {
  color: rgba(197, 197, 197, 0.966);
  border: solid 2px rgb(174, 221, 178);
  font-size: 32px;
  font-family: Arial, Helvetica, sans-serif;
  margin-block: 30px;
  padding: 10px 60px 10px 60px;
  border-radius: 20px;
  transition: all 5ms linear;
  box-shadow: 1px 1px 15px 5px rgb(152, 196, 152);
  transform-style: preserve-3d;
  text-shadow: 0 -1px 0 #fff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c, 0 3px 0 #2a2a2a,
    0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424, 0 7px 0 #222,
    0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c, 0 11px 0 #1a1a1a,
    0 12px 0 #181818, 0 13px 0 #161616, 0 14px 0 #141414, 0 15px 0 #121212,
    0 22px 30px rgba(0, 0, 0, 0.9);
  color: #e0dfdc;
}

a:hover {
  background: linear-gradient(to top, rgb(97, 83, 83), rgb(255, 255, 255));
  box-shadow: inset 0px 0px 10px 10px rgb(114, 141, 114);
  color: rgb(255, 255, 255);
}
</style>

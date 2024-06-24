<template>
  <div>
    <div class="nav-bar">
      <nav>
        <img src="@/assets/html.svg" alt="" class="bild" />
        <a href=".home-page-p" class="nav-bar-a">Home</a>
        <a href="#me" class="nav-bar-a">Übermich</a>
        <a href="#lebenslauf" class="nav-bar-a">Lebenslauf</a>
        <a href="#projekte" class="nav-bar-a">Projekte</a>
        <a href="#kontakt" class="nav-bar-a">Kontakte</a>
      </nav>
    </div>

    <div class="home-page" id="homepage">
      <h1>Mein Name ist</h1>

      <p class="home-page-p"></p>
      <img src="@/assets/Profilbild.jpeg" alt="" class="profil-pitcure" />
    </div>

    <div id="me">
      <h2 id="ubermich">Übermich</h2>
      <p id="myWork">
        Mein Name ist Jens Gerwins, ein leidenschaftlicher Webentwickler aus
        Duisburg mit 36 Jahren Erfahrung. <br />
        Schon in meiner Kindheit hegte ich den Traum, Programmierer zu werden
        und begann meine Reise mit Game Maker, wo ich mein eigenes Mario-Spiel
        entwickelte. <br />
        Nach meiner Ausbildung im Einzelhandel und verschiedenen beruflichen
        Stationen, darunter bei DHL als Paketzusteller, ergriff ich die Chance,
        bei Infosys als Senior in der IT-Branche einzusteigen. <br />
        Während meiner Zeit bei Infosys unterstützte ich das Team im Bereich
        Beschwerden und Eskalationsmanagement und übernahm schließlich die Rolle
        eines Trainers. <br />
        Parallel dazu absolvierte ich ein Online-Bootcamp, in dem ich die
        Grundlagen der Webentwicklung erlernte und ein Full-Stack-Projekt, ein
        Pokémon-Kartenspiel, entwickelte. Aktuell arbeite ich als Knowledge
        Manager bei Infosys und strebe danach, meine Leidenschaft für die
        Webentwicklung weiterzuverfolgen. <br />
        Ich bin zuverlässig, pünktlich und ein Teamplayer. <br />
        In meiner Freizeit arbeite ich an kleinen Javascript-Projekten wie einer
        Wetter-App, einer Todo-App und einer Chat-App, die über eine API
        gesteuert wird. Mein Ziel ist es, meine Kenntnisse in der Webentwicklung
        zu vertiefen und qualitativ hochwertigen Code zu schreiben. <br />
        Dank meiner Erfahrung als Vater von zwei Kindern bin ich in der Lage,
        meine Zeit effektiv zu organisieren und neuen Herausforderungen mit
        Engagement zu begegnen.
      </p>
    </div>
    <div id="lebenslauf">
      <h3>lebenslauf</h3>
      <table>
        <tr>
          <td class="schule">Schule</td>
        </tr>
        <tr>
          <td>01 /2000 - 01 /2001</td>
          <td>Gustav Heinemann Realschule</td>
        </tr>
        <tr>
          <td>01 /2001 - 01 /2005</td>
          <td>Gottfried-Könzgen-Hauptschule Sekundarstufe I</td>
        </tr>
        <tr>
          <td>01 /2005 - 01 /2006</td>
          <td>Robert-Bosch-Berufskolleg</td>
        </tr>
        <tr>
          <td>03 /2007 - 07 /2010</td>
          <td>Willy-Brandt-Berufskolleg Fachoberschulreife</td>
        </tr>
        <tr>
          <td class="arbeit">Arbeit</td>
        </tr>
        <tr>
          <td>03 /2007 - 01 /2009</td>
          <td>Verkäufer Medimax Duisburg</td>
        </tr>
        <tr>
          <td>01 /2009 - 07 /2010</td>
          <td>Einzelhandelskaufmann Medimax Duisburg</td>
        </tr>
        <tr>
          <td>03 /2013 - 07 /2018</td>
          <td>Lagerist Fressnapf Krefeld</td>
        </tr>
        <tr>
          <td>08 /2016 - 07 /2018</td>
          <td>Verkäufer Medimax Duisburg</td>
        </tr>
        <tr>
          <td>08 /2018 - 04 /2019</td>
          <td>Verkäufer Media Markt Mülheim</td>
        </tr>
        <tr>
          <td>05 /2019 - 04/2020</td>
          <td>Abteilungsleiter/Verkäufer Medimax Duisburg</td>
        </tr>
        <tr>
          <td>06/2020 - 31/2022</td>
          <td>Paketzusteller DHL Group</td>
        </tr>
        <tr>
          <td>01/2023</td>
          <td>Infosys Knowledge Manager</td>
        </tr>
        <tr>
          <td class="zertifikate">Zertifikate</td>
        </tr>
        <tr>
          <td>06/2020</td>
          <td>
            Ils Fernstudium lehrgang zum Fachinformatiker Systemintegration
          </td>
        </tr>
        <tr>
          <td>10/01/2023 - 10.10.2023</td>
          <td>Webentwicklung Coding Bootcamp Europa</td>
        </tr>
      </table>
    </div>
    <div id="projekte">
      <h4 id="projekte-h4">Projekte</h4>
      <div>
        <p class="projekte-text">
          Leider Hatte ich noch nicht die Zeit meine Projekte Hochzuladen
        </p>
      </div>
    </div>
    <div id="kontakt">
      <h5>Kontakt</h5>

      <div class="github-container">
        <a class="github-contact" href="https://github.com/Jensgerwins"
          >https://github.com/Jensgerwins</a
        >
        <img src="@/assets/github-mark.png" class="github-svg" alt="" />
      </div>

      <div class="contact-form">
        <form @submit.prevent="submitForm" ref="form">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              v-model="name"
              :class="{ 'is-invalid': nameError }"
              required
              @blur="validateName"
            />
            <span v-if="nameError" class="error-message">{{ nameError }}</span>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              :class="{ 'is-invalid': emailError }"
              required
              @blur="validateEmail"
            />
            <span v-if="emailError" class="error-message">{{
              emailError
            }}</span>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              v-model="message"
              :class="{ 'is-invalid': messageError }"
              required
              @blur="validateMessage"
            />
            <span v-if="messageError" class="error-message">{{
              messageError
            }}</span>
          </div>
          <button type="submit" :disabled="!valid" class="submit-button">
            Send
          </button>
        </form>
      </div>
      <div class="linked-container">
        <a href="#" class="linked-contact">JensGerwins</a
        ><img src="@/assets/linked.png" alt="" class="linked-svg" />
      </div>
      <div class="email-container">
        <a href="#" class="email-contact">Jens.Gerwins@gmail.com</a
        ><img src="@/assets/email.svg" alt="" class="email-svg" />
      </div>
      <div class="telephone-container">
        <a href="#" class="telephone-contact">015206279241</a>
        <img src="@/assets/telephone.svg" alt="" class="telephone-svg" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, watch } from "vue";

const form = ref(null);
const name = ref("");
const email = ref("");
const message = ref("");

const nameError = ref("");
const emailError = ref("");
const messageError = ref("");

const validateName = () => {
  nameError.value = name.value.trim() ? "" : "Name is required";
};

const validateEmail = () => {
  const emailPattern = /.+@.+\..+/;
  emailError.value = email.value.trim()
    ? emailPattern.test(email.value)
      ? ""
      : "E-mail must be valid"
    : "Email is required";
};

const validateMessage = () => {
  messageError.value = message.value.trim() ? "" : "Message is required";
};

watch(name, validateName);
watch(email, validateEmail);
watch(message, validateMessage);

const valid = computed(
  () => !nameError.value && !emailError.value && !messageError.value
);

const submitForm = () => {
  validateName();
  validateEmail();
  validateMessage();

  if (valid.value) {
    console.log("Form data:", {
      name: name.value,
      email: email.value,
      message: message.value,
    });
    name.value = "";
    email.value = "";
    message.value = "";

    nameError.value = "";
    emailError.value = "";
    messageError.value = "";
    form.value.reset();
  }
};
</script>
<style>
#app {
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
  height: 100vh;
  max-width: 100vw;
}
nav {
  position: fixed;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
}

.nav-bar-a {
  color: rgba(197, 197, 197, 0.966);
  border: solid 2px rgb(174, 221, 178);
  font-size: 32px;
  font-family: Arial, Helvetica, sans-serif;
  margin-block: 30px;
  margin-inline: 1%;
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
  margin-inline: 3%;
}

.nav-bar-a:hover {
  background: linear-gradient(to top, rgb(97, 83, 83), rgb(255, 255, 255));
  box-shadow: inset 0px 0px 10px 10px rgb(114, 141, 114);
  color: rgb(255, 255, 255);
}
.bild {
  width: 6%;
  height: 100%;
  margin-block: auto;

  border-radius: 100%;
  box-shadow: 0.3px 0.5px 8px 4px rgb(152, 196, 152);
  margin-left: 3%;
  transition: all 3s linear infinite;
  animation: rotatet 8s linear infinite;
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

.home-page {
  height: 100vh;
  width: 90vw;
  display: flex;
  justify-content: left;
  align-items: center;
}

h1 {
  font-size: 32px;
  margin-inline: 3%;
  font-style: italic;
}
h1,
.home-page-p {
  font-size: 3rem;
  color: black;
  font-style: italic;
  text-shadow: 0 -1px 0 #fff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c, 0 3px 0 #2a2a2a,
    0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424, 0 7px 0 #222,
    0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c, 0 11px 0 #1a1a1a,
    0 12px 0 #181818, 0 13px 0 #161616, 0 14px 0 #141414, 0 15px 0 #121212,
    0 22px 30px rgba(0, 0, 0, 0.9);
  color: #e0dfdc;
}

.home-page-p::before {
  color: #e0dfdc;
  content: "";
  overflow: hidden;
  animation: textanimation 2s infinite linear;
}
@keyframes textanimation {
  0% {
    content: "J";
  }
  10% {
    content: "JE";
  }
  20% {
    content: "JEN";
  }
  30% {
    content: "JENS";
  }

  40% {
    content: "JENS G";
  }
  50% {
    content: "JENS GE";
  }
  60% {
    content: "JENS GER";
  }
  70% {
    content: "JENS GERW";
  }
  80% {
    content: "JENS GERWIN";
  }
  90% {
    content: "JENS GERWIN";
  }
  100% {
    content: "JENS GERWINS";
  }
}

.profil-pitcure {
  height: 60%;
  width: 33%;
  border-radius: 50%;
  border: solid 1px grey;
  position: absolute;
  right: 10%;
  top: 30%;
  box-shadow: 0px 0px 20px 20px rgb(114, 141, 114);
}

#me {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
}
#ubermich {
  justify-content: left;
  margin-top: 15vh;
  font-size: 82px;
  color: black;
  font-style: italic;
  text-shadow: 0 -1px 0 #fff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c, 0 3px 0 #2a2a2a,
    0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424, 0 7px 0 #222,
    0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c, 0 11px 0 #1a1a1a,
    0 12px 0 #181818, 0 13px 0 #161616, 0 14px 0 #141414, 0 15px 0 #121212,
    0 22px 30px rgba(0, 0, 0, 0.9);
  color: #e0dfdc;
  margin-left: 10%;
}

#myWork {
  color: beige;
  font-size: 22px;
  margin-top: 20vh;
  max-width: 100vw;
  margin-block: auto;
  text-align: left;
  margin-left: 10%;
  font-style: italic;
  text-shadow: 0 -1px 0 #fff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c, 0 3px 0 #2a2a2a,
    0 4px 0 #282828;
}

#lebenslauf {
  height: 100vh;
  display: flex;
  font-style: italic;
  flex-direction: column;
  justify-content: left;
}
body {
  background: linear-gradient(rgb(9, 24, 41), rgb(152, 196, 152));

  position: relative;
}
h2 {
  flex-direction: column;
  justify-content: left;
  margin-top: 15vh;
  font-size: 82px;
  color: black;
  font-style: italic;
  text-shadow: 0 -1px 0 #fff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c, 0 3px 0 #2a2a2a,
    0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424, 0 7px 0 #222,
    0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c, 0 11px 0 #1a1a1a,
    0 12px 0 #181818, 0 13px 0 #161616, 0 14px 0 #141414, 0 15px 0 #121212,
    0 22px 30px rgba(0, 0, 0, 0.9);
  color: #e0dfdc;
  margin-left: 10%;
}

table {
  font-size: 22px;
  color: beige;
  width: 70%;
  border-collapse: collapse;
  margin-left: 10%;
}

.schule,
.arbeit,
.zertifikate {
  text-align: left;
  font-size: 25px;
  color: rgb(9, 24, 41);
  font-weight: bold;
}

#projekte {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
}
h3 {
  flex-direction: column;
  justify-content: left;
  margin-top: 15vh;
  font-size: 82px;
  color: black;
  font-style: italic;
  text-shadow: 0 -1px 0 #fff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c, 0 3px 0 #2a2a2a,
    0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424, 0 7px 0 #222,
    0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c, 0 11px 0 #1a1a1a,
    0 12px 0 #181818, 0 13px 0 #161616, 0 14px 0 #141414, 0 15px 0 #121212,
    0 22px 30px rgba(0, 0, 0, 0.9);
  color: #e0dfdc;
  margin-left: 10%;
}

.projekte-text {
  font-size: 82px;
  text-shadow: 0 -1px 0 #fff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c, 0 3px 0 #2a2a2a,
    0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424, 0 7px 0 #222,
    0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c, 0 11px 0 #1a1a1a,
    0 12px 0 #181818, 0 13px 0 #161616, 0 14px 0 #141414, 0 15px 0 #121212,
    0 22px 30px rgba(0, 0, 0, 0.9);
  color: #e0dfdc;
  color: black;
  font-style: italic;
  text-align: center;
  margin-top: 10%;
}

h4 {
  flex-direction: column;
  justify-content: left;
  margin-top: 15vh;
  font-size: 82px;
  color: black;
  font-style: italic;
  text-shadow: 0 -1px 0 #fff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c, 0 3px 0 #2a2a2a,
    0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424, 0 7px 0 #222,
    0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c, 0 11px 0 #1a1a1a,
    0 12px 0 #181818, 0 13px 0 #161616, 0 14px 0 #141414, 0 15px 0 #121212,
    0 22px 30px rgba(0, 0, 0, 0.9);
  color: #e0dfdc;
  margin-left: 10%;
}

#kontakt {
  height: 85vh;
  margin-left: 5%;
  margin-top: 15vh;
  justify-items: center;
  align-items: center;
  display: grid;
  grid-template-rows: repeat(2, 3fr);
  grid-template-columns: repeat(3, 2fr);
}
h5 {
  font-size: 82px;
  align-self: flex-start;
  margin-top: 0%;
  font-style: italic;
  text-shadow: 0 -1px 0 #fff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c, 0 3px 0 #2a2a2a,
    0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424, 0 7px 0 #222,
    0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c, 0 11px 0 #1a1a1a,
    0 12px 0 #181818, 0 13px 0 #161616, 0 14px 0 #141414, 0 15px 0 #121212,
    0 22px 30px rgba(0, 0, 0, 0.9);
  color: #e0dfdc;
}

.linked-container {
  display: flex;
  height: 80%;
  width: 40%;
  flex-direction: column-reverse;
  justify-content: center;
  align-content: center;
  border: solid 4px grey;
  align-items: center;
  grid-row-start: 1;
  grid-column-start: 2;
  align-self: flex-end;

  grid-row-end: 2;
  grid-column-end: 3;

  border-radius: 10px;
  background-color: grey;
  cursor: pointer;
  transition: transform 1s linear;
}
.linked-container:hover {
  transform: rotateX(28deg);
}
.linked-contact {
  background-color: grey;
  color: rgba(197, 197, 197, 0.966);
  border: solid 2px rgb(174, 221, 178);
  font-size: 14px;
  border-radius: 5px;
  margin-inline: 3%;
}

.linked-contact:hover {
  box-shadow: 1px 1px 15px 5px rgb(152, 196, 152);
  background: linear-gradient(to top, rgb(97, 83, 83), rgb(255, 255, 255));
  box-shadow: inset 0px 0px 10px 10px rgb(114, 141, 114);
  color: rgb(255, 255, 255);
}

.github-container {
  display: flex;
  height: 80%;
  align-self: flex-end;
  flex-direction: column-reverse;
  justify-content: center;
  align-content: center;
  border: solid 4px grey;
  align-items: center;

  border-radius: 10px;
  background-color: grey;
  cursor: pointer;
  transition: transform 1s linear;
}

.github-container:hover {
  transform: rotateX(28deg);
}
.github-contact {
  background-color: grey;
  color: rgba(197, 197, 197, 0.966);
  border: solid 2px rgb(174, 221, 178);
  font-size: 14px;
  border-radius: 5px;
  margin-inline: 3%;
}
.github-contact:hover {
  box-shadow: 1px 1px 15px 5px rgb(152, 196, 152);
  background: linear-gradient(to top, rgb(97, 83, 83), rgb(255, 255, 255));
  box-shadow: inset 0px 0px 10px 10px rgb(114, 141, 114);
  color: rgb(255, 255, 255);
}

.github-svg {
  width: 30%;
  height: 30%;
  margin-bottom: 10px;
}
.contact-form {
  align-content: flex-start;
  justify-content: flex-start;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;

  height: 90%;
  width: 80%;
  align-items: flex-start;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: solid 1px #ccc;
  border-radius: 4px;
}
textarea {
  height: 10vh;
}
.is-invalid {
  border-color: red;
}

.error-message {
  color: red;
  font-size: 0.875rem;
}

.submit-button {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:disabled {
  background-color: #d6d6d6;
  cursor: not-allowed;
}

.email-svg {
  width: 30%;
}

.email-container {
  display: flex;
  height: 40%;
  width: 40%;
  flex-direction: column-reverse;
  justify-content: center;
  align-content: center;
  border: solid 4px grey;
  align-items: center;
  grid-row-start: 2;
  grid-column-start: 2;

  grid-row-end: 3;
  grid-column-end: 3;

  border-radius: 10px;
  background-color: grey;
  cursor: pointer;
  transition: transform 1s linear;
}
.email-container:hover {
  transform: rotateX(28deg);
}

.email-contact {
  background-color: grey;
  color: rgba(197, 197, 197, 0.966);
  border: solid 2px rgb(174, 221, 178);
  font-size: 14px;
  border-radius: 5px;
  margin-inline: 3%;
}
.email-contact:hover {
  box-shadow: 1px 1px 15px 5px rgb(152, 196, 152);
  background: linear-gradient(to top, rgb(97, 83, 83), rgb(255, 255, 255));
  box-shadow: inset 0px 0px 10px 10px rgb(114, 141, 114);
  color: rgb(255, 255, 255);
}
.telephone-container {
  display: flex;
  height: 40%;
  width: 40%;
  flex-direction: column-reverse;
  justify-content: center;
  align-content: center;
  border: solid 4px grey;
  align-items: center;
  grid-row-start: 2;
  grid-column-start: 3;

  grid-row-end: 3;
  grid-column-end: 4;

  border-radius: 10px;
  background-color: grey;
  cursor: pointer;
  transition: transform 1s linear;
}
.telephone-container:hover {
  transform: rotateX(-38deg);
}

.telephone-contact {
  background-color: grey;
  color: rgba(197, 197, 197, 0.966);
  border: solid 2px rgb(174, 221, 178);
  font-size: 14px;
  border-radius: 5px;
  margin-inline: 3%;
  text-align: center;
  width: 60%;
}

.telephone-contact:hover {
  box-shadow: 1px 1px 15px 5px rgb(152, 196, 152);
  background: linear-gradient(to top, rgb(97, 83, 83), rgb(255, 255, 255));
  box-shadow: inset 0px 0px 10px 10px rgb(114, 141, 114);
  color: rgb(255, 255, 255);
}

.telephone-svg {
  width: 30%;
}

@media screen and (max-width: 375px) {
  .bild {
    display: none;
  }
  nav {
    position: fixed;
  }
  .nav-bar {
    text-shadow: none;
    position: fixed;
    display: flex;
    justify-content: flex-start;
    margin-inline: 1px;
    max-width: 375px;

    padding: 0px;
  }

  .nav-bar-a {
    color: rgba(197, 197, 197, 0.966);
    border: solid 2px rgb(174, 221, 178);
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    margin-block: 0px;
    margin-inline: 1%;
    padding: 0px;
    border-radius: 0px;
    transition: all 5ms linear;
    text-shadow: none;
    color: #e0dfdc;
    margin-inline: 3%;
  }

  a {
    font-size: 34px;
    text-shadow: none;
  }

  .home-page {
    height: 667px;
    max-width: 375px;
    display: flex;
    justify-content: left;
    align-items: center;
  }

  h1 {
    font-size: 14px;
    margin-inline: 3%;
    font-style: italic;
  }
  h1,
  .home-page-p {
    font-size: 1rem;
    color: black;
    font-style: italic;
    text-shadow: none;
    color: #e0dfdc;
  }

  .profil-pitcure {
    height: 30%;
    width: 40%;
    border-radius: 50%;
    border: solid 1px grey;
    position: absolute;
    right: 30%;
    top: 15%;
    box-shadow: 0px 0px 20px 20px rgb(114, 141, 114);
  }

  #me {
    height: 667px;

    display: flex;
    flex-direction: column;
    align-content: center;
  }
  #ubermich {
    justify-content: left;
    margin-top: 15vh;
    font-size: 12px;
    color: black;
    font-style: italic;
    max-width: 375px;
    color: #e0dfdc;
    margin-left: 1px;
    text-shadow: none;
  }

  #myWork {
    color: beige;
    font-size: 12px;
    margin-top: 20vh;
    max-width: 375px;
    height: 667px;
    margin-block: auto;
    text-align: left;
    margin-inline: auto;
    font-style: italic;
    text-shadow: none;
  }

  #lebenslauf {
    height: 667px;
    max-width: 375px;
    display: flex;
    font-style: italic;
    flex-direction: column;
    justify-content: left;
    align-content: flex-start;
  }
  body {
    background: linear-gradient(rgb(9, 24, 41), rgb(152, 196, 152));

    position: relative;
  }
  h2 {
    flex-direction: column;
    justify-content: left;
    margin-bottom: 18px;
    font-size: 14px;
    color: black;
    font-style: italic;

    color: #e0dfdc;
    margin-left: 10%;
  }

  table {
    font-size: 10px;
    color: beige;
    max-width: 375px;
    max-height: 667px;
    border-collapse: collapse;
    margin-left: 10%;
  }

  .schule,
  .arbeit,
  .zertifikate {
    text-align: left;
    font-size: 12px;
    color: rgb(253, 253, 253);
    font-weight: bold;
  }

  #projekte {
    height: 667px;
    display: flex;
    flex-direction: column;
    align-content: center;
  }
  h3 {
    flex-direction: column;
    justify-content: left;
    margin-top: 10vh;
    font-size: 12px;
    color: black;
    font-style: italic;

    color: #e0dfdc;
    margin-left: 10%;
  }

  .projekte-text {
    font-size: 12px;

    color: black;
    font-style: italic;
    text-align: center;
    margin-top: 15vh;
  }

  h4 {
    flex-direction: column;
    justify-content: left;
    margin-top: 15vh;
    font-size: 12px;
    color: black;
    font-style: italic;

    color: #e0dfdc;
    margin-left: 10%;
  }

  #kontakt {
    height: 667px;
    margin-left: 5%;
    margin-top: 15vh;
    justify-items: center;
    align-items: center;
    display: grid;
    grid-template-rows: repeat(2, 3fr);
    grid-template-columns: repeat(3, 2fr);
  }
  h5 {
    font-size: 12px;
    align-self: flex-start;
    margin-top: 0%;
    font-style: italic;

    color: #e0dfdc;
  }

  .linked-container {
    display: flex;
    height: 40%;
    width: 20%;
    flex-direction: column-reverse;
    justify-content: center;
    align-content: center;
    border: solid 4px grey;
    align-items: center;
    grid-row-start: 1;
    grid-column-start: 2;
    align-self: flex-end;

    grid-row-end: 2;
    grid-column-end: 3;

    border-radius: 10px;
    background-color: grey;
    cursor: pointer;
    transition: transform 1s linear;
  }
  .linked-container:hover {
    transform: rotateX(28deg);
  }
  .linked-contact {
    background-color: grey;
    color: rgba(197, 197, 197, 0.966);
    border: solid 2px rgb(174, 221, 178);
    font-size: 14px;
    border-radius: 5px;
    margin-inline: 3%;
  }

  .linked-contact:hover {
    box-shadow: 1px 1px 15px 5px rgb(152, 196, 152);
    background: linear-gradient(to top, rgb(97, 83, 83), rgb(255, 255, 255));
    box-shadow: inset 0px 0px 10px 10px rgb(114, 141, 114);
    color: rgb(255, 255, 255);
  }

  .github-container {
    display: flex;
    height: 40%;
    align-self: flex-end;
    flex-direction: column-reverse;
    justify-content: center;
    align-content: center;
    border: solid 4px grey;
    align-items: center;

    border-radius: 10px;
    background-color: grey;
    cursor: pointer;
    transition: transform 1s linear;
  }

  .github-container:hover {
    transform: rotateX(28deg);
  }
  .github-contact {
    background-color: grey;
    color: rgba(197, 197, 197, 0.966);
    border: solid 2px rgb(174, 221, 178);
    font-size: 14px;
    border-radius: 5px;
    margin-inline: 3%;
  }
  .github-contact:hover {
    box-shadow: 1px 1px 15px 5px rgb(152, 196, 152);
    background: linear-gradient(to top, rgb(97, 83, 83), rgb(255, 255, 255));
    box-shadow: inset 0px 0px 10px 10px rgb(114, 141, 114);
    color: rgb(255, 255, 255);
  }

  .github-svg {
    width: 30%;
    height: 30%;
    margin-bottom: 10px;
  }
  .contact-form {
    align-content: flex-start;
    justify-content: flex-start;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    margin-top: 0px;
    height: 100%;
    width: 60%;
    align-items: flex-start;
  }

  .form-group {
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: solid 1px #ccc;
    border-radius: 4px;
  }
  textarea {
    height: 10vh;
  }
  .is-invalid {
    border-color: red;
  }

  .error-message {
    color: red;
    font-size: 0.875rem;
  }

  .submit-button {
    background-color: #007bff;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .submit-button:disabled {
    background-color: #d6d6d6;
    cursor: not-allowed;
  }

  .email-svg {
    width: 30%;
  }

  .email-container {
    display: flex;
    height: 40%;
    width: 40%;
    flex-direction: column-reverse;
    justify-content: center;
    align-content: center;
    border: solid 4px grey;
    align-items: center;
    grid-row-start: 2;
    grid-column-start: 2;

    grid-row-end: 3;
    grid-column-end: 3;

    border-radius: 10px;
    background-color: grey;
    cursor: pointer;
    transition: transform 1s linear;
  }
  .email-container:hover {
    transform: rotateX(28deg);
  }

  .email-contact {
    background-color: grey;
    color: rgba(197, 197, 197, 0.966);
    border: solid 2px rgb(174, 221, 178);
    font-size: 14px;
    border-radius: 5px;
    margin-inline: 3%;
  }
  .email-contact:hover {
    box-shadow: 1px 1px 15px 5px rgb(152, 196, 152);
    background: linear-gradient(to top, rgb(97, 83, 83), rgb(255, 255, 255));
    box-shadow: inset 0px 0px 10px 10px rgb(114, 141, 114);
    color: rgb(255, 255, 255);
  }
  .telephone-container {
    display: flex;
    height: 40%;
    width: 40%;
    flex-direction: column-reverse;
    justify-content: center;
    align-content: center;
    border: solid 4px grey;
    align-items: center;
    grid-row-start: 2;
    grid-column-start: 3;

    grid-row-end: 3;
    grid-column-end: 4;

    border-radius: 10px;
    background-color: grey;
    cursor: pointer;
    transition: transform 1s linear;
  }
  .telephone-container:hover {
    transform: rotateX(-38deg);
  }

  .telephone-contact {
    background-color: grey;
    color: rgba(197, 197, 197, 0.966);
    border: solid 2px rgb(174, 221, 178);
    font-size: 8px;
    border-radius: 5px;
    margin-inline: 3%;
    text-align: center;
    width: 30%;
  }

  .telephone-contact:hover {
    box-shadow: 1px 1px 15px 5px rgb(152, 196, 152);
    background: linear-gradient(to top, rgb(97, 83, 83), rgb(255, 255, 255));
    box-shadow: inset 0px 0px 10px 10px rgb(114, 141, 114);
    color: rgb(255, 255, 255);
  }

  .telephone-svg {
    width: 30%;
  }
}
</style>

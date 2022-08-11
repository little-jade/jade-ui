<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <JaCard
        imgUrl="/src/assets/card.jpg"
        headline="Headline"
        subhead="Subline"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
      >
        <template #header>Header </template>

        <JaButton type="text">Action</JaButton>
        <JaButton type="outlined">Action</JaButton>
        <JaButton type="filled" icon="3">Action</JaButton>
        <JaButton type="filled-tonal">Action</JaButton>
        <JaButton type="elevated">Action</JaButton>
      </JaCard>
      <div>
        <JaButton size="small">Button</JaButton>
        <JaButton>Button</JaButton>
        <JaButton size="large">Button</JaButton>
      </div>
      <div>
        <JaButton size="small" isRightIcon
          >Button
          <template #icon>
            <ArrowForwardCircle></ArrowForwardCircle>
          </template>
        </JaButton>

        <JaButton size="large">
          <template #icon>
            <CashOutline></CashOutline>
          </template>
        </JaButton>
        <JaButton size="large"
          >Button
          <template #icon>
            <Icon>
              <CashOutline></CashOutline>
            </Icon>
          </template>
        </JaButton>
      </div>
      <div>
        <JaButton disabled>Button</JaButton>
        <JaButton loading>Button</JaButton>
        <JaButton loading isRightIcon>Button</JaButton>
        <JaButton size="small" circle
          ><Icon><CashOutline></CashOutline></Icon
        ></JaButton>
        <JaButton circle
          ><Icon><CashOutline></CashOutline></Icon
        ></JaButton>
        <JaButton size="large" circle
          ><Icon><CashOutline></CashOutline></Icon
        ></JaButton>
      </div>

      <JaCard>
        <h1>headline</h1>
        <h2>subhead card</h2>
        <p>
          Cards should be easy to scan for relevant and actionable information.
          Elements like text and images should be placed on cards in a way that
          clearly indicates hierarchy.
        </p>
      </JaCard>
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>
<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import { CashOutline } from "@vicons/ionicons5";
import { ArrowForwardCircle } from "@vicons/ionicons5";
import { Icon } from "@vicons/utils";
</script>
<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>

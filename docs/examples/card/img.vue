<template>
  <ja-space>
    <JaCard 
      imgUrl="/jade-ui/img/card.jpg" 
      headline="headline" 
      subhead="subhead" 
      text="Cards should be easy to scan for relevant and actionable information. Elements like text and images should be placed on cards in a way that clearly indicates hierarchy.">
      <template #actions>
        <ja-space justify="end">
          <JaButton type="outlined">Button</JaButton>
          <JaButton>Button</JaButton>
        </ja-space>
      </template>
    </JaCard>
    <JaCard type="outlined"
      imgUrl="/jade-ui/img/card.jpg" 
      headline="headline" 
      subhead="subhead" 
      text="Cards should be easy to scan for relevant and actionable information. Elements like text and images should be placed on cards in a way that clearly indicates hierarchy.">
      <template #actions>
        <ja-space justify="end">
          <JaButton type="outlined">Button</JaButton>
          <JaButton>Button</JaButton>
        </ja-space>
      </template>
    </JaCard>
    <JaCard type="filled"
      imgUrl="/jade-ui/img/card.jpg" 
      headline="headline" 
      subhead="subhead" 
      text="Cards should be easy to scan for relevant and actionable information. Elements like text and images should be placed on cards in a way that clearly indicates hierarchy.">
      <template #actions>
        <ja-space justify="end">
          <JaButton type="outlined">Button</JaButton>
          <JaButton>Button</JaButton>
        </ja-space>
      </template>
    </JaCard>
  </ja-space>
</template>
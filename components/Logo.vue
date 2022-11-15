<template>
  <div class="content ghost">
<svg data-v-05d4cbf4="" class="w-5 h-5" viewBox="0 0 242 242" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="var(--color)" data-v-05d4cbf4="" d="M0 121C0 54.1735 54.1735 0 121 0V0C187.826 0 242 54.1735 242 121V121C242 187.826 187.826 242 121 242H0V121Z" ></path> <ellipse data-v-05d4cbf4="" cx="107.919" cy="121.002" rx="26.1622" ry="26.1622" transform="rotate(-90 107.919 121.002)" fill="var(--bg)" class="eye"></ellipse> <ellipse data-v-05d4cbf4="" cx="186.405" cy="121.002" rx="26.1622" ry="26.1622" transform="rotate(-90 186.405 121.002)" fill="var(--bg)" class="eye"></ellipse></svg>

<div class="plug-doc">

</div>
</div>
</template>

<style scoped>

.ghost {
  transform: scaleX(1) scaleY(1) translateZ(0px);
opacity: 1;
transform-origin: left bottom 0px;
}
.plug-doc { 
  padding-left: 12px;
  font-weight: 900;
  font-size: 1rem;
}

.eye {
  background: var(--bg);
  -webkit-transform-origin: 50%;
  -webkit-animation: blink-data-v-05d4cbf4 3s .25s infinite;
  animation: blink-data-v-05d4cbf4 3s .25s infinite;
}

@keyframes blink {
  90%, 100% {
    transform: scaleY(1)
  }
  93% {
    transform: scaleY(.2);
  }
}


</style>

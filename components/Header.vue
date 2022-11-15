<template>
     <div class="header">
<div class="header-pad grid grid-cols-12 mx-auto">
<div class="logo">

</div>

<div class="menu">

</div>
<div class="sw-s">
  
</div>
</div>
</div>
</template>


<style scoped>
.header {
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
  height: var(--header-height);
}
.header-pad {
  padding-left: 2rem;
padding-right: 2rem;
}
.grid {
  display: grid;
}
.grid-cols-12 {
  grid-template-columns: repeat(12,minmax(0,1fr));
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.logo {
  align-items: center;
  display: flex;
  grid-column: span 2/span 2;
}

.menu {
  justify-content: center;
  align-items: center;
  display: flex;
  grid-column: span 8/span 8;
}

.sw-s {
  padding-left: 1rem;
  gap: 1rem;
  justify-content: flex-end;
  align-items: center;
  display: flex;
  grid-column: span 2/span 2;

}
</style>
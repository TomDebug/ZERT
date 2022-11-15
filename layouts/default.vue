<template>
  <div>
    <header class="u-border-gray-100 border-b">
      <div class="header-pad grid grid-cols-12 mx-auto h-full">
        <div class="logo">
          <Logo />
        </div>
        <div class="menu">
          <nav class="flex">
            <ul class="font-medium truncate justify-center item-center flex-1 flex">
              <li>
                <a href="" class="link">Guide</a>
                <a href="" class="link">Ajouter</a>
                <a href="" class="link">Test3</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="sw-s">
          <div class="relative flex">
            <Search />
            <ColorPicker />
            <account />

          </div>
        </div>
      </div>
    </header>
    <div class="holy-grail">
    <main class="holy-grail__main">
      <!-- Left sidebar -->
      <aside class="holy-grail__left">
        <ul>
          FLAME
          <li v-for="article in articleFlame" :key="article.id">
            <NuxtLink :to="'/articles/'+article._id">
            {{ article.title }}
            </NuxtLink>
          </li>
        </ul>

        <ul>
          AFTER
          <li v-for="article in articleAfter" :key="article.id">
            <NuxtLink :to="'/articles/'+article._id">
            {{ article.title }}
          </NuxtLink>
          </li>
        </ul>

      </aside>
      <!-- Main content -->
      <content class="holy-grail__middle">
        <Nuxt />
      </content>

      <!-- Right sidebar -->
      <nav class="holy-grail__right">...</nav>
    </main>
  </div>
  
  </div>
</template>
<script>
export default {
  data() {
    return {
     articles: []
    }
  },

  async fetch() {
      this.articles = await fetch(
      'https://zert.azurewebsites.net/api/articles'
      ).then(res => res.json())
    },


    computed: {
      articleFlame: function () {
        return this.articles.filter(function (article) {
          return article.type == "flame"
        })
      },
      articleAfter: function () {
        return this.articles.filter(function (article) {
          return article.type == "after"
        })
      }
    },


}
</script>
<style scoped>
header {
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
  height: var(--header-height);
}

li {
  align-items: center;
  gap: .25rem;
}

menu,
ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.holy-grail {
  display: flex;
  flex-direction: column;
}

.holy-grail__main {
  /* Take the remaining height */
  flex-grow: 1;

  /* Layout the left sidebar, main content and right sidebar */
  display: flex;
  flex-direction: row;
}

.holy-grail__left {
  width: 25%;
}

.holy-grail__middle {
  /* Take the remaining width */
  flex-grow: 1;
}

.holy-grail__right {
  width: 20%;
}
.link {
  border-radius: .25rem;
  text-decoration: none;
  color: var(--color-secondary);
  font-size: .875rem;
  line-height: 1.25rem;
  padding: .5rem 1rem;
  transition-duration: .15s;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
}

.header-pad {
  padding-left: 2rem;
  padding-right: 2rem;
}

.grid {
  display: grid;
}

.flex {
  display: flex;
}

.grid-cols-12 {
  grid-template-columns: repeat(12, minmax(0, 1fr));
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

.relative {
  position: relative;
}

.h-full {
  height: 100%;
}

.u-border-gray-100 {
  --tw-border-opacity: 1;
  border-color: var(--border-color);
  border: solid;
}

.border-b {
  border-bottom-width: 1px;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-color: var(--border-color);

}

.font-medium {
  font-weight: 500;
}

.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.justify-center {
  justify-content: center;
}

.items-center {
  align-items: center;
}

.flex-1 {
  flex: 1 1 0%;
}
</style>
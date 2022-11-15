<template lang="pug">
    .container.mt-5.mb-5
      .row
        .col-md-12
          Article(:isDetails="true" :article="article")
</template>
  
  <script>
  export default {
    asyncData({$axios, params, redirect}) {
      return $axios.get(`/api/flames/${params.id}`)
      .then(res => {
        if (res.status == 200) {
          return { flame: res.data }
        } else{
          throw new Error
        }
      }).catch(() => {
        redirect('/?status=notfound')
      })
    },
    head() {
      return {
        title: this.flame.title,
        meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.flame.text
        }
      ],
      }
    }
  }
  </script>
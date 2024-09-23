<script setup lang="ts">
  import { ref } from 'vue'
  import { MdPreview } from 'md-editor-v3'
  import { getArticleInfo } from '~~/api/article'
  import { useMainStore } from '~/stores/index';


  const store = useMainStore();

  const { data: articleData, } = await useAsyncData('about_GetInfo', (app) =>{
    console.log('图图',store.counter)
    store.increment()
    localStorage.setItem('abc',JSON.stringify(store.counter))
    let locl = localStorage.getItem('abc') ||''
    console.log('图图1',store.counter,JSON.parse(locl))

    return getArticleInfo({ id: 44, })
  }
  )
  const theme = useTheme()
  const content = articleData.value.info.content
  const images = [
    {
      url: articleData.value.info.cover,
      title: '关于',
    }
  ]
  const mdKey = ref(new Date().getTime())
  onMounted(() => {
    mdKey.value = new Date().getTime()
  })
  useHead({
    title: '关于',
    titleTemplate: title => `${title} - 江夏的个人博客-记录生活记录你~`,
  })
</script>
<template>
  <NuxtLayout name="main-content" :images="images">
    <div class="about-container">
      <h1 class="hidden"> 关于我 - 江夏的博客 </h1>
      <MdPreview
        :key="mdKey"
        v-model="content"
        class="x-md-editor bg-transparent p-4 rounded-box shadow-xl"
        preview-theme="mk-cute"
        preview-only
        :theme="theme"
      />
    </div>
  </NuxtLayout>
</template>
<style lang="less" scoped>
  .about-container {
  }
</style>

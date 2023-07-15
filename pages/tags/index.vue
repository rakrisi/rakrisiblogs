<script lang="ts" setup>
import colorGenerator from "~~/utils/colorGenerator";
useHead({
  title: "Tags",
  meta: [
    {
      name: "description",
      content: "Tags",
    },
  ],
});

const { data: tags } = await useWpApi().getTags();
</script>
<template>
  <PageHeader title="Tags"> </PageHeader>
  <section class="py-10">
    <div class="container">
      <div class="flex flex-wrap gap-5">
        <NuxtLink
          v-for="tag in tags"
          :key="(tag as any).id"
          :to="`/tags/${(tag as any).slug}`"
          class="flex items-center justify-center py-2 px-4 rounded text-white shadow-md hover:shadow-lg duration-200 text-2xl uppercase"
          :style="{ backgroundColor: colorGenerator() }"
        >
          <span class="font-semibold">#{{ (tag as any).name }}</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

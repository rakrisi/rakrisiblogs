<script lang="ts" setup>
const params = useRoute().params;

const { data: tags, error } = await useWpApi().getTag(
  params.slug as string
);

const tag = tags.value[0];
const { data: posts, error: postsError } = await useWpApi().getTagPosts(tag.id
);

useHead({
  title: `Archive: ${tag.name}`,
  meta: [
    {
      name: "description",
      content: `tag ${params.slug}`,
    },
  ],
});
</script>

<template>
  <PageHeader :title="`Archive: ${tag.name}`"> </PageHeader>
  <section class="blogs blogs-archive">
    <div class="container py-10">
      <div class="grid sm:grid-cols-3 gap-10">
        <BlogGrid
          v-for="post in posts"
          :key="post.id"
          :title="post.title.rendered"
          :image="post._embedded['wp:featuredmedia'][0]?.source_url"
          :excerpt="post.excerpt.rendered"
          :slug="post.slug"
        ></BlogGrid>
      </div>
    </div>
  </section>
</template>

import { LinkCard } from "@/components/card/link-card";
import { works } from "@/personal-data/works";
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export const head: DocumentHead = {
  title: "作品一覧 | cp20.dev",
  meta: [
    {
      name: "description",
      content: "しーぴーくんのお手製サイト",
    },
  ],
};

export default component$(() => (
  <div class="mx-auto max-w-7xl px-8 py-16">
    <h1 class="my-8 text-center text-4xl font-semibold">作品一覧</h1>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {works.map((work) => (
        <LinkCard
          href={`/works/${work.id}`}
          image={<work.image class="aspect-[40/21] object-cover" />}
          label={work.title}
          description={work.description}
          key={work.id}
        />
      ))}
    </div>
  </div>
));

import { component$ } from "@builder.io/qwik";
import { Profile } from "@/components/lading-sections/profile";
import { Works } from "@/components/lading-sections/works";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Articles } from "@/components/lading-sections/articles";
import { Skills } from "@/components/lading-sections/skills";
import { Careers } from "@/components/lading-sections/careers";
import { Awards } from "@/components/lading-sections/awards";
import { Certifications } from "@/components/lading-sections/certifications";
import { Indexes } from "@/components/lading-sections/indexes";

export const head: DocumentHead = {
  title: "cp20.dev",
  meta: [
    {
      name: "description",
      content: "しーぴーくんのお手製サイト",
    },
  ],
};

export { useArticles } from "@/routes/api/articles";

export default component$(() => {
  return (
    <div class="mx-auto max-w-7xl space-y-32 px-8 py-16">
      <Profile />
      <Indexes />
      <Works />
      <Articles />
      <Skills />
      <Careers />
      <Awards />
      <Certifications />
    </div>
  );
});

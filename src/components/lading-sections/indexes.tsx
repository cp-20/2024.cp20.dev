import { UniversalLink } from "@/components/ui/link";
import { component$ } from "@builder.io/qwik";

export const Indexes = component$(() => {
  return (
    <div class="grid grid-cols-6 gap-4 max-lg:grid-cols-3 max-sm:grid-cols-2 max-xs:grid-cols-1">
      <UniversalLink
        class="grid place-content-center rounded-md border-2 border-slate-500/10 bg-slate-300/10 p-4 transition-colors duration-200 hover:bg-slate-500/10 dark:bg-slate-500/10 dark:hover:bg-slate-500/25"
        href="#works"
      >
        Works
      </UniversalLink>
      <UniversalLink
        class="grid place-content-center rounded-md border-2 border-slate-500/10 bg-slate-300/10 p-4 transition-colors duration-200 hover:bg-slate-500/10 dark:bg-slate-500/10 dark:hover:bg-slate-500/25"
        href="#articles"
      >
        Articles
      </UniversalLink>
      <UniversalLink
        class="grid place-content-center rounded-md border-2 border-slate-500/10 bg-slate-300/10 p-4 transition-colors duration-200 hover:bg-slate-500/10 dark:bg-slate-500/10 dark:hover:bg-slate-500/25"
        href="#skills"
      >
        Skills
      </UniversalLink>
      <UniversalLink
        class="grid place-content-center rounded-md border-2 border-slate-500/10 bg-slate-300/10 p-4 transition-colors duration-200 hover:bg-slate-500/10 dark:bg-slate-500/10 dark:hover:bg-slate-500/25"
        href="#careers"
      >
        Careers
      </UniversalLink>
      <UniversalLink
        class="grid place-content-center rounded-md border-2 border-slate-500/10 bg-slate-300/10 p-4 transition-colors duration-200 hover:bg-slate-500/10 dark:bg-slate-500/10 dark:hover:bg-slate-500/25"
        href="#awards"
      >
        Awards
      </UniversalLink>
      <UniversalLink
        class="grid place-content-center rounded-md border-2 border-slate-500/10 bg-slate-300/10 p-4 transition-colors duration-200 hover:bg-slate-500/10 dark:bg-slate-500/10 dark:hover:bg-slate-500/25"
        href="#certifications"
      >
        Certifications
      </UniversalLink>
    </div>
  );
});

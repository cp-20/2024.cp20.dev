import { UniversalLink } from "@/components/ui/link";
import { component$ } from "@builder.io/qwik";
import AvatarImage from "@/media/avatar.png?jsx";
import { ThemeSwitch } from "@/components/ui/theme-switch";

export default component$(() => {
  return (
    <header class="px-8 py-4 shadow-sm shadow-slate-600/10 dark:shadow-slate-300/10">
      <div class="mx-auto flex max-w-6xl justify-between">
        <UniversalLink
          href="/"
          class="flex items-center gap-2 text-xl font-semibold transition-opacity duration-100 hover:opacity-70"
        >
          <AvatarImage class="h-8 w-8 rounded-full" />
          <span>cp20.dev</span>
        </UniversalLink>
        <div>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
});

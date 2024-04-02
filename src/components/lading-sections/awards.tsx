import { awards } from "@/personal-data/awards";
import { component$ } from "@builder.io/qwik";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/lading-sections/components";
import { TablerAward } from "@/components/icons/award";
import { UniversalLink } from "@/components/ui/link";

export const Awards = component$(() => (
  <div>
    <Heading>Awards</Heading>
    <div class="mx-auto max-w-2xl space-y-4">
      {awards.map((award) => (
        <UniversalLink
          class="flex items-center rounded-md border-2 border-slate-500/10 bg-slate-300/10 px-8 py-4 transition-colors hover:bg-slate-500/10 dark:bg-slate-500/10 dark:hover:bg-slate-500/25 max-sm:px-4"
          href={award.url}
          key={award.url}
        >
          <TablerAward class="mr-4 h-6 w-6 text-yellow-500" />
          <Text class="flex-1">{award.label}</Text>
          <Text class="ml-auto text-xs font-semibold text-zinc-500 dark:text-zinc-400">
            {award.date}
          </Text>
        </UniversalLink>
      ))}
    </div>
  </div>
));

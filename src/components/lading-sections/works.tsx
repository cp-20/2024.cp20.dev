import { works } from "@/personal-data/works";
import { component$ } from "@builder.io/qwik";
import { Heading } from "@/components/lading-sections/components";
import { TablerChevronRight } from "@/components/icons/chevron-right";
import { LinkCard } from "@/components/card/link-card";

export const Works = component$(() => (
  <div>
    <Heading id="works">Works</Heading>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {works.slice(0, 5).map((work) => (
        <LinkCard
          href={`/works/${work.id}`}
          image={<work.image class="aspect-[40/21] object-cover" />}
          label={work.title}
          description={work.description}
          key={work.id}
        />
      ))}
      <LinkCard
        href="/works"
        containerClass="flex flex-1 items-center justify-center"
      >
        <div>全ての作品を見る</div>
        <TablerChevronRight class="h-6 w-6" />
      </LinkCard>
    </div>
  </div>
));

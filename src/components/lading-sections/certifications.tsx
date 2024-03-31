import { Text } from "@/components/ui/text";
import { certifications } from "@/personal-data/certifications";
import { component$ } from "@builder.io/qwik";
import { Heading } from "@/components/lading-sections/components";
import { TablerCertificate } from "@/components/icons/certificate";

export const Certifications = component$(() => (
  <div>
    <Heading>Certifications</Heading>
    <div class="mx-auto max-w-2xl space-y-4 ">
      {certifications.map((certification) => (
        <div
          class="flex items-center rounded-md bg-slate-400/10 px-8 py-4 dark:bg-slate-500/10"
          key={certification.label}
        >
          <TablerCertificate class="mr-4 h-6 w-6 text-yellow-500" />
          <Text>{certification.label}</Text>
          <Text class="ml-auto text-xs font-semibold text-zinc-500 dark:text-zinc-400">
            {certification.year}
          </Text>
        </div>
      ))}
    </div>
  </div>
));

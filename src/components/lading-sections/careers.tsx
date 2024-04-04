import { component$ } from "@builder.io/qwik";
import { Text } from "@/components/ui/text";
import { careers } from "@/personal-data/careers";
import clsx from "clsx";
import { Heading } from "@/components/lading-sections/components";

export const Careers = component$(() => (
  <div>
    <Heading id="careers">Careers</Heading>
    <div class="mx-auto max-w-2xl space-y-1">
      {careers.map((career, i) => (
        <>
          <div
            class={clsx(
              "flex flex-col-reverse justify-between rounded-md px-8 py-4 sm:flex-row sm:items-center",
              career.active
                ? "bg-slate-600/15 dark:bg-slate-500/25"
                : "bg-slate-400/10 dark:bg-slate-500/20",
            )}
          >
            <div>
              <Text>{career.label}</Text>
              {career.comment && (
                <Text class="mt-1 text-xs text-zinc-900/60 dark:text-zinc-200/60">
                  {career.comment}
                </Text>
              )}
            </div>
            <Text class="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
              {career.date}
            </Text>
          </div>
          {i < careers.length - 1 && (
            <div class="mx-auto h-8 w-1 rounded-md bg-slate-500/50" />
          )}
        </>
      ))}
    </div>
  </div>
));

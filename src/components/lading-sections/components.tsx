import type { IntrinsicElements } from "@builder.io/qwik";
import { component$, Slot } from "@builder.io/qwik";
import clsx from "clsx";

export const Heading = component$<IntrinsicElements["h2"]>(
  ({ class: className, ...props }) => (
    <h2
      class={clsx(
        "relative mb-16 text-center text-3xl font-bold text-zinc-700 dark:text-zinc-100",
        className,
      )}
      {...props}
    >
      <div class="absolute top-1/2 -z-10 h-px w-full bg-slate-300/40 dark:bg-slate-500/30"></div>
      <div class="z-10 mx-auto block w-fit bg-zinc-50 px-8 dark:bg-[#1f1f24]">
        <Slot />
      </div>
    </h2>
  ),
);

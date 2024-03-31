import { UniversalLink } from "@/components/ui/link";
import { Text } from "@/components/ui/text";
import type { JSXOutput } from "@builder.io/qwik";
import { Slot, component$ } from "@builder.io/qwik";
import type { LinkProps } from "@builder.io/qwik-city";
import clsx from "clsx";

type Props = {
  image?: JSXOutput;
  label?: JSXOutput;
  description?: JSXOutput;
  containerClass?: string;
  labelClass?: string;
  descriptionClass?: string;
} & LinkProps;

export const LinkCard = component$<Props>(
  ({
    image,
    label,
    description,
    containerClass,
    labelClass,
    descriptionClass,
    class: className,
    ...props
  }) => (
    <UniversalLink
      class={clsx(
        "flex flex-col overflow-clip rounded-md border-2 border-slate-500/10 bg-slate-300/10 transition-colors duration-200 hover:bg-slate-500/10 dark:bg-slate-500/10 dark:hover:bg-slate-500/25",
        className,
      )}
      {...props}
    >
      {image}
      <div class={clsx("px-8 py-4", containerClass)}>
        {label && (
          <Text class={clsx("font-semibold", labelClass)}>{label}</Text>
        )}
        {description && (
          <Text
            class={clsx(
              "text-sm text-zinc-600 dark:text-zinc-300",
              descriptionClass,
            )}
          >
            {description}
          </Text>
        )}
        <Slot />
      </div>
    </UniversalLink>
  ),
);

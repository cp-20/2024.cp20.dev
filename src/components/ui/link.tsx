import { TablerExternalLink } from "@/components/icons/external-link";
import { Slot, component$ } from "@builder.io/qwik";
import { Link, type LinkProps } from "@builder.io/qwik-city";
import clsx from "clsx";

export const UniversalLink = component$<LinkProps>(({ ...props }) => (
  <Link {...props}>
    <Slot />
  </Link>
));

type Props = {
  external?: boolean;
  hideIcon?: boolean;
} & LinkProps;

export const DefaultLink = component$<Props>(
  ({ external, hideIcon, class: className, ...props }) => {
    return (
      <UniversalLink
        class={clsx(
          className,
          "inline-flex items-center gap-1 text-emerald-500 underline transition-colors duration-100 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-500",
        )}
        rel={external ? "noopener noreferrer" : undefined}
        target={external ? "_blank" : undefined}
        {...props}
      >
        <Slot />
        {!hideIcon && external && <TablerExternalLink />}
      </UniversalLink>
    );
  },
);

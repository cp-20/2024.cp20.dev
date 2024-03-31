import type { JSXOutput } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

type Props = {
  light: JSXOutput;
  dark: JSXOutput;
};

export const WithColorScheme = component$<Props>(({ light, dark }) => {
  return (
    <>
      <div class="dark:hidden">{light}</div>
      <div class="hidden dark:block">{dark}</div>
    </>
  );
});

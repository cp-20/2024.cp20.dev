import type { QwikIntrinsicElements } from "@builder.io/qwik";
import { Slot, component$ } from "@builder.io/qwik";

export const Text = component$<QwikIntrinsicElements["div"]>((props) => {
  return (
    <div {...props}>
      <Slot />
    </div>
  );
});

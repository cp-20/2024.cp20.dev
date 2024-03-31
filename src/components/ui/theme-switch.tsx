import { TablerMoon } from "@/components/icons/moon";
import { TablerSun } from "@/components/icons/sun";
import { component$ } from "@builder.io/qwik";

export const ThemeSwitch = component$(() => {
  return (
    <label
      class="inline-grid h-8 w-8 place-content-center rounded-md border-2 border-slate-500/10 bg-slate-300/10 text-inherit transition-colors duration-200 hover:bg-slate-500/10 dark:bg-slate-500/10 dark:hover:bg-slate-500/25"
      title="ダークモードの切り替え"
    >
      <TablerMoon class="hidden dark:block" />
      <TablerSun class="dark:hidden" />
      <input
        class="hidden"
        type="checkbox"
        id="theme-switch-checkbox"
        onClick$={() => {
          const theme = document.documentElement.className;
          if (theme === "light") {
            document.documentElement.className = "dark";
            localStorage.setItem("color-scheme", "dark");
          } else {
            document.documentElement.className = "light";
            localStorage.setItem("color-scheme", "light");
          }
        }}
      />
    </label>
  );
});

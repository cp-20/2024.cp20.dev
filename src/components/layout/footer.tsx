import { component$ } from "@builder.io/qwik";
import { accounts } from "@/personal-data/accounts";
import { UniversalLink } from "@/components/ui/link";

export default component$(() => {
  return (
    <footer class="px-4 py-8 sm:px-8">
      <div class="mx-auto flex max-w-3xl flex-col justify-between gap-4 xs:flex-row">
        <div>
          <span>(c) 2024 cp20</span>
        </div>
        <div class="flex gap-2">
          {accounts
            .filter((a) => a.type !== "blog")
            .map((account) => (
              <UniversalLink
                key={account.id}
                href={account.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`${account.name} (${account.screenName})`}
                class="inline-grid h-8 w-8 place-content-center rounded-md border-2 border-slate-500/10 bg-slate-300/10 text-inherit transition-colors duration-200 hover:bg-slate-500/10 dark:bg-slate-500/10 dark:hover:bg-slate-500/25"
              >
                <account.icon width={16} height={16} />
              </UniversalLink>
            ))}
        </div>
      </div>
    </footer>
  );
});

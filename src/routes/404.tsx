import { DefaultLink } from "@/components/ui/link";
import { Text } from "@/components/ui/text";
import { Resource, component$, useResource$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useLocation } from "@builder.io/qwik-city";

export const head: DocumentHead = {
  title: "お探しのページは見つかりませんでした | cp20.dev",
};

const fetchPrevPortfolioPage = async (pathname: string) => {
  const prevPortfolios = ["https://2023.cp20.dev"];
  const prevPortfolioUrls = prevPortfolios.map((p) => `${p}${pathname}`);

  const isAvailable = await Promise.all(
    prevPortfolioUrls.map((url) =>
      fetch(url, { method: "HEAD" })
        .then((res) => res.ok)
        .catch(() => false),
    ),
  );
  const availablePages = prevPortfolios.filter((_, i) => isAvailable[i]);

  return availablePages;
};

export default component$(() => {
  const {
    url: { pathname },
  } = useLocation();

  const prevPortfolioPages = useResource$<string[]>(() =>
    fetchPrevPortfolioPage(pathname),
  );

  return (
    <div class="flex h-full flex-col items-center">
      <h1 class="text-6xl">404</h1>
      <Text class="mt-4">お探しのページは見つかりませんでした</Text>
      <Resource
        value={prevPortfolioPages}
        onResolved={(pages) =>
          pages.length > 0 ? (
            <Text class="mt-8">
              もしかして:{" "}
              {pages.map((page) => (
                <DefaultLink href={page} key={page}>
                  {page}
                </DefaultLink>
              ))}
            </Text>
          ) : null
        }
      ></Resource>
      <DefaultLink href="/" class="mt-8">
        トップページに戻る
      </DefaultLink>
    </div>
  );
});

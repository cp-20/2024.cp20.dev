import { LinkCard } from "@/components/card/link-card";
import { TablerChevronRight } from "@/components/icons/chevron-right";
import { Heading } from "@/components/lading-sections/components";
import { Text } from "@/components/ui/text";
import { useArticles } from "@/routes/api/articles";
import { formatDate } from "@/utils/formatDate";
import { Resource, component$ } from "@builder.io/qwik";

export const Skeletons = component$(() => (
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {Array.from({ length: 6 }).map((_, i) => (
      <div key={i} class="rounded-md bg-white dark:bg-slate-500/10">
        <div class="aspect-[40/21] w-full" />
        <div class="p-4">
          <div class="h-4 w-full rounded bg-slate-500/10" />
          <div class="mt-2 h-4 w-1/2 rounded bg-slate-500/10" />
          <div class="mt-2 flex justify-between">
            <div class="mt-2 h-4 w-1/4 rounded bg-slate-500/10" />
            <div class="mt-2 h-4 w-1/4 rounded bg-slate-500/10" />
          </div>
        </div>
      </div>
    ))}
  </div>
));

export const Articles = component$(() => {
  const articles = useArticles();

  return (
    <div>
      <Heading id="articles">Articles</Heading>
      <div>
        <Resource
          value={articles}
          onPending={() => <Skeletons />}
          onRejected={(reason) => (
            <Text class="text-red-500">
              エラーが発生しました ({reason.name})
            </Text>
          )}
          onResolved={(articles) => (
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {articles.slice(0, 5).map((article) => (
                <LinkCard
                  key={article.url}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  containerClass="flex flex-1 flex-col justify-between gap-2"
                  image={
                    article.ogImageUrl && (
                      <img
                        src={article.ogImageUrl}
                        width={600}
                        height={315}
                        class="aspect-[40/21] w-full object-cover"
                        alt=""
                      />
                    )
                  }
                >
                  <div class="font-semibold">{article.title}</div>
                  <div class="flex justify-between text-sm text-slate-500 dark:text-slate-400">
                    <span> {article.source}</span>
                    <span>{formatDate(article.postedAt, "YYYY-MM-DD")}</span>
                  </div>
                </LinkCard>
              ))}
              <LinkCard
                href="/articles"
                containerClass="flex flex-1 items-center justify-center"
              >
                <div>全ての記事を見る</div>
                <TablerChevronRight class="h-6 w-6" />
              </LinkCard>
            </div>
          )}
        ></Resource>
      </div>
    </div>
  );
});

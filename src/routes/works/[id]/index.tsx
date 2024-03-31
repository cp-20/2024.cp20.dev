import { works } from "@/personal-data/works";
import {
  Fragment,
  component$,
  useOnWindow,
  useSignal,
  $,
} from "@builder.io/qwik";
import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";
import { useLocation } from "@builder.io/qwik-city";
import PageNotFound from "@/routes/404";
import { Text } from "@/components/ui/text";
import { DefaultLink, UniversalLink } from "@/components/ui/link";
import AvatarImage from "@/media/avatar.png?jsx";
import { TablerChevronLeft } from "@/components/icons/chevron-left";
import { TablerChevronRight } from "@/components/icons/chevron-right";

import "./style.css";

export const head: DocumentHead = ({ params }) => {
  const work = works.find((work) => work.id === params.id);
  if (!work)
    return { title: "お探しのページは見つかりませんでした | cp20.dev" };

  return {
    title: `作品紹介「${work.title}」 | cp20.dev`,
    meta: [
      {
        name: "description",
        content: `${work.description}`,
      },
    ],
  };
};

declare global {
  interface CSSStyleDeclaration {
    "view-transition-name": string;
  }
}

export const onRequest: RequestHandler = ({ params, status }) => {
  const work = works.find((work) => work.id === params.id);
  if (!work) status(404);
};

const getRepoName = (repo: string) => repo.split("/").slice(-2).join("/");

export default component$(() => {
  const {
    params: { id: workId },
  } = useLocation();

  const workIndex = works.findIndex((work) => work.id === workId);
  if (workIndex === -1) return <PageNotFound />;

  const containerRef = useSignal<HTMLDivElement>();

  const prevWorkIndex = workIndex === 0 ? works.length - 1 : workIndex - 1;
  const nextWorkIndex = workIndex === works.length - 1 ? 0 : workIndex + 1;
  const work = works[workIndex];
  const prevWork = works[prevWorkIndex];
  const nextWork = works[nextWorkIndex];

  const leftTransition = $(() => {
    if (!containerRef.value) return;
    containerRef.value.style["view-transition-name"] = "wipe-left";
  });
  const rightTransition = $(() => {
    if (!containerRef.value) return;
    containerRef.value.style["view-transition-name"] = "wipe-right";
  });
  const cancelTransition = $(() => {
    if (!containerRef.value) return;
    containerRef.value.style["view-transition-name"] = "none";
  });

  const prevWorkLink = (
    <UniversalLink
      href={`/works/${prevWork.id}`}
      onClick$={leftTransition}
      class="flex items-center gap-2 rounded-md px-4 py-2 transition-colors duration-100 hover:bg-slate-500/10 dark:hover:bg-slate-500/10"
    >
      <TablerChevronLeft />
      <span>{prevWork.title}</span>
    </UniversalLink>
  );

  const nextWorkLink = (
    <UniversalLink
      href={`/works/${nextWork.id}`}
      onClick$={rightTransition}
      class="flex items-center justify-end gap-2 rounded-md px-4 py-2 transition-colors duration-100 hover:bg-slate-500/10 dark:hover:bg-slate-500/10"
    >
      <span>{nextWork.title}</span>
      <TablerChevronRight />
    </UniversalLink>
  );

  useOnWindow("popstate", cancelTransition);

  return (
    <div class="relative mx-auto flex max-w-xl flex-col items-center px-8 py-16">
      <div class="w-full gap-4">
        <UniversalLink
          href="/works"
          onClick$={cancelTransition}
          class="mb-8 flex items-center justify-center gap-2 rounded-md border-2 border-slate-500/10 bg-slate-300/10 px-4 py-2 transition-colors duration-200 hover:bg-slate-500/10 dark:bg-slate-500/10 dark:hover:bg-slate-500/25"
        >
          作品一覧に戻る
        </UniversalLink>
      </div>
      <div class="absolute -left-4 top-[32rem] -translate-x-full max-xl:hidden">
        {prevWorkLink}
      </div>
      <div class="absolute -right-4 top-[32rem] translate-x-full max-xl:hidden">
        {nextWorkLink}
      </div>
      <div ref={containerRef}>
        <work.image class="w-full rounded-md" key={work.id} />
        <h1 class="mt-8 text-center text-4xl font-bold">{work.title}</h1>
        <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-[auto,1fr]">
          <Text class="font-semibold text-zinc-600 dark:text-zinc-300 max-sm:text-xs sm:text-right">
            アプリURL
          </Text>
          <Text class="-mt-4 text-zinc-500 dark:text-zinc-400 sm:mt-0">
            <DefaultLink href={work.url} external>
              {work.url}
            </DefaultLink>
          </Text>

          <Text class="font-semibold text-zinc-600 dark:text-zinc-300 max-sm:text-xs sm:text-right">
            制作期間
          </Text>
          <Text class="-mt-4 text-zinc-500 dark:text-zinc-400 sm:mt-0">
            {work.productionTime}
          </Text>
          <Text class="font-semibold text-zinc-600 dark:text-zinc-300 max-sm:text-xs sm:text-right">
            リポジトリ
          </Text>
          <div class="-mt-4 flex flex-wrap gap-2 sm:mt-0">
            {work.repositories.map((repo) => (
              <DefaultLink href={repo} key={repo}>
                {getRepoName(repo)}
              </DefaultLink>
            ))}
          </div>
          <Text class="font-semibold text-zinc-600 dark:text-zinc-300 max-sm:text-xs sm:text-right">
            タグ
          </Text>
          <Text class="-mt-4  flex flex-wrap gap-x-2 text-zinc-500 dark:text-zinc-400 sm:mt-0">
            {work.tags.map((tag, i) => (
              <Fragment key={tag}>
                <span>{tag}</span>
                {i < work.tags.length - 1 && <span> / </span>}
              </Fragment>
            ))}
          </Text>
          <Text class="font-semibold text-zinc-600 dark:text-zinc-300 max-sm:text-xs sm:text-right">
            技術スタック
          </Text>
          <div class="flex flex-wrap gap-x-2 text-zinc-500 dark:text-zinc-400 max-sm:-mt-4">
            {work.techStack.map((tech, i) => (
              <Fragment key={tech.label}>
                <div>{tech.label}</div>
                {i < work.techStack.length - 1 && <div> / </div>}
              </Fragment>
            ))}
          </div>
        </div>
        <div class="mt-8 space-y-4">
          {work.comment.map((comment, i) => (
            <div key={i} class="flex max-xs:flex-col">
              <div class="flex gap-2 max-xs:mb-2 max-xs:ml-3 max-xs:items-center xs:mr-2 xs:mt-3">
                <AvatarImage class="h-8 w-8 rounded-full" />
                <div class="xs:hidden">しーぴー</div>
              </div>
              <div class="mt-4 h-6 w-4 bg-slate-500/10 [clip-path:polygon(0_50%,100%_0,100%_100%)] max-xs:hidden" />
              <div class="ml-4 h-4 w-6 bg-slate-500/10 [clip-path:polygon(0_100%,50%_0,100%_100%)] xs:hidden" />
              <div class="flex-1 rounded-md bg-slate-500/10 p-4">{comment}</div>
            </div>
          ))}
        </div>
        <div class="mt-8 grid w-full grid-cols-2 gap-4">
          <div class="xl:hidden">{prevWorkLink}</div>
          <div class="xl:hidden">{nextWorkLink}</div>
        </div>
      </div>
    </div>
  );
});

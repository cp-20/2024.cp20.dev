import { works } from "@/personal-data/works";
import { component$, useOnWindow, useSignal, $ } from "@builder.io/qwik";
import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";
import { useLocation } from "@builder.io/qwik-city";
import PageNotFound from "@/routes/404";
import { UniversalLink } from "@/components/ui/link";
import AvatarImage from "@/media/avatar.png?jsx";
import { TablerChevronLeft } from "@/components/icons/chevron-left";
import { TablerChevronRight } from "@/components/icons/chevron-right";

import "./style.css";
import { WorkDetail } from "@/components/work-sections/work-detail";

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
    <div class="relative mx-auto flex min-h-[60rem] max-w-xl flex-col items-center px-8 py-16 xl:max-w-screen-2xl">
      <div class="w-full gap-4 xl:hidden">
        <UniversalLink
          href="/works"
          onClick$={cancelTransition}
          class="mb-8 flex items-center justify-center gap-2 rounded-md border-2 border-slate-500/10 bg-slate-300/10 px-4 py-2 transition-colors duration-200 hover:bg-slate-500/10 dark:bg-slate-500/10 dark:hover:bg-slate-500/25"
        >
          作品一覧に戻る
        </UniversalLink>
      </div>
      <div
        ref={containerRef}
        class="grid grid-cols-1 gap-8 xl:grid-cols-[auto,1fr,1fr,auto]"
      >
        <div class="pt-[20rem] max-xl:hidden">{prevWorkLink}</div>
        <div>
          <work.image class="aspect-[40/21] w-full rounded-md" key={work.id} />
          <WorkDetail class="max-xl:hidden" work={work} />
        </div>
        <div>
          <h1 class="mt-8 text-center text-4xl font-bold">{work.title}</h1>
          <WorkDetail class="xl:hidden" work={work} />
          <div class="mt-8 space-y-4">
            {work.comment.map((comment, i) => (
              <div key={i} class="flex max-xs:flex-col">
                <div class="flex gap-2 max-xs:mb-2 max-xs:ml-3 max-xs:items-center xs:mr-2 xs:mt-3">
                  <AvatarImage class="h-8 w-8 rounded-full" />
                  <div class="xs:hidden">しーぴー</div>
                </div>
                <div class="mt-4 h-6 w-4 bg-slate-500/10 [clip-path:polygon(0_50%,100%_0,100%_100%)] max-xs:hidden" />
                <div class="ml-4 h-4 w-6 bg-slate-500/10 [clip-path:polygon(0_100%,50%_0,100%_100%)] xs:hidden" />
                <div class="flex-1 rounded-md bg-slate-500/10 p-4">
                  {comment}
                </div>
              </div>
            ))}
          </div>
          <div class="mt-8 grid w-full grid-cols-2 gap-4">
            <div class="xl:hidden">{prevWorkLink}</div>
            <div class="xl:hidden">{nextWorkLink}</div>
          </div>
        </div>
        <div class="pt-[20rem] max-xl:hidden">{nextWorkLink}</div>
      </div>
    </div>
  );
});

import { TablerLock } from "@/components/icons/lock";
import { DefaultLink } from "@/components/ui/link";
import { Text } from "@/components/ui/text";
import type { Work } from "@/personal-data/works";
import type { QwikIntrinsicElements } from "@builder.io/qwik";
import { Fragment } from "@builder.io/qwik";
import clsx from "clsx";

const getRepoName = (repo: string) => repo.split("/").slice(-2).join("/");

type Props = {
  work: Work;
} & QwikIntrinsicElements["div"];

export const WorkDetail = ({ work, class: className, ...props }: Props) => (
  <div
    class={clsx(
      "mt-8 grid grid-cols-1 gap-4 sm:grid-cols-[auto,1fr]",
      className,
    )}
    {...props}
  >
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
      {work.repositories.map((repo) =>
        repo === "private" ? (
          <Text
            key={repo}
            class="flex items-center gap-1 text-zinc-500 dark:text-zinc-400"
          >
            <span>private</span>
            <TablerLock class="inline size-5" />
          </Text>
        ) : (
          <DefaultLink href={repo} key={repo}>
            {getRepoName(repo)}
          </DefaultLink>
        ),
      )}
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
);

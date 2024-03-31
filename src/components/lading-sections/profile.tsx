import { component$ } from "@builder.io/qwik";

import AvatarImage from "@/media/avatar.png?jsx";
import { DefaultLink, UniversalLink } from "@/components/ui/link";
import { Text } from "@/components/ui/text";
import { accountsMap } from "@/personal-data/accounts";

export const Profile = component$(() => (
  <div>
    <div class="mx-auto flex justify-center gap-16 max-lg:flex-col max-lg:items-center">
      <div class="grid max-w-xl grid-cols-1 gap-8 sm:grid-cols-2">
        <div class="grid place-content-center">
          <AvatarImage alt="" class="h-60 w-60 rounded-full" />
        </div>
        <div class="mx-auto max-w-sm space-y-4">
          <div class="flex items-center gap-4">
            <span class="text-4xl font-bold text-emerald-500">しーぴー</span>
            <span class="mt-1 text-xl">(@cp20)</span>
          </div>
          <div>
            <h3 class="text-xs font-semibold text-zinc-600 dark:text-zinc-300">
              所属
            </h3>
            <Text>東京工業大学 学部2年 (23B)</Text>
            <Text>traP SysAd班 班長</Text>
          </div>
          <div>
            <h3 class="text-xs font-semibold text-zinc-600 dark:text-zinc-300">
              好きな技術
            </h3>
            <Text>Web系全般</Text>
          </div>
          <div>
            <h3 class="text-xs font-semibold text-zinc-600 dark:text-zinc-300">
              趣味
            </h3>
            <Text>漫画 / ボカロ / アニメ / 🥏</Text>
          </div>
          <Text class="text-xs text-zinc-500 dark:text-zinc-400">
            アイコンは
            <DefaultLink
              href="https://twitter.com/sora_douhu"
              external
              hideIcon
            >
              空どうふ
            </DefaultLink>
            さんのをお借りしています
          </Text>
        </div>
      </div>
      <div class="grid w-full max-w-xl grid-cols-2 gap-4 max-xs:grid-cols-1 lg:w-72 lg:grid-cols-1">
        <UniversalLink
          href={accountsMap.twitter.url}
          class="flex items-center justify-between rounded-md border-2 bg-black px-4 py-2 text-zinc-200 transition-opacity hover:opacity-70 dark:border-slate-300/30"
        >
          <div>
            <Text class="text-xs font-semibold">
              {accountsMap.twitter.name}
            </Text>
            <Text class="font-semibold">{accountsMap.twitter.screenName}</Text>
          </div>
          <accountsMap.twitter.icon class="h-6 w-6" />
        </UniversalLink>

        <UniversalLink
          href={accountsMap.zenn.url}
          class="flex items-center justify-between rounded-md border-2 bg-[#3ea8ff] px-4 py-2 text-zinc-200 transition-opacity hover:opacity-80 dark:border-slate-300/30"
        >
          <div>
            <Text class="text-xs font-semibold">{accountsMap.zenn.name}</Text>
            <Text class="font-semibold">{accountsMap.zenn.screenName}</Text>
          </div>
          <accountsMap.zenn.icon class="h-6 w-6" />
        </UniversalLink>
        <UniversalLink
          href={accountsMap.github.url}
          class="flex items-center justify-between rounded-md border-2 bg-black px-4 py-2 text-zinc-200 transition-opacity hover:opacity-70 dark:border-slate-300/30"
        >
          <div>
            <Text class="text-xs font-semibold">{accountsMap.github.name}</Text>
            <Text class="font-semibold">{accountsMap.github.screenName}</Text>
          </div>
          <accountsMap.github.icon class="h-6 w-6" />
        </UniversalLink>
        <UniversalLink
          href={accountsMap.discord.url}
          class="flex items-center justify-between rounded-md border-2 bg-[#5865f2] px-4 py-2 text-zinc-200 transition-opacity hover:opacity-70 dark:border-slate-300/30"
        >
          <div>
            <Text class="text-xs font-semibold">
              {accountsMap.discord.name}
            </Text>
            <Text class="font-semibold">{accountsMap.discord.screenName}</Text>
          </div>
          <accountsMap.discord.icon class="h-6 w-6" />
        </UniversalLink>
      </div>
    </div>
  </div>
));

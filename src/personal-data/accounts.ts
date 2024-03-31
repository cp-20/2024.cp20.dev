import { SimpleIconsDiscord } from "@/components/icons/discord";
import { SimpleIconsGithub } from "@/components/icons/github";
import { IconNote } from "@/components/icons/note";
import { IconQiita } from "@/components/icons/qiita";
import { IconTrap } from "@/components/icons/trap";
import { SimpleIconsX } from "@/components/icons/x";
import { SimpleIconsZenn } from "@/components/icons/zenn";
import type { Component, QwikIntrinsicElements } from "@builder.io/qwik";

export interface Account {
  id: string;
  type: "sns" | "blog" | "other";
  name: string;
  screenName?: string;
  url: string;
  icon: Component<QwikIntrinsicElements["svg"]>;
}

export const accountsMap = {
  twitter: {
    id: "twitter",
    type: "sns",
    name: "Twitter (X)",
    screenName: "@__cp20__",
    url: "https://twitter.com/__cp20__",
    icon: SimpleIconsX,
  },
  github: {
    id: "github",
    type: "sns",
    name: "GitHub",
    screenName: "@cp-20",
    url: "https://github.com/cp-20",
    icon: SimpleIconsGithub,
  },
  discord: {
    id: "discord",
    type: "other",
    name: "Discord",
    screenName: "しぴさば",
    url: "https://discord.gg/YQ7negGTUK",
    icon: SimpleIconsDiscord,
  },
  qiita: {
    id: "qiita",
    type: "blog",
    name: "Qiita",
    screenName: "@cp20",
    url: "https://qiita.com/cp20",
    icon: IconQiita,
  },
  zenn: {
    id: "zenn",
    type: "blog",
    name: "Zenn",
    screenName: "@cp20",
    url: "https://zenn.dev/cp20",
    icon: SimpleIconsZenn,
  },
  note: {
    id: "note",
    type: "blog",
    name: "Note",
    screenName: "@cp20",
    url: "https://note.com/cp20",
    icon: IconNote,
  },
  trap: {
    id: "trap",
    type: "blog",
    name: "traP",
    screenName: "@cp20",
    url: "https://trap.jp/author/cp20",
    icon: IconTrap,
  },
} satisfies Record<string, Account>;

export const accounts = Object.values(accountsMap);

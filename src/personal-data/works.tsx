import ImageDiceSpecV1 from "@/media/works/dice-spec-v1.png?jsx";
import ImageNoLogChat from "@/media/works/no-log-chat.png?jsx";
import ImageTitechLectureList from "@/media/works/titech-lecture-list.png?jsx";
import Image2023Portfolio from "@/media/works/2023.cp20.dev.png?jsx";
import ImageTrapMission from "@/media/works/trap-mission.png?jsx";
import ImageDiceSpecV2 from "@/media/works/dice-spec-v2.png?jsx";
import ImageReadStack from "@/media/works/read-stack.png?jsx";
import ImageTokyoTechSyllabus from "@/media/works/tokyo-tech-syllabus.png?jsx";
import Image2024Portfolio from "@/media/works/2024.cp20.dev.png?jsx";
import ImageCCompiler from "@/media/works/c-compiler.png?jsx";
import ImageTrapConference from "@/media/works/trap-conference.png?jsx";
import type { Component, JSXOutput } from "@builder.io/qwik";
import { Text } from "@/components/ui/text";
import { DefaultLink } from "@/components/ui/link";

export type Tag = "個人開発" | "チーム開発" | "traP" | "SecHack365";
export type TechStackType =
  | "design"
  | "language"
  | "framework"
  | "main"
  | "tool"
  | "ui"
  | "styling"
  | "library"
  | "state"
  | "testing"
  | "validate"
  | "ORM"
  | "database"
  | "object-storage"
  | "runtime"
  | "deploy";

export type Work = {
  id: string;
  title: string;
  description: string;
  url: string;
  repositories: string[];
  productionTime: string;
  techStack: { label: string; type: TechStackType; new: boolean }[];
  image: Component;
  tags: Tag[];
  comment: JSXOutput[];
};

export const works = [
  {
    id: "trap-conference",
    title: "traP Conference イベントページ",
    description: "2024年10月に行われたイベントの公式ページ",
    url: "https://trap-conference.trap.show/",
    repositories: ["private"],
    productionTime: "2024/09/29 ～ 2024/09/30",
    techStack: [
      { label: "TypeScript", type: "language", new: false },
      { label: "Astro", type: "framework", new: true },
      { label: "Tailwind CSS", type: "styling", new: false },
      { label: "NeoShowcase", type: "deploy", new: false },
    ],
    image: ImageTrapConference,
    tags: ["個人開発"],
    comment: [
      <Text key="trap-conference-1">
        イベントページが欲しいよねという話を耳に挟んだので、ガッと作りました
      </Text>,
      <Text key="trap-conference-2">
        CSSアニメーションを多用しつつも、あんまりうざくない感じにまとめるのを意識しました
        (<DefaultLink href="https://x.com/yui540">@yui540</DefaultLink>
        さんリスペクトです)
      </Text>,
      <Text key="trap-conference-3">
        適当に付けた「泡を表示しない」オプションに言及してくれる人が思ったより多くてびっくりしました
      </Text>,
    ],
  },
  {
    id: "c-compiler",
    title: "自作Cコンパイラ",
    description: "セルフホストできるCコンパイラ",
    url: "https://github.com/cp-20/c-compiler",
    repositories: ["https://github.com/cp-20/c-compiler"],
    productionTime: "2024/04/01 ～ 2024/08/22",
    techStack: [
      { label: "C", type: "language", new: true },
      { label: "Make", type: "tool", new: true },
    ],
    image: ImageCCompiler,
    tags: ["個人開発"],
    comment: [
      <Text key="c-compiler-1">
        セルフホストは人類の夢だと思っているので、やりました
      </Text>,
      <Text key="c-compiler-2">
        Cとかいう言語、メモリ管理とか文字列操作とか辛すぎてもう触りたくないです
      </Text>,
      <Text key="c-compiler-3">
        詳しいことは
        <DefaultLink href="https://trap.jp/post/2313/">ブログ</DefaultLink>
        に全部書いたので、それを読めば全て分かります
      </Text>,
    ],
  },
  {
    id: "2024-portfolio",
    title: "cp20.dev (2024)",
    description: "しーぴーくんのお手製サイト",
    url: "https://cp20.dev",
    repositories: ["https://github.com/cp-20/2024.cp20.dev"],
    productionTime: "2024/03/11 ～ 2024/03/31 (実際に開発してたのは4日ぐらい)",
    techStack: [
      { label: "TypeScript", type: "language", new: false },
      { label: "Qwik City", type: "framework", new: true },
      { label: "Qwik", type: "main", new: true },
      { label: "Vite", type: "tool", new: false },
      { label: "Tailwind CSS", type: "styling", new: false },
      { label: "Cloudflare Pages", type: "deploy", new: false },
    ],
    image: Image2024Portfolio,
    tags: ["個人開発"],
    comment: [
      <Text key="2024-portfolio-1">
        なぜか
        <DefaultLink href="/works/2023-portfolio">
          去年のポートフォリオ
        </DefaultLink>
        を4/1に出していたので今年も4/1に出したいなという気持ちで開発を始めました。
      </Text>,
      <Text key="2024-portfolio-2">
        Qwikずっと気になりつつも触ってなかったので、いい機会だと思って触ってみました。コンセプトがかなり洗練されていて良いなと思った一方で、やはりエコシステムとかコミュニティはReactとかVueに比べると劣るなぁという印象
        (それはそう)
      </Text>,
      <Text key="2024-portfolio-3">
        たぶん来年も作り直すので、お楽しみに。来年はどんなスタックで作るんだろうね。
      </Text>,
    ],
  },
  {
    id: "tokyo-tech-syllabus",
    title: "東工大シラバス",
    description: "東工大の講義を爆速で検索できるサイト",
    url: "https://tokyo-tech-syllabus.cp20.dev",
    repositories: ["https://github.com/cp-20/tokyo-tech-syllabus"],
    productionTime: "2024/03/18 ～ 2024/03/31",
    techStack: [
      { label: "TypeScript", type: "language", new: false },
      { label: "Nuxt", type: "framework", new: false },
      { label: "Vue", type: "main", new: false },
      { label: "Vite", type: "tool", new: false },
      { label: "PrimeVue", type: "ui", new: false },
      { label: "Tailwind CSS", type: "styling", new: false },
      { label: "Zod", type: "validate", new: false },
      { label: "Drizzle ORM", type: "ORM", new: false },
      { label: "Cloudflare D1", type: "database", new: true },
      { label: "Cloudflare Pages", type: "deploy", new: false },
    ],
    image: ImageTokyoTechSyllabus,
    tags: ["個人開発", "traP"],
    comment: [
      <Text key="tokyo-tech-syllabus-1">
        2024年度版の東工大シラバスです。
        <DefaultLink href="/works/titech-lecture-list">
          去年も作った
        </DefaultLink>
        んですが、今年はもっとパワーアップして新登場です。
      </Text>,
      <Text key="tokyo-tech-syllabus-2">
        去年はRDBって何？みたいな状態だったのでまともな検索速度ではなかった
        (それをKVで無理やり補っていた)
        んですが、今年はRDBを完全に理解した()のでしっかりと検索速度が出ます。偉い。
      </Text>,
      <Text key="tokyo-tech-syllabus-3">
        色々裏話とかは traP Techbook (
        <DefaultLink href="https://techbookfest.org/event/tbf16" external>
          技術書典16
        </DefaultLink>
        で発売予定) に書いたので、気になる人はチェックしてね～
      </Text>,
    ],
  },
  {
    id: "read-stack",
    title: "ReadStack",
    description: "技術記事の未読消化サポートアプリ",
    url: "https://read-stack.cp20.dev",
    repositories: [
      "https://github.com/cp-20/read-stack",
      "https://github.com/cp-20/read-stack-extension",
      "https://github.com/cp-20/flutter-test",
    ],
    productionTime: "2023/06 ～ 2024/03",
    techStack: [
      { label: "TypeScript", type: "language", new: false },
      { label: "Dart", type: "language", new: true },
      { label: "Next.js", type: "framework", new: false },
      { label: "Plasmo", type: "main", new: true },
      { label: "React", type: "main", new: false },
      { label: "Hono", type: "main", new: true },
      { label: "Flutter", type: "main", new: true },
      { label: "Turborepo", type: "tool", new: true },
      { label: "Biome", type: "tool", new: true },
      { label: "Mantine UI", type: "ui", new: false },
      { label: "Emotion", type: "styling", new: false },
      { label: "Zod", type: "validate", new: false },
      { label: "Jotai", type: "state", new: false },
      { label: "Drizzle ORM", type: "ORM", new: true },
      { label: "Supabase", type: "database", new: false },
      { label: "Bun", type: "runtime", new: true },
      { label: "On-premises", type: "deploy", new: false },
    ],
    image: ImageReadStack,
    tags: ["個人開発", "SecHack365"],
    comment: [
      <Text key="read-stack-1">
        開発前から半年ぐらいゆっくり温めていたアイデアを
        <DefaultLink href="https://sechack365.nict.go.jp/" external>
          SecHack365
        </DefaultLink>
        に出したら採択されてしまったので開発を始めました。
      </Text>,
      <Text key="read-stack-2">
        自分が欲しいものを作ろうという思いで1年間開発を続けて、(成果報告会には惜しくも間に合わなかったんですが)
        なんとかしっかりと完成させることができてホッとしています。
      </Text>,
      <Text key="read-stack-3">
        技術的なところで言えば、新しい技術にチャレンジしまくったプロダクトだと思います。普段はWebアプリを作っているんですが、今回はそれに加えてブラウザ拡張機能とモバイルアプリを開発しました。特にモバイルアプリでiOSデバイスを持っていない中でiOSアプリをリリースまでしたの、かなり頑張ったと思います。SecHackのおかげでもあるので、かなり感謝しています。そのうちブログも書こうかと思います。
      </Text>,
      <Text key="read-stack-4">そのうち記事を書きます、、たぶん、、、</Text>,
    ],
  },
  {
    id: "dice-spec-v2",
    title: "ダイススペック v2",
    description: "TRPGのちょっとしたサービスを集めたツール",
    url: "https://dicespec.vercel.app",
    repositories: ["https://github.com/cp-20/dice-spec-v2"],
    productionTime: "2023/09/25 ～ 2023/10/13",
    techStack: [
      { label: "Figma", type: "design", new: true },
      { label: "TypeScript", type: "language", new: false },
      { label: "Next.js (App Router)", type: "framework", new: true },
      { label: "React", type: "main", new: false },
      { label: "shadcn/ui", type: "ui", new: true },
      { label: "Tailwind CSS", type: "styling", new: false },
      { label: "Valibot", type: "validate", new: true },
      { label: "Jotai", type: "state", new: false },
      { label: "Vitest", type: "testing", new: true },
      { label: "Firebase", type: "object-storage", new: false },
      { label: "Vercel", type: "deploy", new: false },
    ],
    image: ImageDiceSpecV2,
    tags: ["個人開発"],
    comment: [
      <Text key="dice-spec-v2-1">
        1年越しぐらいに
        <DefaultLink href="/works/dice-spec-v1">ダイススペック</DefaultLink>
        をリニューアルしました。
      </Text>,
      <Text key="dice-spec-v2-2">
        最初はFigmaの練習をしようと思ってダイススペックのUIをトレースしようというところから始まったんですが、デザインを作ったらアプリも改修したくなってきてしまって、結局全部をリニューアルしてしまいました。
      </Text>,
      <Text key="dice-spec-v2-3">
        Next.js App
        Routerとか、shadcn/uiとか、Valibotとか、結構新しい技術を触れて満足です。前と比べて機能面で良くなっているかと言われると微妙ですが、、
      </Text>,
      <Text key="dice-spec-v2-4">
        ちなみにボクの作ったアプリの中では一番多くの人に使っていただいていて、月3000人ぐらいのユーザーがいます。ありがたいです。今後もゆるりとメンテしていくのでよろしくお願いします。
      </Text>,
    ],
  },
  {
    id: "trap-mission",
    title: "traP Mission",
    description: "ミッション形式でtraPに慣れよう！",
    url: "https://mission.trap.games",
    repositories: [
      "https://github.com/traP-jp/h23s_26",
      "https://github.com/traP-jp/h23s_26-UI",
    ],
    productionTime: "2023/06/17 ～ 2023/06/18 (+ 1週間の準備期間)",
    techStack: [
      { label: "Go", type: "language", new: false },
      { label: "TypeScript", type: "language", new: false },
      { label: "Next.js", type: "framework", new: false },
      { label: "React", type: "main", new: false },
      { label: "Mantine UI", type: "ui", new: false },
      { label: "Emotion", type: "styling", new: false },
      { label: "Zod", type: "validate", new: false },
      { label: "Jotai", type: "state", new: false },
      { label: "NeoShowcase", type: "deploy", new: true },
    ],
    image: ImageTrapMission,
    tags: ["チーム開発", "traP"],
    comment: [
      <Text key="trap-mission-1">traPの春ハッカソンで作った作品です。</Text>,
      <Text key="trap-mission-2">
        traPはフロントエンドをVueで書くことが多いんですが、ボクの一存でNext.jsで書くことにしました。別に強要したとかそういう感じじゃないよ、一応。
      </Text>,
      <Text key="trap-mission-3">
        新入生なのに慣れてるからという理由でフロントエンドのリーダーをやりました。まぁ技術的には問題ないんですが、マネジメント力がうにょーんという感じなので、今年はもっと頑張りたいところです。
      </Text>,
    ],
  },
  {
    id: "2023-portfolio",
    title: "cp20.dev (2023)",
    description: "しーぴーくんの生態がわかるサイト",
    url: "https://2023.cp20.dev",
    repositories: ["https://github.com/cp-20/2023.cp20.dev"],
    productionTime: "2023/03/19 ～ 2023/03/27",
    techStack: [
      { label: "TypeScript", type: "language", new: false },
      { label: "Next.js", type: "framework", new: false },
      { label: "React", type: "main", new: false },
      { label: "Mantine UI", type: "ui", new: false },
      { label: "Emotion", type: "styling", new: false },
      { label: "Zod", type: "validate", new: false },
      { label: "Jotai", type: "state", new: false },
      { label: "Vercel", type: "deploy", new: false },
    ],
    image: Image2023Portfolio,
    tags: ["個人開発"],
    comment: [
      <Text key="2023-portfolio-1">
        某所に応募するために作ったのがキッカケです。
      </Text>,
      <Text key="2023-portfolio-2">
        でもポートフォリオ作るとなんか楽しいし、人に見せるときにとりあえずこれ見せとけばいいやってなるので、便利でしたね。
      </Text>,
      <Text key="2023-portfolio-3">
        <DefaultLink href="/works/2024-portfolio">
          2024年になってリニューアル
        </DefaultLink>
        したらしいですよ。
      </Text>,
    ],
  },
  {
    id: "titech-lecture-list",
    title: "東工大講義リスト",
    description: "東工大の講義を検索できるサービス",
    url: "https://titech-lecture-list.vercel.app",
    repositories: ["https://github.com/cp-20/titech-lecture-list"],
    productionTime: "	2022/04/06 ～ 2022/04/15",
    techStack: [
      { label: "TypeScript", type: "language", new: false },
      { label: "Next.js", type: "framework", new: false },
      { label: "React", type: "main", new: false },
      { label: "Mantine UI", type: "ui", new: false },
      { label: "Emotion", type: "styling", new: false },
      { label: "Zod", type: "validate", new: false },
      { label: "Jotai", type: "state", new: false },
      { label: "Prisma", type: "ORM", new: true },
      { label: "Supabase", type: "database", new: true },
      { label: "Vercel KV", type: "database", new: true },
      { label: "Vercel", type: "deploy", new: false },
    ],
    image: ImageTitechLectureList,
    tags: ["個人開発"],
    comment: [
      <Text key="titech-lecture-list-1">
        公式のOCWの検索能力が低すぎる & 遅い +
        まともにフィルターできる機能はポータルにログインしないと使えないという中々な仕様だったので、自分でOCWをスクレイピングして整形してデータベース(?)化しました
      </Text>,
      <Text key="titech-lecture-list-2">
        <DefaultLink href="/works/tokyo-tech-syllabus">
          1年後にリメイクしたバージョン
        </DefaultLink>
        があるらしいです。
      </Text>,
    ],
  },
  {
    id: "no-log-chat",
    title: "のーろぐちゃっと",
    description: "ログが残らないチャットでみんなと会話しよう！",
    url: "https://no-log-chat.vercel.app",
    repositories: [
      "https://github.com/cp-20/no-log-chat",
      "https://github.com/cp-20/no-log-chat-server",
    ],
    productionTime: "2023/01/05～2023/01/11",
    techStack: [
      { label: "TypeScript", type: "language", new: false },
      { label: "Next.js", type: "framework", new: false },
      { label: "React", type: "main", new: false },
      { label: "Mantine UI", type: "ui", new: false },
      { label: "Emotion", type: "styling", new: false },
      { label: "Jotai", type: "state", new: false },
      { label: "WebSocket", type: "library", new: false },
      { label: "Deno", type: "runtime", new: false },
      { label: "Vercel", type: "deploy", new: false },
    ],
    image: ImageNoLogChat,
    tags: ["個人開発"],
    comment: [
      <Text key="no-log-chat-1">
        受験期真っ最中でプログラミングを封印していた時期に、耐えきれなくなって「ちょっとだけ、ちょっとだけならセーフ」という気持ちで作ったアプリです。
      </Text>,
      <Text key="no-log-chat-2">
        リリース直後にほんのちょっとバズったんですが、どうしてもリアルタイム性が求められるという都合上アクティブユーザーがそれなりの数いないと成り立たないので、アプリとしては全然機能してないです。
      </Text>,
      <Text key="no-log-chat-3">
        アイデア自体は悪くないと思うので、リアルタイム性と何かをマッチさせていい感じにしてみたいという思いがあったりなかったりする。
      </Text>,
    ],
  },
  {
    id: "dice-spec-v1",
    title: "ダイススペック (v1)",
    description: "TRPGのちょっとしたサービスを集めたツール",
    url: "https://v1-dicespec.vercel.app/",
    repositories: ["https://github.com/cp-20/Dice-Spec"],
    productionTime: "2022/05/26 ～ 2022/06/04 + メンテ",
    techStack: [
      { label: "TypeScript", type: "language", new: false },
      { label: "Next.js", type: "framework", new: false },
      { label: "React", type: "main", new: false },
      { label: "Chakra UI", type: "ui", new: false },
      { label: "Tailwind CSS", type: "styling", new: false },
      { label: "Chart.js", type: "library", new: false },
      { label: "Jotai", type: "state", new: false },
      { label: "Jest", type: "testing", new: false },
      { label: "Firebase", type: "object-storage", new: false },
      { label: "Vercel", type: "deploy", new: false },
    ],
    image: ImageDiceSpecV1,
    tags: ["個人開発"],
    comment: [
      <Text key="dice-spec-v1-1">
        初めての個人開発アプリです。でもこれが一番使われているアプリです。
      </Text>,
      <Text key="dice-spec-v1-2">
        ダイスの期待値を求められたら便利で面白いなーという発想から、1週間で作りきろう！と決めて作り始めました。結局1週間ではギリ終わらなかったんですが、求めていたものをとりあえず作れたので満足です。
      </Text>,
      <Text key="dice-spec-v1-3">
        気が向いたときにリファクタやらアプデやらをやってるので、気になる人は#ダイススペックとかを観測してみるといいんじゃないでしょうか。と言っても今は開発は
        <DefaultLink href="/works/dice-spec-v2">v2</DefaultLink>
        の方にシフトしてますが。
      </Text>,
      <Text key="dice-spec-v1-4">
        ダイスの期待値を求めるアルゴリズムは
        <DefaultLink
          href="https://qiita.com/cp20/items/89aa69111d631e8ac00f"
          external
        >
          リリース記事のpart3
        </DefaultLink>
        で解説しているのでそちらもぜひ
      </Text>,
    ],
  },
] satisfies Work[];

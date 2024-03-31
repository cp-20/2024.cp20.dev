import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";
import { ColorSchemeDetector } from "@/components/functional/color-scheme-detector";

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />

        <meta property="og:type" content="article"></meta>
        <meta property="og:url" content="https://cp20.dev"></meta>
        <meta property="og:locale" content="ja"></meta>
        <meta property="og:image" content="https://cp20.dev/ogp.png"></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content="@__cp20__"></meta>
        <meta name="twitter:image" content="https://cp20.dev/ogp.png"></meta>
        <RouterHead />
        <ColorSchemeDetector />
        <ServiceWorkerRegister />
      </head>
      <body
        lang="ja-JP"
        class="bg-zinc-50 text-black dark:bg-[#1f1f24] dark:text-zinc-200"
      >
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});

import { DefaultLink } from "@/components/ui/link";
import { component$ } from "@builder.io/qwik";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/lading-sections/components";

export const Skills = component$(() => (
  <div>
    <Heading>Skills</Heading>
    <div class="space-y-6">
      <div>
        <h3 class="mb-6 border-l-[6px] border-zinc-600 pl-4 text-lg font-bold dark:border-zinc-300">
          Webフロントエンド
        </h3>
        <div class="space-y-4">
          <Text>
            一番やってる年数が長くて、一番得意で、一番好きな分野です。
          </Text>
          <Text>
            やっている年数的には React (3年ぐらい) &gt; Vue (1年ぐらい) &gt;
            Qwik (1か月ぐらい)
            と言う感じで、習熟度も同じぐらいです。Vueを触った結果やっぱJSXだなぁの気持ちになったんですが、Reactって重くない？の気持ちが高まっているので、QwikやらSolidやらが気になるお年頃です。気になるのでこのサイトをQwikで作りました。
          </Text>
          <Text>
            前まではNext.jsをガンガン使っていたんですが、最近はNuxt.jsに浮気をしています。Next.jsは割と使いやすいフレームワークだったんですが、最近機能が増えつつあって複雑さが増しているので、個人的にとりあえずの選択肢には上がらなくなってきています。その点Nuxt.jsは結構始めやすい感じがあっていいですね。色んなところが重いのとVueなのを除けばかなり良い。
          </Text>
          <Text>
            某先輩にSolidを推されていて気になっているので、2024年度はSolidを触ってみたいなと思っています。
          </Text>
        </div>
      </div>
      <div>
        <h3 class="mb-4 border-l-[6px] border-zinc-600 pl-4 text-lg font-bold dark:border-zinc-300">
          Webバックエンド
        </h3>
        <div class="space-y-4">
          <Text>
            ボクの開発は割と個人開発が多いんですが、個人開発でWebアプリを作ろうとすると必然的にバックエンドを書く必要が生じます。昔はうすーいバックエンドを嫌々書いていたんですが、最近では設計とかも意識しつつ楽しく書けるようになってきました。だいたいLINEのインターンのおかげです。
            (詳しくは
            <DefaultLink
              href="https://zenn.dev/trap/articles/line-summer-intern-2023"
              external
            >
              インターンの参加記
            </DefaultLink>
            を読むと分かります)
          </Text>
          <Text>
            traPの開発ではGoを使っています。なんで採用しているのか詳しくは知らないですが、速さとか書きやすさとかなんですかね。その一方で個人開発でそこまでの速さはいらないかなと思っているので、自分が一番書き慣れているTypeScriptで書くことが多いです。フロントエンドとバックエンドを両方TypeScriptで書くことで、型を共有できたりして嬉しいというメリットもあります。
          </Text>
        </div>
      </div>
      <div>
        <h3 class="mb-4 border-l-[6px] border-zinc-600 pl-4 text-lg font-bold dark:border-zinc-300">
          インフラ
        </h3>
        <div class="space-y-4">
          <Text>
            traPのインフラ保守として触っていたり、自宅サーバーの保守で触っていたりします。
          </Text>
          <Text>
            もともとちょっと興味はあったんですが、traPでSysAd班の班長になったのをきっかけに割と触るようになりました。その流れで自宅サーバーを買ってゆるりと保守していたりします。
          </Text>
          <Text>
            Ansibleはそれなりに書けて、TerraformみたいなIaCはあんまり触ったことがないという感じです。インフラはツールを如何に使うかというよりは細かい設定だったりの知識が大事になってくると思うので、そこら辺をしっかりを身に付けていきたい気持ちです。
          </Text>
        </div>
      </div>
      <div>
        <h3 class="mb-4 border-l-[6px] border-zinc-600 pl-4 text-lg font-bold dark:border-zinc-300">
          モバイルアプリ
        </h3>
        <div class="space-y-4">
          <Text>
            Flutterで軽くモバイルアプリも触りました。ただ正直Flutter /
            Dartが結構書いててつらくて、良くわからないなと言う気持ちでいっぱいでした。
          </Text>
          <Text>
            だいたいのユースケースはPWAとかで良い気がしているので、あまりやりたくないのと、もしやるならTauriとかを使ってみたい気持ちがあります。
          </Text>
        </div>
      </div>
      <div>
        <h3 class="mb-4 border-l-[6px] border-zinc-600 pl-4 text-lg font-bold dark:border-zinc-300">
          競技プログラミング
        </h3>
        <div class="space-y-4">
          <Text>
            <DefaultLink href="https://atcoder.jp/users/cp20" external>
              AtCoderアカウント
            </DefaultLink>
            は割と前から持っていて、ずっとレート0を貫いていた(?)んですが、最近やっとratedのコンテストに出始めてレートが上がってきました。
          </Text>
          <Text>
            ABC3回解いたら入茶して、今は茶色です。競技プログラミングメインでやってない人は水色ぐらいまで行ってやめるという噂を聞いたので、とりあえず水色を目標にしてやっています。
          </Text>
        </div>
      </div>
    </div>
  </div>
));

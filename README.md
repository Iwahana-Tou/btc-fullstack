# DIG-QUEST

懐かしのドット絵のドラ ○ ンクエスト MVP です。

## 事前準備

### データベースの構築

```sh
psql
CREATE DATABASE dragon_quest;
\q
```

.env ファイルの作成（USER や PASSWORD など必要に応じて記述してください）

```sh
cd back
cp .env.sample .env
```

### build

```sh
cd .. && npm run build
```

サーバーの起動

```sh
npm run start
```

## 遊び方

### ・Login

- ユーザーネームの入力

- パスワード入力、"Login" クリック！

- 未登録の場合はログインできませんので "New Account" で新しく作成してください

### ・New Account

- ユーザーネームの入力（これがキャラクターのネームになります）

> 注意 ⚠️：これは他の人と同じものは登録できません！

- パスワード入力（忘れないで！）

- "Create" で新規作成、ログインまで行います。

> ゲーム画面に移行しない場合違うユーザーネームをお試しください。

- "Back" でログイン画面に戻ります。

### ・Battle

- たたかうボタンでランダムな攻撃が繰り出されます。またモンスターからの攻撃も繰り出されます。

> ❔ 一定確率で会心の一撃が出るかも...❔

- にげるボタンで戦闘から離脱できます。

- 先頭に勝利すると "RESULT" 画面が表示されます。

- "RESULT"画面では "NEXT" で次の戦闘へ、"Logout" で "Login" 画面へ移動します。

- これまで倒したモンスターもここに表示されます。

- プレイヤーが倒されてしまうと "CONTINUE?" 画面が表示されます。

- "CONTINUE?"画面では "✝️ ふっかつ ✝️" で次の戦闘に復帰できます。

> ふっかつのじゅもん "ザオ ○ ル" 代償は...

## このアプリの拡張計画

### ・レベルシステムの実装

これには DB にモンスターのから手に入る経験値、Player の蓄積した経験値、  
経験値テーブル等の情報を追加しなければなりません

### ・アイテムや装備の実装

### ・BOSS モンスターの実装

### ・攻撃エフェクト、ダメージエフェクト、サウンドエフェクトの実装

### ・ログインの Cookie の実装

## 使用技術

### Frontend

- React

- React-router-dom

- Vite

### Backend

- crypto

- express.js

- knex.js

- dotenv

- cors

### DateBase

- postgres

### Font

- Google Fonts DotGothic16

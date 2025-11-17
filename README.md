# DIG-QUEST

懐かしのドット絵のドラ ○ ンクエスト MVP です。

## 事前準備

### front

依存関係のインストール

```sh
cd front && npm install
```

サーバーの起動

```sh
npm run dev
```

### back

依存関係のインストール

```sh
cd ../back && npm install
```

データベースの構築

```sh
psql
CREATE DATABASE dragon_quest;
\q
```

.env ファイルの作成（USER や PASSWORD など必要に応じて記述してください）

```sh
cp .env.sample .env
```

マイグレーションとシード

```sh
npm run db:migrate
npm run db:seed
```

データベースの確認

```sh
psql -d dragon_quest
\dt
SELECT * FROM player;
\q
```

サーバーの起動

```sh
npm run dev
```

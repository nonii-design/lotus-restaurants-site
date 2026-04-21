# 有限会社 Lotus — 飲食ブランド LP（SUIREN / 粋蓮）

Next.js（App Router）+ Tailwind CSS で構築した、有限会社 Lotus の飲食ブランド向けランディングページです。Vercel への自動デプロイ（GitHub 連携）を前提としています。

デザインは [Notion Inspired Design System](https://getdesign.md/notion/design-md) をベースに、飲食ブランド向けに earthy brown（`#523410`）をアクセントとして採用した "warm minimalism" テーマ。

## 対象ブランド・店舗

- **お箸ビストロ SUIREN**（志木）
- **地鶏と島野菜 粋蓮**（宮古島）
- **炉と島釜飯 粋蓮**（宮古島・2026年6月頃オープン予定）

## 開発

```bash
npm install
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

## ビルド

```bash
npm run build
npm run start
```

## 文言・リンクの編集

`lib/site-config.ts` を編集します。

- 各店舗の **Instagram**・**予約URL**・**Google ビジネスプロフィール** のURL
- **画像**（`/public/images/` 配下のローカルファイルをそのまま指定）
- **ブランド動画**（SUIREN ＋ 粋蓮 合同）: `brandVideo.src` に `/videos/xxx.mp4` を指定（`public/videos/` にファイルを配置）
- **有限会社 Lotus** の所在地・代表・メール・設立・資本金などは `company` オブジェクト

## 画像の差し替え

`public/images/{store-slug}/` の中にオリジナル画像を置き、`lib/site-config.ts` の `heroImage` / `gallery` のパスを更新してください。

- `/images/suiren-shiki/` — お箸ビストロ SUIREN（志木）
- `/images/suiren-miyako/` — 地鶏と島野菜 粋蓮（宮古島）

## デプロイ（Vercel）

このリポジトリは GitHub に push すると Vercel が自動でビルド・デプロイします。

### 初回セットアップ手順

1. GitHub で `nonii-design/lotus-restaurants-site`（Public）を空のリポジトリとして作成（README や .gitignore は付けない）
2. このフォルダで:

   ```bash
   git remote add origin https://github.com/nonii-design/lotus-restaurants-site.git
   git branch -M main
   git push -u origin main
   ```

3. [vercel.com](https://vercel.com) にログインし、「**Add New…** → **Project**」を選択
4. 「Import Git Repository」で `nonii-design/lotus-restaurants-site` を選択
5. **Framework Preset** は `Next.js`（自動検出）、**Root Directory** は `./`（そのまま）
6. 「Deploy」を押すと初回ビルドが開始され、完了すると `xxxx.vercel.app` の URL が発行される

### 日常の運用

- `main` ブランチに `git push` すると Vercel が自動で本番デプロイを走らせます
- Pull Request を作ると Vercel が自動でプレビュー URL を発行します

### カスタムドメイン

Vercel の Project Settings → Domains から独自ドメイン（例: `and-suiren.com`）を設定できます。DNS 側で Vercel が指示する `CNAME` / `A` レコードを設定するだけで切り替わります。

## ライセンス

Private（社内利用）

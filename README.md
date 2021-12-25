# Nuxt製 YouTube Clone

https://v3.nuxtjs.org/

## TODO

- エラー処理（404など）
- バーセルにデプロイ？
- スクロールイベントを取得する

## 初期設定

```
# 必要なモジュールをインストール
$ yarn install

# ビルド確認（typeファイルを生成するために初回は必ず実行する）
$ yarn build
```

直下に.nuxtディレクトリが生成されていれば完了。



## エラーメモ

vscode起動時にtypescriptの未定義エラーが出る場合は一度`yarn run dev`を実行する  
（extendsされているため）

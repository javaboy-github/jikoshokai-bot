# About
自己紹介用のDiscordのbotです。
`/setinfo <自分について>`で自分について設定でき、
`/getinfo <調べてい人のID>`で調べたい人についででます。

# Run
nodejsといくつかの環境変数の設定等が必要です。
まず、firebaseのプロジェクトを作って、Firebase Admin SDKの秘密鍵をcloneしてそのリポジトリの中にいれます。
このとき、名前は`private_key.json`でお願いします。

次に環境変数、`databaseurl`にfirebaseのRealtime databseのurl、`token`にdiscordのボットのトークンを入れておきます。

最後に以下のコマンドで実行できます。

```bash
$ npm i
$ npm run start
```

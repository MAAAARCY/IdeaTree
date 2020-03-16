# IdeaTree

## このアプリについて

## Gitの使い方的な


### 最初の構築


まずは、forkボタンを押します 
すると自分のアカウント上にも同じリポジトリができる 

次にcloneします 
git clone https://github.com/MAAAARCY/IdeaTree.git 
このコマンドを打つと自分のパソコンにフォルダやファイルが全てコピーされます


### コードを書く前に


作業用ブランチを作っておきましょう 
vscode画面左下に"master"というところがあります 
これをクリックすると画面上部に"Create new branch"というのが出るのでそれを押します 
クリックしたらブランチ名を入力します。ここでは"[username]_develop"にしておきましょう 
[username]には自分のusernameをいれてください 
画面左下の"master"だった所が"[username]_develop"に変わればちゃんとブランチが作れています 


### 自分でコードを書いてそれを反映させたい！

コードを書いたら、vscodeサイドバーにある"Source Control"を押します 
そうすると"CHANGES"というところに自分が編集したコードが入っていると思います。 
Add,Commit,Pushといきたいですが、まずはPullをします 
"Message"上部にある"More Actions"を選択し、"Pull from"を選択しましょう 
origin/masterからpullしてきてください 

次に"CHANGES"の所にカーソルを当てると"CHANGES"の隣にプラスボタンが出てきます 
それをクリックすると"STAGED CHANGES"という所に自分の編集したファイルが移動します 
次に"Message"という所に自分が変更した所についてのコメントを入れましょう(Commit Message) 
コメントをしたら上のチェックマークを押しましょう 
編集したファイル名がなくなっていればきちんとCommitできています 

では、次はPushです 
チェックマークの2つ右の"More Actions"を押します。押したら"Push to"を選択します。 
警告が表示されますがPushしてみてください。Pushできたら自分のページの方を見に行きましょう 
自分のページの"branches"を押して"[username]_develop"ブランチをクリックしてみてください。 
そうすると自分が編集したファイルの横に自分のCommitメッセージが書かれていると思います。Pushできました！！ 

ではチームリーダーのリモートリポジトリに変更を加えましょう 
"clone or download"の上にある"Compare & pull request"というボタンを押しましょう 
そこで自分が変更した箇所について詳しく書きます 
書けたら "Create pull request"を選択しましょう 
pull requestを送ることができました！！！ 
リーダーがMergeすればチームリーダーのリポジトリに自分が変更した箇所が追加されます! 
これでおしまいです！ 

'use strict';
function moveon(){
    // ユーザーに質問するためのモーダルダイヤログを表示する。
    var answer = confirm("Ready to move on? (googleに飛ぶよ)");

    // 「OK」ボタンを押したら，ブラウザに新しいページを読み込む。
    if (answer) window.location = "http://google.com";

}
// 先ほどの関数を，今から１分後(60,000ミリ秒後)に実行する。
setTimeout(moveon,60000);
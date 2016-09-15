'use strict';
function debug(msg){
    // HTML の id 属性を使ってドキュメントのデバッグ出力表示部を検索する。
    var log = document.getElementById("debuglog");

    // 「debuglog」という id の要素が見つからない場合は，作成する。
    if (!log) {
        log = document.createElement( "div" );    // 新たに<div>(ブロック要素)を作成する。
        log.id = "debuglog" ;                    // HTML の id 属性を設定する。
        log.innerHTML = "<h1>Debug Log</h1>";   // 初期のコンテンツを設定。
        document.body.appendChild(log);         // ドキュメントの末尾に追加する。
    }

    // メッセージを <pre> で囲んで，ログに追加する。
    var pre = document.createElement("pre");    // <pre> (整形済み属性)を作成する。
    var text = document.createTextNode(msg);    // テキストノードに msg を格納。
    pre.appendChild(text);                      // テキストに <pre> を追加。
    log.appendChild(pre);                       // <pre> をログに追加。
}

debug()
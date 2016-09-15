function highlight(e) {     // CSS クラスを設定してeをハイライトさせる。
    // HTML クラス属性を定義する。またはクラス属性を追加する。
    // CSS スタイルシートに，「hilite」クラスが設定済みと想定。
    if (!e.className) e.className = 'hilite';
    else e.className += 'hilite' ;
}
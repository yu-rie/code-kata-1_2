function hide(e,reflow) {               // スタイルをスクリプトから制御することで要素eを隠す。
    if(reflow) {                        // 2番目の引数がtrueならば，
       e.style.display = "none";        // 要素を隠し，空間も明け渡す。  hide(hoge,true)
    }
    else {                              // false ならば  hide(hoge)
        e.style.visibility = "hidden";  // 要素は隠れるが，空間は占めたまま。
    }
}

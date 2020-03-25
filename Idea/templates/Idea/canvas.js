window.onload = function(){


    //ボタンを押下した際にダウンロードする画像を作る
  html2canvas(document.getElementsByClassName("picture"),{
    onrendered: function(canvas){
      //aタグのhrefにキャプチャ画像のURLを設定
      var imgData = canvas.toDataURL();
      document.getElementById("ss").href = imgData;
    }
  });
  //HTML内に画像を表示
  html2canvas(document.getElementsByClassName("picture"),{
    onrendered: function(canvas){
      //imgタグのsrcの中に、html2canvasがレンダリングした画像を指定する。
      var imgData = canvas.toDataURL();
      document.getElementById("result").src = imgData;
    }
  });


}
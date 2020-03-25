var flag = [false,true];
          
var nodes = new vis.DataSet([
  {id: 1, label: 'noname'},
]);
var edges = new vis.DataSet([]);
                
var container = document.getElementById('network');
var data = {
  nodes: nodes,
  edges: edges
};

var options = {
  interaction:{hover:true},
  nodes:{
    shape: "box",
    margin: 20,
    color: {
      background: "rgb(70, 196, 70)", 
      border: "rgb(121,192,110)",
      hover: "rgb(121,192,110)",
      highlight: "rgb(0,153,68)"
    },
    font: {
      color: "rgb(65,73,70)",
      size: 20
    }
  },
  edges:{
    color:{color:"black"}
  }
};

var network = new vis.Network(container, data, options);
var btn = document.getElementById("ss");
var image_modal = document.getElementById("image-modal");
var check = document.getElementById('check');
var sendword = document.getElementById('sendword');
var first = document.getElementById('first');
var second = document.getElementById('second');
var search_word = document.getElementById('search_word');
var input_word_node_id=1;
var now_node_id=1;
var words=[];
var pt=[];
var names=[];
var str = null;
var num = 0;

//check.style.display = "none";
image_modal.style.display = "none";

btn.addEventListener("click", function(){

  //ボタンを押下した際にダウンロードする画像を作る
  html2canvas(document.getElementsByClassName("picture"),{
    onrendered: function(canvas){
      //aタグのhrefにキャプチャ画像のURLを設定
      var imgData = canvas.toDataURL();
      document.getElementById("download_button").href = imgData;
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

image_modal.style.display = 'flex';

});



network.on("click", function(params) {
  if (params.nodes.length == 1) {
    now_node_id = params.nodes;
    var node = names[now_node_id];
    console.log(words);
    sendword.value = node;
    search_word.innerHTML = "選択しているword :"+node;
    second.style.color = "rgb(70,196,70)";
    console.log(params.nodes);
  }
  if(false===flag[now_node_id]){
    alert("選択済みのワードです");
    return;
  }
});

function getdata(){
  //check.style.display="flex";
  sendword.type = 'hidden';
  first.type = 'hidden';
  second.type = 'submit';
  second.style.color = 'gray';
  check_flag = true;
  document.getElementById("search_word").innerHTML = "未選択です";
  names[1] = words[0];
  nodes.update({id:1,label:words[0]});
  console.log(words.length);
  console.log(pt);
  var k=0;

  for(var i=2;i<=4;i++){
    nodes.add({id:i,label:words[i-1]});
    edges.add({from:1,to:i});
    names.push(words[i-1]);
    flag.push(true);
  }

  for(var i=5;i<=words.length;i++){
    nodes.add({id:i,label:words[i-1]});
    names.push(words[i-1]);
    flag.push(true);
  }

  for(var i=5;i<=words.length;i+=3){
    num = Number(pt[k]);
    edges.add({from:num,to:i});
    edges.add({from:num,to:i+1});
    edges.add({from:num,to:i+2});
    k++;
    console.log(pt);
  }

  flag[1] = false;

  for(var i=0;i<pt.length;i++){
    flag[pt[i]] = false;
  }
  console.log(flag);
  console.log(now_node_id);
}


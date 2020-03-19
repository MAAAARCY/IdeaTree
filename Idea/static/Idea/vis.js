//コメントアウトとかいらん変数とか滅茶苦茶あってきたなくなってるけど許して
//コードが汚いのはダメです、とりまリファクタリングしていくわ。あと最初も三つに変更しよう
//おｋ
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
var input_word_node_id=1;
var max_node_id=0;
var now_node_id=1;
var words=[];
var pt=[];
var names=[];
var str = null;
var num = 0;

function firstword(){
  str = document.getElementById('first').value
  nodes.update({id:1, label:str});
  names[1] = str;
  //console.log(names[1]);
  console.log(str);
  //document.getElementById('sendword').value = str;
}

network.on("click", function(params) {
  if (params.nodes.length == 1) {
    var nodeId=params.nodes;
    now_node_id = nodeId;
    var node = names[nodeId];
    //max_node_id+=words.length;
    console.log(words);
    document.getElementById('sendword').value = node;
    console.log(names[nodeId]);
    console.log(nodeId);
    //console.log(document.getElementById('sendword').value);
  }
});

function getdata(){
  //var first = words[0];
  //max_node_id-=2;
  names[1] = words[0];
  nodes.update({id:1,label:words[0]});
  console.log(words.length);
  console.log(pt);
  var j=0;
  var k=0;
  /*for(var i=1;i<words.length;i++){
    nodes.add({id:i+max_node_id+1,label:words[i]});
    //edges.add({from:input_word_node_id,to:i+max_node_id+1});
    edges.add({from:now_node_id,to:i+max_node_id+1});
    names.push(words[i]);
  }*/
  for(var i=1;i<4;i++){
    nodes.add({id:i+max_node_id+1,label:words[i]});
    //edges.add({from:input_word_node_id,to:i+max_node_id+1});
    edges.add({from:now_node_id,to:i+max_node_id+1});
    names.push(words[i]);
  }
  /*for(var i=1;i<21;i++){
    nodes.add({id:i+1,label:words[i]});
    //edges.add({from:input_word_node_id,to:i+max_node_id+1});
    edges.add({from:0,to:i+1});
    names.push(words[i]);
  }*/
  for(var i=5;i<=words.length;i++){
    nodes.add({id:i,label:words[i-1]});
    //edges.add({from:input_word_node_id,to:i+max_node_id+1});
    //edges.add({from:now_node_id,to:i});
    names.push(words[i-1]);
  }
  /*for(var i=21;i<=words.length;i++){
    nodes.add({id:i,label:words[i]});
    //edges.add({from:input_word_node_id,to:i+max_node_id+1});
    //edges.add({from:now_node_id,to:i});
    names.push(words[i]);
  }*/
  for(var i=5;i<=words.length;i++){
    if(j<3){
      num = Number(pt[k]);
      edges.add({from:num,to:i});
      j++;
    }else{
      j = 0;
      console.log(j);
      k++;
      num = Number(pt[k]);
      edges.add({from:num,to:i});
    }
  }
  //return ;
}
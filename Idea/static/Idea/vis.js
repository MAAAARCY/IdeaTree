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
var now_node_id=1;
var words=[];
var pt=[];
var names=[];
var str = null;
var num = 0;

document.getElementById('check').style.display="none";

function firstword(){
  str = document.getElementById('first').value
  nodes.update({id:1, label:str});
  names[1] = str;
  console.log(str);
}

network.on("click", function(params) {
  if (params.nodes.length == 1) {
    now_node_id = params.nodes;
    var node = names[now_node_id];
    console.log(words);
    document.getElementById('sendword').value = node;
    document.getElementById('check').innerHTML = "ok";
    console.log(params.nodes);
  }
  if(false===flag[now_node_id]){
    alert("選択済みのワードです");
    return;
  }
});

function getdata(){
  document.getElementById('check').style.display="block";
  document.getElementById('sendword').type = 'hidden';
  document.getElementById('first').type = 'hidden';
  document.getElementById('second').type = 'submit';
  check_flag = true;
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


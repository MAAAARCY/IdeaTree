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
var names=["",""];
var str = null;

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
    //console.log(document.getElementById('sendword').value);
  }
});

function getdata(){
  //var first = words[0];
  //max_node_id-=2;
  nodes.update({id:1,label:words[0]});
  console.log(words.length);
  for(var i=1;i<words.length;i++){
    nodes.add({id:i+max_node_id+1,label:words[i]});
    //edges.add({from:input_word_node_id,to:i+max_node_id+1});
    edges.add({from:now_node_id,to:i+max_node_id+1});
    names.push(words[i]);
  }
  //return ;
}
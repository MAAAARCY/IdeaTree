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
var now_node_id="";
var max_node_id=1;
var clicked = false;
          
network.on("click", function(params) {
  if (params.nodes.length == 1) {
    var nodeId = params.nodes[0];
    now_node_id=nodeId;
  }
          
  if(false===flag[now_node_id]){
    alert("flag");
    return;
  }
          
          
  if (clicked) {
    var words = ["う。","ぴえん。","つらみ"];
    for(var i=0;i<words.length;i++){
      nodes.add({id:i+max_node_id+1,label:words[i]});
      edges.add({from: now_node_id, to: i+max_node_id+1});
      flag.push(true);
    }
    max_node_id+=words.length;
    clicked = false;
    flag[now_node_id]=false;
      return;
    }
          
    clicked = true;
    setTimeout(function () {
      if (clicked) {}
      clicked = false;
      }, 300);
});
          
function firstword(){
    var str = document.getElementById('first').value;
    nodes.update({id:1, label: str});
}
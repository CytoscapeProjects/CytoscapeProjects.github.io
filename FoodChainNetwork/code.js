
var cy = cytoscape({
  container: document.getElementById('cy'),

  boxSelectionEnabled: false,
  autounselectify: true,


  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'height': 80,
        'width': 80,
        'background-fit': 'cover',
        'border-color': '#000',
        'border-width': 3,
        'border-opacity': 0.5
      })
    .selector('.eating')
      .css({
        'border-color': 'red'
      })
    .selector('.eater')
      .css({
        'border-width': 9
      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'width': 6,
        'target-arrow-shape': 'triangle',
        'line-color': '#ffaaaa',
        'target-arrow-color': '#ffaaaa'
      })

    .selector('#bird')
      .css({
        'background-image': 'https://live.staticflickr.com/7272/7633179468_3e19e45a0c_b.jpg'
      })
    .selector('#cat')
      .css({
        'background-image': 'https://live.staticflickr.com/1261/1413379559_412a540d29_b.jpg'
      })
      .selector('#bug')
      .css({
        'background-image': './cy.jpg'
      }),

  elements: {
    nodes: [
      { data: { id: 'cat' } },
      { data: { id: 'bird' } },
      { data: { id: 'bug' } },


    ],
    edges: [
      { data: { source: 'cat', target: 'bird' } },
      { data: { source: 'bird', target: 'bug' } },

    ]
  },

  layout: {
    name: 'breadthfirst',
    directed: true,
    padding: 10
  }
}); // cy init

// cy.on('tap', 'node', function(){
//   var nodes = this;
//   var tapped = nodes;
//   var food = [];

//   nodes.addClass('eater');

//   for(;;){
//     var connectedEdges = nodes.connectedEdges(function(el){
//       return !el.target().anySame( nodes );
//     });

//     var connectedNodes = connectedEdges.targets();

//     Array.prototype.push.apply( food, connectedNodes );

//     nodes = connectedNodes;

//     if( nodes.empty() ){ break; }
//   }

//   var delay = 0;
//   var duration = 500;
//   for( var i = food.length - 1; i >= 0; i-- ){ (function(){
//     var thisFood = food[i];
//     var eater = thisFood.connectedEdges(function(el){
//       return el.target().same(thisFood);
//     }).source();

//     thisFood.delay( delay, function(){
//       eater.addClass('eating');
//     } ).animate({
//       position: eater.position(),
//       css: {
//         'width': 10,
//         'height': 10,
//         'border-width': 0,
//         'opacity': 0
//       }
//     }, {
//       duration: duration,
//       complete: function(){
//         thisFood.remove();
//       }
//     });

//     delay += duration;
//   })(); } // for

// }); // on tap

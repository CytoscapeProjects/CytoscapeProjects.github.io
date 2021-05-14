
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
        'width': 2,
        'target-arrow-shape': 'triangle',
        'line-color': 'black',
        'target-arrow-color': 'black'
      })

      .selector('#grass')
      .css({
        'background-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Grass_dsc08672-nevit.jpg/250px-Grass_dsc08672-nevit.jpg'
      })
      .selector('#deer')
      .css({
        'background-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Chital_%288458215435%29.jpg/220px-Chital_%288458215435%29.jpg'
      })
      .selector('#buffalo')
      .css({
        'background-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/American_bison_k5680-1.jpg/220px-American_bison_k5680-1.jpg'
      })
      .selector('#tiger')
      .css({
        'background-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Bengal_tiger_%28Panthera_tigris_tigris%29_female_3_crop.jpg/220px-Bengal_tiger_%28Panthera_tigris_tigris%29_female_3_crop.jpg'
      })
      .selector('#lion')
      .css({
        'background-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/220px-Lion_waiting_in_Namibia.jpg'
      })
      .selector('#rabbit')
      .css({
        'background-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Oryctolagus_cuniculus_Rcdo.jpg/220px-Oryctolagus_cuniculus_Rcdo.jpg'
      })
      .selector('#fox')
      .css({
        'background-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Canis_simensis.jpg/220px-Canis_simensis.jpg'
      })
      .selector('#snake')
      .css({
        'background-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Red_milk_snake.JPG/220px-Red_milk_snake.JPG'
      })
      .selector('#grasshopper')
      .css({
        'background-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Heupferd_fg01.jpg/220px-Heupferd_fg01.jpg'
      })
      .selector('#bat')
      .css({
        'background-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Golden_crowned_fruit_bat.jpg/130px-Golden_crowned_fruit_bat.jpg'
      })
      .selector('#fruit')
      .css({
        'background-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Blackberryraspberrystrawberry.jpg/220px-Blackberryraspberrystrawberry.jpg'
      })
      .selector('#moth')
      .css({
        'background-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Opodiphthera_eucalypti_male.jpg/220px-Opodiphthera_eucalypti_male.jpg'
      })
      .selector('#flower')
      .css({
        'background-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Liliumbulbiferumflowertop.jpg/220px-Liliumbulbiferumflowertop.jpg'
      })
      .selector('#bee')
      .css({
        'background-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Tetragonula_carbonaria_%2814521993792%29.jpg/220px-Tetragonula_carbonaria_%2814521993792%29.jpg'
      })
      .selector('#skunk')
      .css({
        'background-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Striped_Skunk.jpg/220px-Striped_Skunk.jpg'
      })
      .selector('#earthworm')
      .css({
        'background-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Earthworm.JPG/220px-Earthworm.JPG'
      })
      .selector('#rat')
      .css({
        'background-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Rattus_norvegicus_1.jpg/220px-Rattus_norvegicus_1.jpg'
      })
      .selector('#crab')
      .css({
        'background-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Gecarcinus_quadratus_%28Nosara%29.jpg/220px-Gecarcinus_quadratus_%28Nosara%29.jpg'
      })
      .selector('#fish')
      .css({
        'background-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Georgia_Aquarium_-_Giant_Grouper_edit.jpg/220px-Georgia_Aquarium_-_Giant_Grouper_edit.jpg'
      })
      .selector('#bird')
      .css({
        'background-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/House_sparrow04.jpg/220px-House_sparrow04.jpg'
      })
      .selector('#mole')
      .css({
        'background-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/ScalopusAquaticus.jpg/220px-ScalopusAquaticus.jpg'
      })
      .selector('#weasel')
      .css({
        'background-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Mustela_nivalis_-British_Wildlife_Centre-4.jpg/220px-Mustela_nivalis_-British_Wildlife_Centre-4.jpg'
      })
      .selector('#hawk')
      .css({
        'background-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hawk_in_Kurdistan.jpg/250px-Hawk_in_Kurdistan.jpg'
      })
      .selector('#owl')
      .css({
        'background-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Cross-eyed_owl.jpg/170px-Cross-eyed_owl.jpg'
      })
      .selector('#eagle')
      .css({
        'background-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/%C3%81guila_calva.jpg/220px-%C3%81guila_calva.jpg'
      })
      .selector('#bear')
      .css({
        'background-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bear_Alaska_%283%29.jpg/220px-Bear_Alaska_%283%29.jpg'
      })
      .selector('#bacteria')
      .css({
        'background-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/EscherichiaColi_NIAID.jpg/220px-EscherichiaColi_NIAID.jpg'
      })
      .selector('#organic_carbon')
      .css({
        'background-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flies_settle_on_a_sheep_carrion.jpg/220px-Flies_settle_on_a_sheep_carrion.jpg'
      })
      .selector('#fungi')
      .css({
        'background-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Fungi_collage.jpg/290px-Fungi_collage.jpg'
      })
      .selector('#sunlight')
      .css({
        'background-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/220px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg'
      })
      .selector('#spider')
      .css({
        'background-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Clynotis_severus%2C_AF_2.jpg/240px-Clynotis_severus%2C_AF_2.jpg'
      })
      .selector('#butterfly')
      .css({
        'background-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Fesoj_-_Papilio_machaon_%28by%29.jpg/220px-Fesoj_-_Papilio_machaon_%28by%29.jpg'
      })
      .selector('#algae')
      .css({
        'background-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Chlorella_vulgaris_NIES2170.jpg/480px-Chlorella_vulgaris_NIES2170.jpg'
      })
      .selector('#snail')
      .css({
        'background-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Snail.jpg/220px-Snail.jpg'
      })
      .selector('#zebra')
      .css({
        'background-image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Plains_Zebra_Equus_quagga.jpg/220px-Plains_Zebra_Equus_quagga.jpg'
      }),


  elements: {
    nodes: [
      { data: { id: 'lion' } },
      { data: { id: 'bear' } },
      { data: { id: 'fox' } },
      { data: { id: 'buffalo' } },
      { data: { id: 'tiger' } },
      { data: { id: 'hawk' } },
      { data: { id: 'owl' } },
      { data: { id: 'eagle' } },
      { data: { id: 'snake' } },
      { data: { id: 'deer' } },
      { data: { id: 'zebra' } },
      { data: { id: 'skunk' } },
      { data: { id: 'weasel' } },
      { data: { id: 'bat' } },
      { data: { id: 'rabbit' } },
      { data: { id: 'mole' } },
      { data: { id: 'bird' } },
      { data: { id: 'rat' } },
      { data: { id: 'crab' } },
      { data: { id: 'fish' } },
      { data: { id: 'spider' } },
      { data: { id: 'butterfly' } },
      { data: { id: 'grasshopper' } },
      { data: { id: 'earthworm' } },
      { data: { id: 'bee' } },
      { data: { id: 'moth' } },
      { data: { id: 'snail' } },
      { data: { id: 'grass' } },
      { data: { id: 'fruit' } },
      { data: { id: 'flower' } },
      { data: { id: 'bacteria' } },
      { data: { id: 'fungi' } },
      { data: { id: 'algae' } },
      { data: { id: 'organic_carbon' } },
      { data: { id: 'sunlight' } },

    ],
    edges: [
      { data: { source: 'lion', target: 'zebra' } },
      { data: { source: 'lion', target: 'deer' } },
      { data: { source: 'lion', target: 'buffalo' } },
      { data: { source: 'lion', target: 'rabbit' } },
      { data: { source: 'lion', target: 'fox' } },
      { data: { source: 'lion', target: 'fish' } },
      { data: { source: 'lion', target: 'bird' } },
      { data: { source: 'lion', target: 'weasel' } },
      { data: { source: 'lion', target: 'hawk' } },
      { data: { source: 'lion', target: 'owl' } },


      { data: { source: 'tiger', target: 'zebra' } },
      { data: { source: 'tiger', target: 'deer' } },
      { data: { source: 'tiger', target: 'buffalo' } },
      { data: { source: 'tiger', target: 'rabbit' } },
      { data: { source: 'tiger', target: 'fox' } },
      { data: { source: 'tiger', target: 'fish' } },
      { data: { source: 'tiger', target: 'bird' } },
      { data: { source: 'tiger', target: 'weasel' } },
      { data: { source: 'tiger', target: 'hawk' } },
      { data: { source: 'tiger', target: 'owl' } },

      { data: { source: 'bear', target: 'zebra' } },
      { data: { source: 'bear', target: 'deer' } },
      { data: { source: 'bear', target: 'rabbit' } },
      { data: { source: 'bear', target: 'fox' } },
      { data: { source: 'bear', target: 'fish' } },
      { data: { source: 'bear', target: 'bird' } },
      { data: { source: 'bear', target: 'weasel' } },
      { data: { source: 'bear', target: 'fruit' } },
      { data: { source: 'bear', target: 'grass' } },
      { data: { source: 'bear', target: 'rat' } },
      { data: { source: 'bear', target: 'snake' } },
      { data: { source: 'bear', target: 'bee' } },


      { data: { source: 'fox', target: 'zebra' } },
      { data: { source: 'fox', target: 'deer' } },
      { data: { source: 'fox', target: 'rabbit' } },
      { data: { source: 'fox', target: 'grasshopper' } },
      { data: { source: 'fox', target: 'rat' } },
      { data: { source: 'fox', target: 'crab' } },
      { data: { source: 'fox', target: 'fish' } },
      { data: { source: 'fox', target: 'bird' } },
      { data: { source: 'fox', target: 'mole' } },
      { data: { source: 'fox', target: 'weasel' } },

      { data: { source: 'eagle', target: 'rabbit' } },
      { data: { source: 'eagle', target: 'grasshopper' } },
      { data: { source: 'eagle', target: 'rat' } },
      { data: { source: 'eagle', target: 'fish' } },
      { data: { source: 'eagle', target: 'bird' } },
      { data: { source: 'eagle', target: 'mole' } },
      { data: { source: 'eagle', target: 'weasel' } },
      { data: { source: 'eagle', target: 'bat' } },
      { data: { source: 'eagle', target: 'earthworm' } },
      { data: { source: 'eagle', target: 'bee' } },
      { data: { source: 'eagle', target: 'fruit' } },
      { data: { source: 'eagle', target: 'snake' } },
      { data: { source: 'eagle', target: 'crab' } },
      { data: { source: 'eagle', target: 'spider' } },
      { data: { source: 'eagle', target: 'snail' } },

      { data: { source: 'hawk', target: 'rabbit' } },
      { data: { source: 'hawk', target: 'grasshopper' } },
      { data: { source: 'hawk', target: 'rat' } },
      { data: { source: 'hawk', target: 'fish' } },
      { data: { source: 'hawk', target: 'bird' } },
      { data: { source: 'hawk', target: 'mole' } },
      { data: { source: 'hawk', target: 'weasel' } },
      { data: { source: 'hawk', target: 'bat' } },
      { data: { source: 'hawk', target: 'earthworm' } },
      { data: { source: 'hawk', target: 'bee' } },
      { data: { source: 'hawk', target: 'fruit' } },
      { data: { source: 'hawk', target: 'snake' } },
      { data: { source: 'hawk', target: 'crab' } },
      { data: { source: 'hawk', target: 'spider' } },
      { data: { source: 'hawk', target: 'spider' } },
      { data: { source: 'hawk', target: 'snail' } },

      { data: { source: 'owl', target: 'rabbit' } },
      { data: { source: 'owl', target: 'grasshopper' } },
      { data: { source: 'owl', target: 'rat' } },
      { data: { source: 'owl', target: 'fish' } },
      { data: { source: 'owl', target: 'bird' } },
      { data: { source: 'owl', target: 'mole' } },
      { data: { source: 'owl', target: 'weasel' } },
      { data: { source: 'owl', target: 'bat' } },
      { data: { source: 'owl', target: 'earthworm' } },
      { data: { source: 'owl', target: 'bee' } },
      { data: { source: 'owl', target: 'fruit' } },
      { data: { source: 'owl', target: 'snake' } },
      { data: { source: 'owl', target: 'crab' } },
      { data: { source: 'owl', target: 'spider' } },
      { data: { source: 'owl', target: 'snail' } },

      { data: { source: 'snake', target: 'rabbit' } },
      { data: { source: 'snake', target: 'grasshopper' } },
      { data: { source: 'snake', target: 'rat' } },
      { data: { source: 'snake', target: 'fish' } },
      { data: { source: 'snake', target: 'bird' } },
      { data: { source: 'snake', target: 'mole' } },
      { data: { source: 'snake', target: 'weasel' } },
    

      { data: { source: 'bat', target: 'grasshopper' } },
      { data: { source: 'bat', target: 'fruit' } },
      { data: { source: 'bat', target: 'moth' } },
      { data: { source: 'bat', target: 'bee' } },
      { data: { source: 'bat', target: 'earthworm' } },
      { data: { source: 'bat', target: 'rat' } },
      { data: { source: 'bat', target: 'fish' } },
      { data: { source: 'bat', target: 'spider' } },
      { data: { source: 'bat', target: 'butterfly' } },



      { data: { source: 'skunk', target: 'grasshopper' } },
      { data: { source: 'skunk', target: 'fruit' } },
      { data: { source: 'skunk', target: 'moth' } },
      { data: { source: 'skunk', target: 'bee' } },
      { data: { source: 'skunk', target: 'grass' } },
      { data: { source: 'skunk', target: 'earthworm' } },
      { data: { source: 'skunk', target: 'rat' } },
      { data: { source: 'skunk', target: 'crab' } },
      { data: { source: 'skunk', target: 'fish' } },
      { data: { source: 'skunk', target: 'bird' } },
      { data: { source: 'skunk', target: 'mole' } },


      { data: { source: 'weasel', target: 'grasshopper' } },
      { data: { source: 'weasel', target: 'fruit' } },
      { data: { source: 'weasel', target: 'moth' } },
      { data: { source: 'weasel', target: 'bee' } },
      { data: { source: 'weasel', target: 'grass' } },
      { data: { source: 'weasel', target: 'earthworm' } },
      { data: { source: 'weasel', target: 'rat' } },
      { data: { source: 'weasel', target: 'crab' } },
      { data: { source: 'weasel', target: 'fish' } },
      { data: { source: 'weasel', target: 'bird' } },
      { data: { source: 'weasel', target: 'mole' } },
      { data: { source: 'weasel', target: 'snail' } },


      { data: { source: 'crab', target: 'grass' } },
      { data: { source: 'crab', target: 'fruit' } },
      { data: { source: 'crab', target: 'flower' } },
      { data: { source: 'crab', target: 'earthworm' } },
      { data: { source: 'crab', target: 'bee' } },
      { data: { source: 'crab', target: 'moth' } },
      { data: { source: 'crab', target: 'grasshopper' } },
      { data: { source: 'crab', target: 'fish' } },
      { data: { source: 'crab', target: 'algae' } },

      { data: { source: 'bird', target: 'grass' } },
      { data: { source: 'bird', target: 'fruit' } },
      { data: { source: 'bird', target: 'earthworm' } },
      { data: { source: 'bird', target: 'moth' } },
      { data: { source: 'bird', target: 'bee' } },
      { data: { source: 'bird', target: 'grasshopper' } },
      { data: { source: 'bird', target: 'fish' } },
      { data: { source: 'bird', target: 'rat' } },
      { data: { source: 'bird', target: 'spider' } },
      { data: { source: 'bird', target: 'flower' } },
      { data: { source: 'bird', target: 'butterfly' } },
      { data: { source: 'bird', target: 'snail' } },

      { data: { source: 'rabbit', target: 'grass' } },
      { data: { source: 'rabbit', target: 'fruit' } },

      { data: { source: 'deer', target: 'grass' } },
      { data: { source: 'deer', target: 'fruit' } },

      { data: { source: 'moth', target: 'grass' } },
      { data: { source: 'moth', target: 'flower' } },

      { data: { source: 'mole', target: 'grass' } },
      { data: { source: 'mole', target: 'fruit' } },
      { data: { source: 'mole', target: 'earthworm' } },
      { data: { source: 'mole', target: 'moth' } },
      { data: { source: 'mole', target: 'bee' } },
      { data: { source: 'mole', target: 'grasshopper' } },
      { data: { source: 'mole', target: 'fish' } },

      { data: { source: 'rat', target: 'grass' } },
      { data: { source: 'rat', target: 'fruit' } },
      { data: { source: 'rat', target: 'earthworm' } },
      { data: { source: 'rat', target: 'moth' } },
      { data: { source: 'rat', target: 'bee' } },
      { data: { source: 'rat', target: 'grasshopper' } },
      { data: { source: 'rat', target: 'fish' } },
      { data: { source: 'rat', target: 'snail' } },

      
      { data: { source: 'fish', target: 'grass' } },
      { data: { source: 'fish', target: 'fruit' } },
      { data: { source: 'fish', target: 'earthworm' } },
      { data: { source: 'fish', target: 'moth' } },
      { data: { source: 'fish', target: 'bee' } },
      { data: { source: 'fish', target: 'grasshopper' } },
      { data: { source: 'fish', target: 'algae' } },
      { data: { source: 'fish', target: 'snail' } },

      { data: { source: 'spider', target: 'grasshopper' } },
      { data: { source: 'spider', target: 'moth' } },
      { data: { source: 'spider', target: 'bee' } },
      { data: { source: 'spider', target: 'butterfly' } },

      { data: { source: 'snail', target: 'algae' } },
      { data: { source: 'snail', target: 'earthworm' } },
      { data: { source: 'snail', target: 'organic_carbon' } },
      { data: { source: 'snail', target: 'grass' } },

      { data: { source: 'zebra', target: 'grass' } },
      { data: { source: 'buffalo', target: 'grass' } },
      { data: { source: 'butterfly', target: 'flower' } },
      { data: { source: 'butterfly', target: 'organic_carbon' } },
      { data: { source: 'earthworm', target: 'bacteria' } },
      { data: { source: 'earthworm', target: 'fungi' } },
      { data: { source: 'earthworm', target: 'organic_carbon' } },
      { data: { source: 'earthworm', target: 'algae' } },
      { data: { source: 'grasshopper', target: 'grass' } },
      { data: { source: 'bee', target: 'flower' } },
      { data: { source: 'bacteria', target: 'organic_carbon' } },
      { data: { source: 'fungi', target: 'organic_carbon' } },
      { data: { source: 'grass', target: 'sunlight' } },
      { data: { source: 'flower', target: 'sunlight' } },
      { data: { source: 'fruit', target: 'sunlight' } },

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

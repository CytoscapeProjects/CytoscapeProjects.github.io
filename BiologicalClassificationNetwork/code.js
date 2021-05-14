var cy = cytoscape({
  container: document.getElementById('cy'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape.stylesheet()
    .selector('node')
      .style({
        'content': 'data(id)'
      })
    .selector('edge')
      .style({
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle',
        'width': 2,
        'line-color': '#ddd',
        'target-arrow-color': '#ddd'
      })
    .selector('.highlighted')
      .style({
        'background-color': '#61bffc',
        'line-color': '#61bffc',
        'target-arrow-color': '#61bffc',
        'transition-property': 'background-color, line-color, target-arrow-color',
        'transition-duration': '0.5s'
      }),

  elements: {
      nodes: [
        { data: { id: 'Domain' } },

        { data: { id: 'Archaea' } },
          { data: { id: 'DPANN' } },
            { data: { id: 'Altiarchaeota' } },
              { data: { id: 'Altiarchaeia' } },
            { data: { id: 'Diapherotrites' } },
              { data: { id: 'Lainarchaeaota' } },
                { data: { id: 'Laninarchaeia' } },
              { data: { id: 'Micrarchaeota' } },
                { data: { id: 'Micrarchaeia' } },
            { data: { id: 'Undinarchaeota' } },
              { data: { id: 'Undinarchaeia' } },
            { data: { id: 'Nanoarchaeota' } },
              { data: { id: 'Nanoarchaeia' } },
            { data: { id: 'Aenigmarchaeota' } },
              { data: { id: 'Aenigmarchaeia' } },
            { data: { id: 'Huberachaeota' } },
              { data: { id: 'Huberarchaea' } },
            { data: { id: 'Nanohaloarchaeota' } },
              { data: { id: 'Nanosalinia' } },

          { data: { id: 'Euryarchaeida' } },
            { data: { id: 'Hydrothermarchaeota' } },
              { data: { id: 'Hydrothermarchaeia' } },
            { data: { id: 'Hadarchaeota' } },
              { data: { id: 'Hadarchaeia' } },
            { data: { id: 'Methanobacteriota' } },
              { data: { id: 'Thermococci' } },
              { data: { id: 'Methanopyri' } },
              { data: { id: 'Methanococci' } },
              { data: { id: 'Methanobacteria' } },
            { data: { id: 'Thermoplasmatota' } },
              { data: { id: 'Thermoplasmata' } },
            { data: { id: 'Halobacteriota' } },
              { data: { id: 'Methanonatronarchaeia' } },
              { data: { id: 'Archaeoglobaceae' } },
              { data: { id: 'Methanoliparia' } },
              { data: { id: 'Syntropharchaeia' } },
              { data: { id: 'Methanocellia' } },
              { data: { id: 'Methanosarcinia' } },
              { data: { id: 'Methanomicrobia' } },
              { data: { id: 'Haloarchaea' } },



        { data: { id: 'Proteoarchaeota' } },

        { data: { id: 'Eukarya' } },
        { data: { id: 'Protista' } },
        { data: { id: 'Plantae' } },
        { data: { id: 'Fungi' } },
        { data: { id: 'Animalia' } },

        { data: { id: 'Bacteria' } },
        { data: { id: 'Acidobacteria' } },
        { data: { id: 'Actinobacteria' } },
        { data: { id: 'Aquificae' } },

      ],

      edges: [
        { data: { source: 'Domain', target: 'Bacteria' } },
        { data: { source: 'Bacteria', target: 'Acidobacteria' } },
        { data: { source: 'Bacteria', target: 'Actinobacteria' } },
        { data: { source: 'Bacteria', target: 'Aquificae' } },


        { data: { source: 'Domain', target: 'Eukarya' } },
        { data: { source: 'Eukarya', target: 'Protista' } },
        { data: { source: 'Eukarya', target: 'Plantae' } },
        { data: { source: 'Eukarya', target: 'Fungi' } },
        { data: { source: 'Eukarya', target: 'Animalia' } },


        { data: { source: 'Domain', target: 'Archaea' } },

        { data: { source: 'Archaea', target: 'DPANN' } },
          { data: { source: 'DPANN', target: 'Altiarchaeota' } },
            { data: { source: 'Altiarchaeota', target: 'Altiarchaeia' } },
          { data: { source: 'DPANN', target: 'Diapherotrites' } },
            { data: { source: 'Diapherotrites', target: 'Lainarchaeaota' } },
              { data: { source: 'Lainarchaeaota', target: 'Laninarchaeia' } },
            { data: { source: 'Diapherotrites', target: 'Micrarchaeota' } },
              { data: { source: 'Micrarchaeota', target: 'Micrarchaeia' } },
          { data: { source: 'DPANN', target: 'Undinarchaeota' } },
            { data: { source: 'Undinarchaeota', target: 'Undinarchaeia' } },
          { data: { source: 'DPANN', target: 'Nanoarchaeota' } },
            { data: { source: 'Nanoarchaeota', target: 'Nanoarchaeia' } },
          { data: { source: 'DPANN', target: 'Aenigmarchaeota' } },
            { data: { source: 'Aenigmarchaeota', target: 'Aenigmarchaeia' } },
          { data: { source: 'DPANN', target: 'Huberachaeota' } },
           { data: { source: 'Huberachaeota', target: 'Huberarchaea' } },
          { data: { source: 'DPANN', target: 'Nanohaloarchaeota' } },
            { data: { source: 'Nanohaloarchaeota', target: 'Nanosalinia' } },

        { data: { source: 'Archaea', target: 'Euryarchaeida' } },
          { data: { source: 'Euryarchaeida', target: 'Hydrothermarchaeota' } },
            { data: { source: 'Hydrothermarchaeota', target: 'Hydrothermarchaeia' } },
          { data: { source: 'Euryarchaeida', target: 'Hadarchaeota' } },
            { data: { source: 'Hadarchaeota', target: 'Hadarchaeia' } },
          { data: { source: 'Euryarchaeida', target: 'Methanobacteriota' } },
            { data: { source: 'Methanobacteriota', target: 'Thermococci' } },
            { data: { source: 'Methanobacteriota', target: 'Methanopyri' } },
            { data: { source: 'Methanobacteriota', target: 'Methanococci' } },
            { data: { source: 'Methanobacteriota', target: 'Methanobacteria' } },
          { data: { source: 'Euryarchaeida', target: 'Thermoplasmatota' } },
            { data: { source: 'Thermoplasmatota', target: 'Thermoplasmata' } },
          { data: { source: 'Euryarchaeida', target: 'Halobacteriota' } },
            { data: { source: 'Halobacteriota', target: 'Methanonatronarchaeia' } },
            { data: { source: 'Halobacteriota', target: 'Archaeoglobaceae' } },
            { data: { source: 'Halobacteriota', target: 'Methanoliparia' } },
            { data: { source: 'Halobacteriota', target: 'Syntropharchaeia' } },
            { data: { source: 'Halobacteriota', target: 'Methanocellia' } },
            { data: { source: 'Halobacteriota', target: 'Methanosarcinia' } },
            { data: { source: 'Halobacteriota', target: 'Methanomicrobia' } },
            { data: { source: 'Halobacteriota', target: 'Haloarchaea' } },

        { data: { source: 'Archaea', target: 'Proteoarchaeota' } },


      ]
    },

  layout: {
    name: 'breadthfirst',
    directed: true,
    roots: '#Domain',
    padding: 10
  }
});

var bfs = cy.elements().bfs('#Domain', function(){}, true);

var i = 0;
var highlightNextEle = function(){
  if( i < bfs.path.length ){
    bfs.path[i].addClass('highlighted');

    i++;
    setTimeout(highlightNextEle, 1000);
  }
};

// kick off first highlight
highlightNextEle();

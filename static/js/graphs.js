queue()
    .defer(d3.csv, "data/towed-vehicles.csv")
    .await(makeGraphs);
    
function makeGraphs(error, towedData){
    var ndx = crossfilter(towedData);
    
    show_towed_make(ndx);
    
    dc.renderAll();
}

function show_towed_make(ndx){
    var dim = ndx.dimension(dc.pluck('Make'));
    var group = dim.group();
    
    dc.barChart("#make-balance")
        .width(600)
        .height(300)
        .margins({top:10, right:50, bottom:30, left:50})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Car Make")
        .yAxis().ticks(10);
}
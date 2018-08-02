queue()
    .defer(d3.csv, "data/EPL_Set.csv")
    .await(makeGraphs);
    
function makeGraphs(error, eplData){
    
}
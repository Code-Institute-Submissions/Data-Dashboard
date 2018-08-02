queue()
    .defer(d3.csv, "data/Happy.csv")
    .await(MakeGraphs);
    
function MakeGraphs(error, happyData){
    
}
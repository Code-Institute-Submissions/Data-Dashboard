queue()
    .defer(d3.csv, "data/towed-vehicles.csv")
    .await(makeGraphs);
    
function makeGraphs(error, towedData){
    var ndx = crossfilter(towedData);
    
    show_color_selector(ndx);
    show_towed_make(ndx);
    show_make_pie(ndx);
    show_style_make(ndx);
    //percentage of four doors car in IL and IN
    show_percent_that_are_four_doors(ndx, "IL", "#percent-of-fourDoors-in-IL");
    show_percent_that_are_four_doors(ndx, "IN", "#percent-of-fourDoors-in-IN");
    //percentage of two doors car in IL and IN
    show_percent_that_are_two_doors(ndx, "IL", "#percent-of-twoDoors-in-IL");
    show_percent_that_are_two_doors(ndx, "IN", "#percent-of-twoDoors-in-IN");
    //percentage of suv doors car in IL and IN
    show_percent_that_are_suv_doors(ndx, "IL", "#percent-of-suvDoors-in-IL");
    show_percent_that_are_suv_doors(ndx, "IN", "#percent-of-suvDoors-in-IN");
    show_towed_to(ndx)
    
    
    
    dc.renderAll();
}

function show_color_selector(ndx){
    dim = ndx.dimension(dc.pluck('Color'));
    group = dim.group()
    
    dc.selectMenu("#color-selector")
    .dimension(dim)
    .group(group);
}

function show_towed_make(ndx){
    var dim = ndx.dimension(dc.pluck('Make'));
    var group = dim.group();
    
    dc.barChart("#make-balance")
        .width(800)
        .height(400)
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
function show_make_pie(ndx){
    var name_dim = ndx.dimension(dc.pluck('Towed to Address'));
    var group = dim.group();
    
    dc.pieChart('#make-pie')
        .height(330)
        .radius(90)
        .transitionDuration(1500)
        .dimension(dim)
        .group(group);
}


function show_style_make(ndx) {
    
    function styleByMake(dimension, Style) {
        return dimension.group().reduce(
            function (p, v) {
                p.total++;
                if(v.Style == Style) {
                    p.match++;
                }
                return p;
            },
            function (p, v) {
                p.total--;
                if(v.Style == Style) {
                    p.match--;
                }
                return p;
            },
            function () {
                return {total: 0, match: 0};
            }
        );
    }
    
    var dim = ndx.dimension(dc.pluck("Make"));
    var fourdoorByMake = styleByMake(dim, "4D");
    var twodoorByMake = styleByMake(dim, "2D");
    var suvdoorByMake = styleByMake(dim, "LL");
   
    
    dc.barChart("#style-make")
        .width(800)
        .height(400)
        .dimension(dim)
        .group(fourdoorByMake, "Four Door")
        .stack(twodoorByMake, "Two Door")
        .stack(suvdoorByMake, "SUV")
        .valueAccessor(function(d) {
            if(d.value.total > 0) {
                return (d.value.match / d.value.total) * 100;
            } else {
                return 0;
            }
        })
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .legend(dc.legend().x(700).y(20).itemHeight(15).gap(5))
        .margins({top: 10, right: 100, bottom: 30, left: 30})
        .xAxisLabel("Car Make")
        .elasticY(true)
        .yAxis().ticks(30);

        
        
}
function show_percent_that_are_four_doors(ndx, place, element) {
    var percentageThatAreFourDoors = ndx.groupAll().reduce(
        function(p, v) {
            if (v.State === place) {
                p.count++;
                if(v.Style === "4D") {
                    p.are_fourD++;
                }
            }
            return p;
        },
        function(p, v) {
            if (v.State === place) {
                p.count--;
                if(v.Style === "4D") {
                    p.are_fourD--;
                }
            }
            return p;
        },
        function() {
            return {count: 0, are_fourD: 0};    
        },
    );
    
    dc.numberDisplay(element)
        .formatNumber(d3.format(".2%"))
        .valueAccessor(function (d) {
            if (d.count == 0) {
                return 0;
            } else {
                return (d.are_fourD / d.count);
            }
        })
        .group(percentageThatAreFourDoors)
}


function show_percent_that_are_two_doors(ndx, place, element) {
    var percentageThatAreTwoDoors = ndx.groupAll().reduce(
        function(p, v) {
            if (v.State === place) {
                p.count++;
                if(v.Style === "2D") {
                    p.are_twoD++;
                }
            }
            return p;
        },
        function(p, v) {
            if (v.State === place) {
                p.count--;
                if(v.Style === "2D") {
                    p.are_twoD--;
                }
            }
            return p;
        },
        function() {
            return {count: 0, are_twoD: 0};    
        },
    );
    
    dc.numberDisplay(element)
        .formatNumber(d3.format(".2%"))
        .valueAccessor(function (d) {
            if (d.count == 0) {
                return 0;
            } else {
                return (d.are_twoD / d.count);
            }
        })
        .group(percentageThatAreTwoDoors)
}

function show_percent_that_are_suv_doors(ndx, place, element) {
    var percentageThatAreSUVDoors = ndx.groupAll().reduce(
        function(p, v) {
            if (v.State === place) {
                p.count++;
                if(v.Style === "LL") {
                    p.are_LLD++;
                }
            }
            return p;
        },
        function(p, v) {
            if (v.State === place) {
                p.count--;
                if(v.Style === "LL") {
                    p.are_LLD--;
                }
            }
            return p;
        },
        function() {
            return {count: 0, are_LLD: 0};    
        },
    );
    
    dc.numberDisplay(element)
        .formatNumber(d3.format(".2%"))
        .valueAccessor(function (d) {
            if (d.count == 0) {
                return 0;
            } else {
                return (d.are_LLD / d.count);
            }
        })
        .group(percentageThatAreSUVDoors)
}


function show_towed_to(ndx){
    var dim = ndx.dimension(dc.pluck('Towed to Address'));
    var group = dim.group();
    
    dc.barChart("#towed-to")
        .width(1000)
        .height(400)
        .margins({top:10, right:50, bottom:30, left:50})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .yAxis().ticks(10);
}

var fixednavbar = document.getElementById('fixednavbar');

    window.onscroll = function () {
        
        
        fixednavbar.style.position = "fixed";
        fixednavbar.style.top = "0";
    };




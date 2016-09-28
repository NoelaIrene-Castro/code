Framework7.prototype.plugins.math = function (app, params) {
    if (!params) return;

    var stat = function(){
        'use strict';
        return {
            mean: function(num){
                var y = 0;
                $.each(num,function(a,b){
                    y = y + b;
                })
                return y/num.length;
            },
            median: function(numbers){
                var median = 0,
                numsLen = numbers.length;
                numbers.sort();
                if (numsLen % 2 === 0) { 
                    median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
                } 
                else 
                { 
                    median = numbers[(numsLen - 1) / 2];
                }
                return median;
            },
            mode:function(numbers){
                if (numbers.length===0) return null;
                var modemap = [],
                modes=[numbers[0]],
                maxIndex = 0;
              numbers.forEach(function(val){
                if (modemap[val]===undefined)
                {
                     modemap[val]=1;
                }
                else
                {
                 modemap[val]++;
                }
                if(modemap[val]>maxIndex){
                    modes =[val];
                    maxIndex=modemap[val];
                    }
                else if (modemap[val]==maxIndex){
                    modes.push(val);
                    maxIndex=modemap[val];
                 }
            });
               return modes; 
           }
        }
       
    }();

    return {
        hooks: {
            appInit: function () {
               // console.log ('appInit');
              // var arr = [1,2,3,4];
              //   console.log("Mean: "+stat.mean(arr));
              //   console.log("Median: "+stat.median(arr));
              //   console.log("Mode: "+stat.mode(arr)); 

                $$("#btn_calc").click(function(){
                    var input= $$("#input_ages").val().split(',');
                    $$.each(input,function(a,b){
                        input[a]= parseInt(input[a]);
                    });

                    $$("#statSolutions").html("SOLUTION:<br/>"+"Mean:"+stat.mean(input) + "<br/>Median:"+ stat.median(input)+ "<br/>Mode: "+stat.mode(input));      
                });
            }
        }
    };
};

var $$ = Dom7;
var app = new Framework7({
    material:true,
    math:true
});

d3.csv("well_cleaned.csv").then(function(data) {

  console.log(data);

  // log a list of names
  var well_code = data.map(data => data.WELL_BORE_CODE)
  var avg_dhp = data.map(data => data.AVG_DOWNHOLE_PRESSURE)
  var avg_wht = data.map(data => data.AVG_WHT_P)
  var avg_whp = data.map(data => data.AVG_WHP_P)
  var bore_oil_vol = data.map(data => data.BORE_OIL_VOL)
  var bore_gas_vol = data.map(data => data.BORE_GAS_VOL)
  var bore_wat_vol = data.map(data => data.BORE_WAT_VOL)
  var avg_choke_size = data.map(data => data.AVG_CHOKE_SIZE_P)
  console.log(well_code);
//Plot feature importances from random forest regression
var coefficients = [0.2568897423054892,
    0.20451257711131457,
    0.19762628159491794,
    0.15377512309577596,
    0.09892351910984025,
    0.08827275678266217]
var features =  ['AVG_WHP_P','AVG_WHT_P','BORE_WAT_VOL','AVG_CHOKE_SIZE_P','BORE_GAS_VOL','BORE_OIL_VOL'];

const dataset1 ={
    x:features,
    y: coefficients,
    type: 'bar',
};

var layout_1 = {
    title: 'PLOT OF FEATURE IMPORTANCES - Using Randomized Search CV on Random Forest Regression Model ((MSE): 0.12 // (R2): 0.87)',
    font:{
      family: 'Raleway, sans-serif'
    },
    showlegend: false,
    xaxis: {
      title: 'Feature Names',
      
    },
    yaxis: {
      title: 'Coefficient Values',
      zeroline: false,
      gridwidth: 2
    },
    bargap :0.05,
    xlabel: 'Feature Names'
  };



Plotly.newPlot('plot',[dataset1],layout_1);

//Plot downhole pressure versus 'AVG_WHP_P' - CUMULATIVE
var trace1 = {
        x: avg_whp,
        y: avg_dhp,
        mode: 'markers+text',
        type: 'scatter',
        marker: { size: 12 }
    };
var data1 = [trace1];
  
var layout1 = {
   xaxis: {
      title: 'AVG WELLHEAD PRESSURE (BAR)'
    },
    yaxis: {
      title: 'AVG DOWNHOLE PRESSURE (BAR)'
    },
    legend: {
      y: 0.5,
      yref: 'paper',
      font: {
        family: 'Arial, sans-serif',
        size: 20,
        color: 'grey',
      }
    },
    title:'AVG DOWNHOLE PESSURE (BAR) versus AVG WELLHEAD PRESSURE (BAR) CUMULATIVE'
  };
  
  Plotly.newPlot('plot_whp', data1, layout1);

//Plot downhole pressure versus 'AVG_WHT_P' - CUMULATIVE
var trace2 = {
    x: avg_wht,
    y: avg_dhp,
    mode: 'markers+text',
    type: 'scatter',
    marker: { size: 12 }
};
var data2 = [trace2];

var layout2 = {
xaxis: {
  title: 'AVG WELLHEAD TEMPERATURE (degC)'
},
yaxis: {
  title: 'AVG DOWNHOLE PRESSURE (BAR)'
},
legend: {
  y: 0.5,
  yref: 'paper',
  font: {
    family: 'Arial, sans-serif',
    size: 20,
    color: 'grey',
  }
},
title:'AVG DOWNHOLE PESSURE (BAR) versus AVG WELLHEAD TEMPERATURE (BAR) CUMULATIVE'
};

Plotly.newPlot('plot_wht', data2, layout2);

//Plot downhole pressure versus 'BORE_WAT_VOL' - CUMULATIVE
var trace3 = {
    x: bore_wat_vol,
    y: avg_dhp,
    mode: 'markers+text',
    type: 'scatter',
    marker: { size: 12 }
};
var data3 = [trace3];

var layout3 = {
xaxis: {
  title: 'BORE WATER VOLUME (sm3)'
},
yaxis: {
  title: 'AVG DOWNHOLE PRESSURE (BAR)'
},
legend: {
  y: 0.5,
  yref: 'paper',
  font: {
    family: 'Arial, sans-serif',
    size: 20,
    color: 'grey',
  }
},
title:'AVG DOWNHOLE PESSURE (BAR) versus BORE WATER VOLUME (sm3) CUMULATIVE'
};

Plotly.newPlot('plot_wat', data3, layout3);

// Plot for each well
//Get x axis by each well

const array_wells = ['NO 15/9-F-1 C', 'NO 15/9-F-11 H', 'NO 15/9-F-12 H','NO 15/9-F-14 H', 'NO 15/9-F-15 D'];
console.log(array_wells);

});
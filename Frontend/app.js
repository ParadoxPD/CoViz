var mapimg;

var clat = lat;
var clon = long;

var ww = window.innerWidth < 1200 ? window.innerWidth : 1200;
var hh = window.innerHeight < 1200 ? window.innerHeight : 1200;

var zoom = 4;
var earthquakes;

function preload() {
  // The clon and clat in this url are edited to be in the correct order.
  //   mapimg = loadImage("");
  //   if (!mapimg) {
  mapimg = loadImage(
    "https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/" +
      clon +
      "," +
      clat +
      "," +
      zoom +
      "/" +
      ww +
      "x" +
      hh +
      `?access_token=pk.eyJ1IjoicGFyYWRveHBkIiwiYSI6ImNsMTh2aGNsMzAxb3YzaXNlaHR4YzI5bGQifQ.KQEd0JVRjr8bJnvIuBuq7Q`
  );
  //   }
  // earthquakes = loadStrings('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.csv');
  earthquakes = loadStrings(
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv"
  );
}

function mercX(lon) {
  lon = radians(lon);
  var a = (256 / PI) * pow(2, zoom);
  var b = lon + PI;
  return a * b;
}

function mercY(lat) {
  lat = radians(lat);
  var a = (256 / PI) * pow(2, zoom);
  var b = tan(PI / 4 + lat / 2);
  var c = PI - log(b);
  return a * c;
}

async function setup() {
  await getData();
  colorMode(HSB);
  let canvas = createCanvas(ww, hh);
  canvas.parent("p5Canvas");
  //   background(0);
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(mapimg, 0, 0);

  var cx = mercX(clon);
  var cy = mercY(clat);
  let i = 0;
  for (state in statesData) {
    var lat = statesData[state]["latitude"];
    var lon = statesData[state]["longitude"];
    console.log(data[i]);
    var mag = data[i].deaths;
    var x = mercX(lon) - cx;
    var y = mercY(lat) - cy;
    // This addition fixes the case where the longitude is non-zero and
    // points can go off the screen.
    if (x < -width / 2) {
      x += width;
    } else if (x > width / 2) {
      x -= width;
    }

    var magmax = 100000;
    var d = map(mag, 0, magmax, 360, 0);
    console.log(d);
    // stroke(255, 0, 255);
    noStroke();
    fill(d, 255, 255, 200);
    ellipse(x, y, 20, 20);
    i++;
  }
}

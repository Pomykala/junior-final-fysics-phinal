var exports = module.exports = {};

//use this prototype to create the other functions
exports.distance = function(v,t){
let d = v*t;
  return d;
};

exports.distance_a = function(a,v,t){
let d = 0.5*a*t*t+v*t;
  return d;
}

exports.velocity = function(d,t){
let v=d/t;
  return v;
}

exports.velocity_a = function(d,a,t){
let v=(d-0.5*a*a)/t;
  return v;
}
exports.time = function(d,v){
let t=d/v
  return t;
}

exports.time_a = function(d,v,a){
let t = v/a
  return t;
}
exports.acceleration = function(Vf,Vi,t){
let a = (Vf-Vi)/t
  return a;
}

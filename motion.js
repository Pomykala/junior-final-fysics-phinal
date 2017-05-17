var exports = module.exports = {};

//use this prototype to create the other functions
exports.distance = function(v,t){
let d = v*t;
  return d;
};

exports.distance = function(a,v,t){
let d = 0.5*a*t*t+v*t;
  return d;
}
exports.velocity(d,t){
let v=d/t;
  return v;
}
exports.velocity(d,a,t){
let v=(d-0.5*a*a)/t;
  return v;
}
exports.time(d,v){
let t=d/v
  return t
}
exports.time(){
let (Vf-Vi)/a
  return t
}
exports.acceleration(Vf,Vi,t){
let a= =(Vf-Vi)/t
  return a;
}

//property flags and descriptor: they hav attribute like
//  writable:can the value be changed
// enumerable:looped over
// configureable: peroperty be deleted or changed

const abc={}
Object.defineProperty(obj,"name",{
  value:"alice",
  writable:false,   // cannot change the value
  enumerable:true, // can loop over
  configurable:false, //cannot delete the property
});

console.log(obj.name);
obj.name="bob"  // cannot assign to this read only property

var sayinngs = new Map()
sayinngs.set('dog','woof')
sayinngs.set('dog1','woof1')
sayinngs.set('dog2','woof2')
console.log(sayinngs.size);
console.log(sayinngs.get('dog'));
console.log(sayinngs.has('dog1'));
console.log(sayinngs.delete('dog2'));
for(var [key,value] of sayinngs){
    console.log(key,value);
}
sayinngs.clear()
console.log(sayinngs.size)
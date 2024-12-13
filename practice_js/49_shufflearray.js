//49. Shuffle an array of strings

let arr=["mango","banana","cherry","strawbery","kiwi"]
console.log(arr);
for(let i=arr.length-1;i>=0;i--)
{
    const j=Math.floor(Math.random()*(i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

console.log(arr);
const anchor=document.querySelector('a')!

console.log(anchor.href);  //html property to access it


// const form=document.querySelector('form')!

const form=document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);//all div fields will display

//inputs

const type=document.querySelector('#type') as HTMLSelectElement
const toform=document.querySelector('#toform') as HTMLSelectElement
const detail = document.querySelector('#amount') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit',(e:Event)=>{
  e.preventDefault()

  console.log(
    type.value,
    toform.value,
    detail.value,
    amount.valueAsNumber
  );
})


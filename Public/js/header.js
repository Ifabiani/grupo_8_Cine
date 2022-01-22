window.addEventListener("load", function() {

  const drop = document.querySelector('.drop');
  const dropIcon = document.querySelector('.fa-caret-down')
  const lupa = document.querySelector('.fa-search')
  const input = document.querySelector('.input')
  const lupa2 = document.querySelector('#lupa')
  const input2 = document.querySelector('.input2')

 
  lupa.addEventListener('click', function(){
    console.log('hola')
    input.classList.toggle('input')
  })

  lupa2.addEventListener('click', function(){
    console.log('hola')
    input2.classList.toggle('input2')
  })
})
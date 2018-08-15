document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  const input = document.querySelector('#input')
  let hashedArr
  form.addEventListener('submit', handleSubmit)
})


function handleSubmit(e) {
  e.preventDefault()
  hashedArr = md5.array(input.value)
  return hashedArr
}

function setColor(){
  return `rbg(${hashedArr[7]}, ${hashedArr[4]}, ${hashedArr[1]})`
}

function hasColor(number){
  number%2 === 0 ? true : false
}
// style="background-color:rgb(212, 29, 140)"

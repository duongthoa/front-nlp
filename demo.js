

const url_ananlysis = ""

function getColor(str) {
  switch(str){
    case "N":
      color = "red";
      break;
    case "M":
      color = "blue";
      break;
  }
  return color
}

function insertResult(sentence) {
  sen = '<p class="sentence">'
  sentence.forEach(ele => {
    x = ele.text
    x +=  '<span style="color:' + getColor(ele.value) + '">(' + ele.value + ')</span>'
    sen += x
  })
  sen += '</p>'
  resultEle.innerHTML = sen
}

async function analysis() {
  /*
    demo
  */
  console.log('annalysis')
  btnSubmit.style.display = "none"
  btnReset.style.display = "flex"
  insertResult(sentence)


  /*
    run
  */
  // const inputValue = inputEle.value
  // try {
  //   const response = await axios.post(url_ananlysis, {
  //     text: inputValue
  //   });
  //   if (response.status === 200) {
  //     let data = response.data
  //     let sentence = data.sentence
  //     insertResult(sentence)
  //   }
  // } catch (error) {
  //   console.error(error);
  // }
}

function reset() {
  inputEle.value = ""
  btnReset.style.display = "none"
  btnSubmit.style.display = "flex"
  resultEle.innerHTML = ""
}

const btnSubmit = document.getElementById('btn-submit')
const btnReset = document.getElementById('btn-reset')
const resultEle = document.getElementById("result")
const inputEle = document.getElementById('input')

const sentence = [
  { text: "ha noi", value: 'N' },
  { text: 'viet nam', value: 'M'}
]

btnSubmit.addEventListener('click', analysis)
btnReset.addEventListener('click', reset)


/*
  @form of data

let data = {
	sentence: [
  	{text: "hom nay", value: 'N' },
    {text: 'troi dep', value: 'M'}
  ]
}

*/
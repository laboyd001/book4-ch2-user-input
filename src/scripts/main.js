document.querySelector(".lego_save").addEventListener("click", lego)

function lego() {
  let creator = document.getElementById("lego_creator").value
  let creation = document.getElementById("lego_creation_label").value
  let shape = document.getElementById("lego_shape_label").value
  let color = document.getElementById("lego_color_dropdown").value

  let savedLego = {
    name: creator,
    creation: creation,
    shape: shape,
    color: color
  }

  console.log(savedLego)

  fetch("http://localhost:8088/legos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(savedLego)
  })

}

document.querySelector(".lego_display").addEventListener("click", displayLego)

function displayLego() {

  fetch("http://localhost:8088/legos")
    .then((response) => response.json())
    .then(parsedLegos => {
      let legoList = document.getElementById("legoOutput")
      legoList.innerHTML = ""
      parsedLegos.forEach(lego => {
        legoList.innerHTML += `
      <br><br>
      <fieldset>
        <p>Creator: ${lego.name}</p>
        <p>Creation: ${lego.creation}</p>
        <p>Shape:${lego.shape}</p>
        <p>Color: ${lego.color}</p>
      </fieldset>
      <br><br>
        `
      })
    })
}
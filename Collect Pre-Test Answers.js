javascript:localStorage.setItem("ramsey", JSON.stringify([...document.querySelectorAll(".GradedAssessment-question")].map(e => [e.firstChild.data.trim(), e.querySelector(".is-correct").innerText.trim()])));
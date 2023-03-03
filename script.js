const saveBtn = document.querySelector(".btn-1");
const resetBtn = document.querySelector(".btn-2");

saveBtn.addEventListener("click", () => {
    alert("save button clicked")
    // const data = document.querySelector(".input").value;
    // localStorage.setItem("data", data);
    }
);

resetBtn.addEventListener("click", () => {
    alert("reset button clicked")

    // localStorage.removeItem("data");
    }
);


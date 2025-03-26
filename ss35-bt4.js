let staffs = JSON.parse(localStorage.getItem("staffs")) || [];

function renderPageButtons(activePage = 1) {
  let pagination = document.getElementById("pagination");
  pagination.innerHTML = "";
  let totalPages = Math.ceil(staffs.length / 5);

  if (activePage > 1) {
    pagination.innerHTML += `
      <button type="button" class="btn btn-outline-primary me-2" onclick="output(${
        activePage - 1
      })">Previous</button>
    `;
  }

  for (let i = 1; i <= totalPages; i++) {
    pagination.innerHTML += `
      <button type="button" class="btn btn-outline-primary me-2 ${
        i === activePage ? "active" : ""
      }" onclick="output(${i})">${i}</button>
    `;
  }

  if (activePage < totalPages) {
    pagination.innerHTML += `
      <button type="button" class="btn btn-outline-primary" onclick="output(${
        activePage + 1
      })">Next</button>
    `;
  }
}

function input(event) {
  event.preventDefault();

  let nameInput = document.getElementById("name");
  let officeInput = document.getElementById("office");

  if (!nameInput.value || !officeInput.value) {
    alert("Vui lòng nhập đầy đủ thông tin nhân viên!");
    return;
  }

  let staff = {
    id: staffs.length + 1,
    name: nameInput.value,
    office: officeInput.value,
  };

  staffs.push(staff);
  localStorage.setItem("staffs", JSON.stringify(staffs));

  nameInput.value = "";
  officeInput.value = "";

  let newPage = Math.ceil(staffs.length / 5);
  output(newPage);
}

function output(indexPage) {
  let output = document.getElementById("output");
  output.innerHTML = "";

  let end = indexPage * 5;
  let start = end - 5;

  let currentData = staffs.slice(start, end);

  currentData.forEach((element) => {
    output.innerHTML += `
      <tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.office}</td>
      </tr>
    `;
  });

  renderPageButtons(indexPage);
}

output(1);

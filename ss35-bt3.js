let products = [
  {
    id: 1,
    name: "Laptop Dell XPS 15",
    price: 35990000,
    image:
      "https://th.bing.com/th/id/R.dd66a48254aca2d1e37b8887993a100c?rik=Ileg6QdLFs2iTA&pid=ImgRaw&r=0",
    description:
      "Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.",
  },
  {
    id: 2,
    name: "iPhone 15 Pro Max",
    price: 32990000,
    image:
      "https://th.bing.com/th/id/OIP.PO8M08Vxndz_455at0qGawHaFj?rs=1&pid=ImgDetMain",
    description:
      "Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.",
  },
  {
    id: 3,
    name: "Samsung Galaxy S24 Ultra",
    price: 28990000,
    image:
      "https://th.bing.com/th/id/OIP.n5ZE0e4C910Ed2cLhNKjPAHaEK?rs=1&pid=ImgDetMain",
    description:
      "Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.",
  },
  {
    id: 4,
    name: "Tai nghe Sony WH-1000XM5",
    price: 7990000,
    image: "https://m.media-amazon.com/images/I/61DiapZH5RL.jpg",
    description:
      "Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.",
  },
  {
    id: 5,
    name: "Apple Watch Series 9",
    price: 11990000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe1czyW_V0_lYkKSuBS2NC02eF04pg9IQdZsWrt9lNlqQ968LY",
    description:
      "Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.",
  },
  {
    id: 6,
    name: "Loa JBL Charge 5",
    price: 3990000,
    image:
      "https://th.bing.com/th/id/OIP.kNp66Lw41hQJBWsxrddSZQHaHa?rs=1&pid=ImgDetMain",
    description: "Loa Bluetooth chsống nước với âm bass mạnh mẽ và pin 20 giờ.",
  },
];

localStorage.setItem("products", JSON.stringify(products));

products = JSON.parse(localStorage.getItem("products")) || [];

document.getElementById("btn").onclick = (event) => {
  event.preventDefault();

  let container = document.getElementById("containerCard");
  container.innerHTML = "";

  let inputElement = document.getElementById("search");
  let input = inputElement.value;

  if (input === "") {
    container.innerHTML = ``;
    return;
  }

  inputElement.value = "";

  let find = products.filter((el) =>
    el.name.toLowerCase().includes(input.toLowerCase())
  );

  find.forEach((el) => {
    container.innerHTML += `
          <div class="card m-2" style="width: 16rem;">
            <img src="${el.image}" class="card-img-top" alt="${el.name}">
            <div class="card-body">
              <h5 class="card-title">${el.name}</h5>
              <p class="card-text">${el.description}</p>
              <p>${el.price.toLocaleString()} VND</p>
              <button class="btn btn-primary">Buy</button>
            </div>
          </div>
      `;
  });
};

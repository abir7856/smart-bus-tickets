const classNames = document.getElementsByClassName("seat");
let sum = 0;
let incrementOfSeat = 0;
let decrementOfSeat = 40;
for (let className of classNames) {
  className.addEventListener("click", function (e) {
    // Set price list (price menu)
    const seatName = e.target.innerText;

    const p1 = document.createElement("p");
    p1.innerText = seatName;
    const p2 = document.createElement("p");
    p2.innerText = "Economoy";
    const p3 = document.createElement("p");
    p3.innerText = 550;
    const div = document.createElement("div");
    div.setAttribute("class", "flex justify-between text-gray-400");

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);

    const seatPriceList = document.getElementById("seatPriceList");

    // condition of seat plan (get 4 seats for one passenger)
    if (incrementOfSeat < 4) {
      seatPriceList.appendChild(div);

      // double selected seat avoid (condition)
      const selectSeat = e.target.innerText;

      // add selected set color functionality
      e.target.classList.add(
        "bg-[#1DD100]",
        "hover:bg-[#1DD100]",
        "text-white"
      );

      // sum of price and show sum of total price
      const seatPrice = document.querySelector("#seatPriceList");
      sum = sum + parseInt(seatPrice.childNodes[0].childNodes[2].innerText);
      document.getElementById("totalPrice").innerText = sum;

      // discount 15% and 20% condition
      document
        .getElementById("discountButton")
        .addEventListener("click", function (e) {
          const couponValue =
            e.target.parentNode.childNodes[1].value.toUpperCase();

          if (couponValue === "NEW15") {
            document.getElementById(
              "totalPrice"
            ).innerHTML = `<del>${sum}</del>`;
            const discount15 = sum - (sum * 15) / 100;
            document.getElementById("grandPrice").innerText = discount15;
            console.log(discount15);
            e.target.parentNode.classList.add("hidden");
          } else if (couponValue === "COUPLE 20") {
            document.getElementById(
              "totalPrice"
            ).innerHTML = `<del>${sum}</del>`;
            const discount20 = sum - (sum * 20) / 100;
            document.getElementById("grandPrice").innerText = discount20;
            console.log(discount20);
            e.target.parentNode.classList.add("hidden");
          } else {
            e.target.parentNode.childNodes[1].classList.add("border-red-500");
          }
        });

      // increment and Decrement number of seat
      incrementOfSeat++;
      decrementOfSeat--;
      document.getElementById("incrementOfSeat").innerText = incrementOfSeat;
      document.getElementById("decrementOfSeat").innerText = decrementOfSeat;
    } else {
      //   alert("You can selected max 4 seat");
    }
  });
}



    //  // Get references to the modal and Next button
    //  const modal = document.getElementById("successModal");
    //  // const nextModalButton = document.getElementById("nextButton");

    //  // Function to open the modal
    // //  function openModal() {
    // //    modal.style.display = "flex justify-center";
    // //  }


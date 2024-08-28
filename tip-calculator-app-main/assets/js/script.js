const control = document.getElementById('control');
const amount = document.getElementById('amaunt');
const tipamount = document.getElementById('tipamount');
const people = document.getElementById('people');
const totalAmount = document.getElementById('total');

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

  var tl1 = gsap.timeline();
    
  tl1
  .to('.screen-loading', {
    duration: 2,
    opacity: 0, 
    delay: 3,
    ease: "power4.out",
  })
});

ScrollTrigger.addEventListener("scrollStart", () => {

  ScrollTrigger.refresh();

});

control.addEventListener("change", handleChange);

function handleChange(event) {
    const value = parseFloat(event.target.value);

    bill = parseFloat(amount.value);
    persons = parseFloat(people.value);
    rate = (bill * value);
    tiptotal = rate / persons;
    totalAmt = (rate + bill) / persons;

    if(people.value == "") {
        people.classList.add('active');
    } else {
        people.classList.remove('active');
        tipamt = tiptotal.toFixed(2);
        tipamount.value = tipamt;

        totalmt = totalAmt;
        totalAmount.value = totalmt.toFixed(2);
        console.log(totalmt)
    }
}
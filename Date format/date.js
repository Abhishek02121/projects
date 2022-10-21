let displayDate = document.getElementById("display-date");
let dateToday = new Date();

let formats = {
	weekday: "long",
	year:"2-digit",
	month:"long",
	day:"2-digit",
};
let formattedDate = dateToday.toLocaleDateString("hi-IN", formats);
displayDate.innerText = formattedDate;
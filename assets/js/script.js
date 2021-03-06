var myDay = [
    {
        id: "0",
        hour: "09",
        time: "09",
        meridiem: "am",
        business: ""
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        meridiem: "am",
        business: ""
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        meridiem: "am",
        business: ""
    },
    {
        id: "3",
        hour: "12",
        time: "12",
        meridiem: "pm",
        business: ""
    },
    {
        id: "4",
        hour: "01",
        time: "13",
        meridiem: "pm",
        business: ""
    },
    {
        id: "5",
        hour: "02",
        time: "14",
        meridiem: "pm",
        business: ""
    },
    {
        id: "6",
        hour: "03",
        time: "15",
        meridiem: "pm",
        business: ""
    },
    {
        id: "7",
        hour: "04",
        time: "16",
        meridiem: "pm",
        business: ""
    },
    {
        id: "8",
        hour: "05",
        time: "17",
        meridiem: "pm",
        business: ""
    }
    
]

myDay.forEach(function(thisHour) {
    var hourRow = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(hourRow);

    var hourField = $("<div>")
        .text(`${thisHour.hour}${thisHour.meridiem}`)
        .attr({
            "class": "col-md-2 hour"
    });

    var planData = $("<textarea>")
        .attr({
            "class": "col-md-9 description"
        });
    // var planData = $("<textarea>").attr({
    //             "class": "col-md-9 description"});
   // hourPlan.append(planData);
    planData.attr("id", thisHour.id);
    if (thisHour.time < moment().format("HH")) {
        planData.addClass("past")
    } else if (thisHour.time === moment().format("HH")) {planData.addClass("present")
    } else if (thisHour.time > moment().format("HH")) {
        planData.addClass("future")
    }

    var saveButton = $("<i class='far fa-save fa-lg'></i>")
    var savePlan = $("<button>")
        .attr({
            "class": "col-md-1 saveBtn"
    });
    savePlan.append(saveButton);
    hourRow.append(hourField, planData, savePlan);
})

function getHeaderDate() {
    var currentHeaderDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentHeaderDate);
}
getHeaderDate();

function saveBusiness() {
    localStorage.setItem("myDay", JSON.stringify(myDay));
}

function displayBusiness() {
    myDay.forEach(function (_thisHour) {
        $(`#${_thisHour.id}`).val(_thisHour.business);
    })
}

function init() {
    var storedDay = JSON.parse(localStorage.getItem("myDay"));

    if (storedDay) {
        myDay = storedDay;
    }

    saveBusiness();
    displayBusiness();
}
init();

$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var saveIndex = $(this).siblings(".description").children(".future").attr("id");
    myDay[saveIndex].business = $(this).siblings(".description").children(".future").val();
    console.log(saveIndex);
    saveBusiness();
    displayBusiness();
})
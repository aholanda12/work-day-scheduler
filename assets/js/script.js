var myDay = [
    {
        id: "0",
        hour: "09",
        time: "09",
        meridiem: "am",
        event: ""
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        meridiem: "am",
        event: ""
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        meridiem: "am",
        event: ""
    },
    {
        id: "3",
        hour: "12",
        time: "12",
        meridiem: "pm",
        event: ""
    },
    {
        id: "4",
        hour: "01",
        time: "13",
        meridiem: "pm",
        event: ""
    },
    {
        id: "5",
        hour: "02",
        time: "14",
        meridiem: "pm",
        event: ""
    },
    {
        id: "6",
        hour: "03",
        time: "15",
        meridiem: "pm",
        event: ""
    },
    {
        id: "7",
        hour: "04",
        time: "16",
        meridiem: "pm",
        event: ""
    },
    {
        id: "8",
        hour: "05",
        time: "17",
        meridiem: "pm",
        event: ""
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

    var hourPlan = $("<div>")
        .attr({
            "class": "col-md-9"
        });
    var planData = $("<textarea>");
    hourPlan.append(planData);
    planData.attr("id", thisHour.id);
    if (thisHour.time < moment().format("HH")) {
        planData.attr ({
            "class": "past", 
        })
    } else if (thisHour.time === moment().format("HH")) {
        planData.attr({
            "class": "present"
        })
    } else if (thisHour.time > moment().format("HH")) {
        planData.attr({
            "class": "future"
        })
    }

    var saveButton = $("<i class='far fa-save fa-lg'></i>")
    var savePlan = $("<button>")
        .attr({
            "class": "col-md-1 saveBtn"
    });
    savePlan.append(saveButton);
    hourRow.append(hourField, hourPlan, savePlan);
})

function getHeaderDate() {
    var currentHeaderDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentHeaderDate);
}
getHeaderDate();
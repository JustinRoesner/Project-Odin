
//console.log(module);

//module.exports.getDate = getDate;
exports.getDate = getDate;

function getDate() {

    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    return today.toLocaleDateString("en-US", options);
}

//module.exports.getDay = getDay;
exports.getDay = getDay;

function getDay() {

    const today = new Date();

    const options = {
        weekday: "long",
    }

    return today.toLocaleDateString("en-US", options);
}
const findTheOldest = function(peoples) {
    peoples.forEach(function(people) {
        if (!("yearOfDeath" in people)) {
            people.yearOfDeath = (new Date()).getFullYear()
        }
    })
    const oldest = peoples.sort(function(a, b) {
        lastPerson = a.yearOfDeath - a.yearOfBirth;
        nextPerson = b.yearOfDeath - b.yearOfBirth;
        return lastPerson > nextPerson ? -1: 1;
    })
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;

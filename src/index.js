/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

*/

class TownElem {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends TownElem {
    constructor(name, buildYear, parkArea, numberOfTrees) {
        super(name, buildYear);
        this.parkArea = parkArea;
        this.numberOfTrees = numberOfTrees;
    }

    showDensity = () =>
        console.log(`Park ${this.name} has ${(this.numberOfTrees / this.parkArea).toFixed(2)} density of trees.`);
}

class Street extends TownElem {
    constructor(name, buildYear, streetLength, size = 3) {
        super(name, buildYear);
        this.streetLength = streetLength;
        this.size = size;
    }

    showStreetSize = () => {
        const sizes = new Map();
        sizes.set(1, 'tiny');
        sizes.set(2, 'small');
        sizes.set(3, 'normal');
        sizes.set(4, 'big');
        sizes.set(5, 'huge');
        console.log(`${this.name} is ${sizes.get(this.size)}.`);
    }
}

const allParks = [new Park('Green Park', 1987, 0.2, 215),
    new Park('National Park', 1894, 2.9, 3541),
    new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
    new Street('Evergreen Street', 2008, 2.7, 2),
    new Street('4th Street', 2015, 0.8),
    new Street('Sunset Boulevard', 1982, 2.5, 5)];


calcAverage = (arr) => {
    const sum = arr.reduce((prev, curr) => prev + curr, 0);
    return [sum, sum / arr.length];
};

const showToBoss = (arrParks, arrStreets) => {
    arrParks.forEach(park => park.showDensity());
    const parksAge = arrParks.map(park => new Date().getFullYear() - park.buildYear);
    [totalAge, averageAge] = calcAverage(parksAge);
    console.log(`Average age of each town's park is ${averageAge.toFixed(2)}.`);
    arrParks.filter(park => park.numberOfTrees > 1000).forEach(park => console.log(`${park.name} has more than 1000 trees.`));
    const streetsLengths = arrStreets.map(street => street.streetLength);
    [totalLength, averageLength] = calcAverage(streetsLengths);
    console.log(`Total length of the town's streets is ${totalLength.toFixed(2)}, and average length is ${averageLength.toFixed(2)}.`);
    arrStreets.forEach(street => street.showStreetSize());
};

showToBoss(allParks, allStreets);

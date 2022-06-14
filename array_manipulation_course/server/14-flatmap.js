const users = [
    { id: 1, name: 'John', age: 20, groups: ['admin', 'users', 'root'] },
    { id: 2, name: 'Pete', age: 18, groups: ['users'] },
    { id: 3, name: 'Mary', age: 19, groups: ['admin', 'root'] },
];

const rta = users.map(item => item.groups).flat();
console.log("map-flat", rta);
const rta2 = users.flatMap(item => item.groups);
console.log("flatMap", rta2);

const calendars = {
    primaryCalendar: [
        {
            startDate: new Date(2021,1,1,15),
            endDate: new Date(2021,1,1,15,30),
            title: 'Event 1',
        },
        {
            startDate: new Date(2021,1,2,10),
            endDate: new Date(2021,1,2,11),
            title: 'Event 2',
        },
    ],
    secondaryCalendar: [
        {
            startDate: new Date(2021,1,1,15),
            endDate: new Date(2021,1,1,15,30),
            title: 'Event 1',
        },
        {
            startDate: new Date(2021,1,2,10),
            endDate: new Date(2021,1,2,11),
            title: 'Event 2',
        },
    ],
}

const rta3 = Object.values(calendars).flatMap(item => item.map(date => date.startDate));
console.log("Object.values", rta3);
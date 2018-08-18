const siege = require('siege');

const getRandomId = () => {
  return Math.floor(Math.random() * 10000000) + 1;
};

let holder = siege().concurrent(20).on(3002);

for (let i = 0; i < 100000; i += 1) {
  holder.for(1).times.get(`/api/restaurant/${getRandomId()}/photos`);
}

holder.attack();

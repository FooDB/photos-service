const faker = require('faker');
const fs = require('fs');

const getRandomId = () => Math.floor(Math.random() * 500) + 1;

const getPhotoIds = () => {
  const ids = [];
  const numImages = Math.floor(Math.random() * 15) + 5;
  for (let i = 0; i < numImages; i += 1) {
    ids.push(getRandomId());
  }
  return ids;
};

fs.readFile('names.csv', (error, data) => {
  if (error) {
    console.log(error);
  }
  const dataArr = data.toString().split('\n');
  genData(1, 5000000, dataArr);
});

const genData = (start, end, nameArr) => {
  let header = `id\trestaurantName\tusername\tdescription\tcreatedAt\tphotoUrls`;
  console.log(header);
  for (let i = start; i <= end; i += 1) {
    const id = i + '\t';
    const restName = nameArr[i] + '\t';
    const name = `${faker.name.firstName()} ${faker.name.lastName()}` + '\t';
    const name2 = faker.commerce.productName() + '\t';
    const date = faker.date.past() + '\t';
    const urls = JSON.stringify(getPhotoIds());
    console.log(`${id}${restName}${name}${name2}${date}${urls}`);
  }
};

// genData(5000001, 10000000);

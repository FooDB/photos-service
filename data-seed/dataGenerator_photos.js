const getRandomId = () => Math.floor(Math.random() * 500) + 1;

const MIN_PHOTOS = 10;
const MAX_PHOTOS = 20;

const getNumPhotos = () => Math.floor(Math.random() * (MAX_PHOTOS - MIN_PHOTOS)) + MIN_PHOTOS + 1;

const genData = (start, end) => {
  const header = 'id\trestaurant_id';
  // comment out below if not generating beginning of the file
  // console.log(header);
  for (let restId = start; restId <= end; restId += 1) {
    const numPhotos = getNumPhotos();
    for (let photo = 0; photo <= numPhotos; photo += 1) {
      console.log(`${getRandomId()}\t${restId}`);
    }
  }
};

// note: only do 5 million at a time
genData(1, 1000);

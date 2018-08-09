// function that creates links to 500 different aws images
const generateUrls = () => {
  const header = `id\turl`;
  console.log(header);

  for (let i = 1; i <= 500; i += 1) {
    const row = `${i}\thttps://s3-us-west-1.amazonaws.com/system-design-capstone/${i}.jpg`;
    console.log(row);
  }
}

generateUrls();

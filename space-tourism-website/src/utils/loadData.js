import data from '../data.json';

export default function loadData() {
  return new Promise((resolve, reject) => {
    if (data) {
      resolve(data);
    } else {
      reject(new Error('Data not found'));
    }
  });
}

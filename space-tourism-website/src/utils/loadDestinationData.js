import data from '../data.json';

export default function loadDestinationData() {
  return new Promise((resolve, reject) => {
    if (data.destinations) {
      resolve(data.destinations);
    } else {
      reject(new Error('No destinations found'));
    }
  });
}
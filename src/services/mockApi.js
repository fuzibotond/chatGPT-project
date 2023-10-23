import challengesData from '../mock/challenges.json'; // Replace 'path-to-challenges.json' with the actual path

export const getChallenges = () => {
    return new Promise((resolve) => {
      // Simulate an API request delay (you can remove this in production)
      setTimeout(() => {
        resolve({ data: challengesData.challenges });
      }, 1000);
    });
  };
  
import readlineSync from 'readline-sync';

export const getPlayerName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name.length === 0 ? 'Player' : name;
};

export const greet = (name) => console.log(`Hello, ${name}!`);

export const askNameAndGreetPlayer = () => {
  console.log('Welcome to the Brain Games!');
  const name = getPlayerName();
  greet(name);
};

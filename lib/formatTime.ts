export default function formatTime(time: number) {
  // format the time like 3:59.16
  const seconds = Math.floor(time / 1000);
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = seconds % 60;
  const milliseconds = Math.floor(time % 1000);
  return `${minutes}:${secondsLeft}.${milliseconds}`;
}

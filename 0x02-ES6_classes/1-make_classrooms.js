import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classes = [19, 20, 34];
  return classes.map((n) => new ClassRoom(n));
}

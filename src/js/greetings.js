export default function getTimeGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Доброго ранку 🌅';
  if (hour < 18) return 'Доброго дня ☀️';
  return 'Доброго вечора 🌙';
}
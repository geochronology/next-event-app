export async function getAllEvents() {
  const response = await fetch(
    'https://nextjs-course-cb02f-default-rtdb.firebaseio.com/events.json'
  );
  const data = await response.json();
  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  console.log(response);

  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();

  console.log('allEvents:', allEvents);
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}

export interface Firebase {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
}

export const getAllEvents = async () => {
  const url =
    "https://react-http-ff6b9-default-rtdb.asia-southeast1.firebasedatabase.app/events.json";

  const response = await fetch(url);
  const data = await response.json();

  const events: Firebase[] = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
};

export const getFeaturedEvents = async () => {
  const events = await getAllEvents();
  return events.filter((event) => event.isFeatured);
};

export const getEventById = async (id: string) => {
  const events = await getAllEvents();
  return events.find((event) => event.id === id);
};

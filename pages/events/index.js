import Layout from "@/components/layout/Layout";
import EventItem from "@/components/event-item/EventItem";
import { API_URL } from "@/config/index";

function EventsPage({ events }) {
  console.log({ events });
  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 && <h3>No events available</h3>}
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

export default EventsPage;

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
}

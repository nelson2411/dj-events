import Layout from "@/components/layout/Layout";
import EventItem from "@/components/event-item/EventItem";
import { API_URL, PER_PAGE } from "@/config/index";
import Link from "next/link";
import Pagination from "@/components/pagination/Pagination";

function EventsPage({ events, page, total }) {
  console.table({ events });
  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 && <h3>No events available</h3>}
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
      <Pagination page={page} total={total} />
    </Layout>
  );
}

export default EventsPage;

export async function getServerSideProps({ query: { page = 1 } }) {
  // Calculate start page
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

  // Fetch total/count
  const totalRes = await fetch(`${API_URL}/events/count`);
  const total = await totalRes.json();

  // Fetch Events
  const eventRes = await fetch(
    `${API_URL}/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`
  );
  const events = await eventRes.json();

  return {
    props: { events, page: +page, total },
  };
}

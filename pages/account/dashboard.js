import React from "react";
import { useRouter } from "next/router";
import { parseCookies } from "@/helpers/index";
import Layout from "@/components/layout/Layout";
import DashboardEvent from "@/components/Dashboard-events/DashboardEvents";
import { API_URL } from "@/config/index";
import styles from "@/styles/Dashboard.module.css";

const DashboardPage = ({ events, token }) => {
  const router = useRouter();

  const deleteEvent = async (id) => {
    if (confirm("Are you sure you want to delete this?")) {
      const res = await fetch(`${API_URL}/events/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
      } else {
        router.push("/events");
      }
    }
  };
  console.table(events);
  return (
    <Layout title="User Dashboard">
      <div className={styles.dash}>
        <h1>Dashboard</h1>
        <h3>My Events</h3>
        {events.map((evt) => (
          <DashboardEvent key={evt.id} evt={evt} handleDelete={deleteEvent} />
        ))}
      </div>
    </Layout>
  );
};

export default DashboardPage;

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  const res = await fetch(`${API_URL}/events/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const events = await res.json();

  return {
    props: {
      events,
      token,
    },
  };
}

import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/EventList';

function HomePage(props) {
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    // regenerate page every 30 mins so data doesn't get stale
    revalidate: 1800,
  };
}

export default HomePage;

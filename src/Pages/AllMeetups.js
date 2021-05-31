import React from "react";
import MeetupList from "../Components/meetups/MeetupList";
import { useState, useEffect } from "react";

function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-meetup-8609d-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>is Loading....</p>
      </section>
    );
  }

  return (
    <div>
      All Meetups
      <MeetupList meetups={loadedMeetups} />
    </div>
  );
}

export default AllMeetups;

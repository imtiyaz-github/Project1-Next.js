import React from "react";
import MeetUpDetail from "../../components/meetups/MeetUpDetail";
import context from "react-bootstrap/esm/AccordionContext";

function MeetupDetail() {
  return (
    <MeetUpDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
      title="First Meetup"
      address="Some Street 5,some city"
      description="This is a First meetup"
    />
  );
}


export async function getStaticPaths() {

  //fetch data for a single meetup

  return {
    fallback: false,
    paths: [
      {
        params: {
          // id:1234 #example of dynamic parameter in the url
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  
  //fetch data for a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
        id: meetupId,
        title: "first meetup",
        address: "Some Street 5,some city",
        description: "This is a First meetup",
      },
    },
  };
}

export default MeetupDetail;

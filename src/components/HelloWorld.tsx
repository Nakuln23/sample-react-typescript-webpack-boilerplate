import React from "react";

export interface HelloWorldProps {
  firstName: string;
  lastName: string;
}

const HelloWorld = (props: HelloWorldProps) => {
  const { firstName, lastName } = props;
  return (
    <h1>
      Hi there from React! Welcome {firstName} and {lastName}!
    </h1>
  );
};

export default HelloWorld;

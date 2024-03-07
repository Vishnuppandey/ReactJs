import React, { useEffect, useState } from "react";

function Github() {
  /* const data = useLoaderData();
  if (!data) {
    return <div>Loading...</div>;
  } */
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Vishnuppandey")
      .then((response) => response.json())
      .then((data) => {
        setdata(data);
      });
  }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Followers:{data.followers}
      <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  );
}

export default Github;
/* export const githubdata = async () => {
  const response = await fetch("https://api.github.com/users/Vishnuppandey");
  return response.json();
}; */

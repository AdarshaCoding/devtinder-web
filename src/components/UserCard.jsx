import React from "react";

const UserCard = ({ user }) => {
  const { firstName, lastName, age, gender, photoUrl, about } = user;
  return (
    <div className="card bg-base-300 w-72 shadow-md p-2 mx-auto my-10">
      <figure className="h-40 w-60 flex mx-auto">
        <img src={photoUrl} alt="profile_image" className="rounded-2xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + ", " + gender}</p>}
        {about && <p>{about}</p>}
        <div className="card-actions justify-end">
          <button className="btn bg-amber-600">Ingnore</button>
          <button className="btn bg-green-700">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

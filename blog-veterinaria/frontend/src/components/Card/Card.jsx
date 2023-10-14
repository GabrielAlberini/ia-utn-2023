import ReactMarkdown from "react-markdown";

/* eslint-disable react/prop-types */
const Card = ({ data }) => {
  const { id, attributes } = data;

  return (
    <div className="card" key={id}>
      <img
        src={"http://localhost:1337" + attributes.image.data.attributes.url}
        alt={attributes.race}
      />
      <h2>{attributes.race}</h2>
      <ReactMarkdown>{attributes.description}</ReactMarkdown>
      <h3>Special Cares:</h3>
      <ul>
        {attributes.special_cares.data.map((care) => (
          <li key={care.id}>{care.attributes.name}</li>
        ))}
      </ul>
      <h3>Foods:</h3>
      <ul>
        {attributes.foods.data.map((food) => (
          <li key={food.id}>{food.attributes.name}</li>
        ))}
      </ul>
    </div>
  );
};

export { Card };

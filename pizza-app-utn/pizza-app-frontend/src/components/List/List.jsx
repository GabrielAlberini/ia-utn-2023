import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Papa from "papaparse";
import { Layout } from "../Layout/Layout";
import { Loader } from "../Loader/Loader";
import "./List.css";

const List = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQP6do5csq2hr_sVewObPyyQ9HGTJgBOMgR0l77QsQIYflMqXcwhwMJQY-ubbdrgrzpOsPGcUOPHddy/pub?gid=1086508571&output=csv"
    )
      .then((response) => response.text())
      .then((data) => {
        const parsedData = Papa.parse(data, { header: true }).data;
        const user = parsedData.find((item) => item.slug === slug);
        if (user) {
          fetch(user.url)
            .then((response) => response.text())
            .then((userData) => {
              const parsedUserData = Papa.parse(userData, {
                header: true,
              }).data;
              setPizzas(parsedUserData);
              setLoading(false);
            });
        } else {
          setError(true);
          setLoading(false);
        }
      });
  }, []);

  return (
    <Layout>
      <section className="container p-5">
        {loading ? (
          <Loader />
        ) : error ? (
          <div className="notification is-danger">User not found</div>
        ) : (
          <div className="columns is-multiline">
            {pizzas.map((pizza, index) => (
              <div className="column is-one-third" key={index}>
                <div className="card card-hover">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={pizza.image} alt={"imagen de " + pizza.name} />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-4">{pizza.name}</p>
                      </div>
                    </div>

                    <div className="content">
                      <p>
                        <span className="has-text-weight-semibold">
                          Ingredientes:
                        </span>{" "}
                        {pizza.ingredients}
                      </p>
                      <p>
                        <span className="has-text-weight-semibold">
                          Precio:
                        </span>{" "}
                        {pizza.price}
                      </p>
                      <p>
                        <span className="has-text-weight-semibold">
                          Historia:
                        </span>{" "}
                        {pizza.history}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
};

export { List };

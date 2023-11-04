import { useState, useEffect } from "react";
import Papa from "papaparse";
import { Layout } from "../Layout/Layout";
import { Loader } from "../Loader/Loader";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQP6do5csq2hr_sVewObPyyQ9HGTJgBOMgR0l77QsQIYflMqXcwhwMJQY-ubbdrgrzpOsPGcUOPHddy/pub?gid=1086508571&output=csv"
    )
      .then((response) => response.text())
      .then((data) => {
        const parsedData = Papa.parse(data, { header: true }).data;
        setUsers(parsedData);
        setLoading(false);
      });
  }, []);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Layout>
      <section className="section">
        <div className="container">
          {loading ? (
            <Loader />
          ) : (
            users.map((user) => (
              <Link className="box" key={user.slug} to={`/${user.slug}`}>
                <div>
                  <p className="title is-4">
                    {capitalizeFirstLetter(user.slug)}
                  </p>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>
    </Layout>
  );
};

export { Users };

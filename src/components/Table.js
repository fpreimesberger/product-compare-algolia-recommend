import React from "react";
import { SlCheck, SlClose } from "react-icons/sl";
import Table from "react-bootstrap/Table";
import "./Table.css";
import "bootstrap/dist/css/bootstrap.css";

const formatString = (str) => {
  const output = JSON.stringify(str).replace(/['"]+/g, "");
  return output.replace("\\", '"');
};

const CompareTable = (props) => {
  return (
    <div className="compare-table">
      <header>
        <h2>Compare to similar items</h2>
        <br />
      </header>
      <Table hover borderless>
        <thead className="border-light table-bordered">
          <tr>
            <th scope="row"></th>

            {props.recommendations.map((recommendation) => (
              <th scope="col" key={recommendation.objectID}>
                <h1 className="item-name">
                  {formatString(recommendation.name)
                    .split("-")
                    .slice(0, 3)
                    .join("-")}
                </h1>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>

            {props.recommendations.map((recommendation) => (
              <td key={recommendation.objectID}>
                <img
                  src={recommendation.image}
                  alt={recommendation.name}
                  className="hit-image"
                />
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row">Brand</th>

            {props.recommendations.map((recommendation) => (
              <td scope="col" key={recommendation.objectID}>
                {formatString(recommendation.brand)}
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row">Price</th>
            {props.recommendations.map((recommendation) => (
              <td scope="col" key={recommendation.objectID}>
                <span className="hit-em">$</span>{" "}
                <strong>{recommendation.price}</strong>{" "}
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row">Description</th>
            {props.recommendations.map((recommendation) => (
              <td scope="col" key={recommendation.objectID}>
                {formatString(recommendation.description)
                  .split(/\s+/)
                  .slice(0, 25)
                  .join(" ")}
                {""}
                ...
              </td>
            ))}
          </tr>
          {/* {props.recommendations[0].cupCapacity !== null && ( */}
          <tr>
            <th scope="row">System Memory</th>
            {props.recommendations.map((recommendation) => (
              <td scope="col" key={recommendation.objectID}>
                {recommendation.memory}
                {""}
              </td>
            ))}
          </tr>
          {/* )} */}
          <tr>
            <th scope="row">Hard Drive Capacity</th>
            {props.recommendations.map((recommendation) => (
              <td scope="col" key={recommendation.objectID}>
                {recommendation.hardDrive}
                {""}
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row">Rating</th>
            {props.recommendations.map((recommendation) => (
              <td scope="col" key={recommendation.objectID}>
                <span className="hit-em hit-rating">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#e2a400"
                      fillRule="evenodd"
                      d="M10.472 5.008L16 5.816l-4 3.896.944 5.504L8 12.616l-4.944 2.6L4 9.712 0 5.816l5.528-.808L8 0z"
                    />
                  </svg>{" "}
                  {recommendation.rating}
                </span>
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row">Free Shipping</th>
            {props.recommendations.map((recommendation) => (
              <td scope="col" key={recommendation.objectID}>
                {" "}
                {recommendation.free_shipping ? (
                  <SlCheck color="#e2a400" fontSize="1.25em" />
                ) : (
                  <SlClose color="#e2a400" fontSize="1.25em" />
                )}
              </td>
            ))}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default CompareTable;

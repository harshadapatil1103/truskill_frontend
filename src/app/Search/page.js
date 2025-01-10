"use client";

import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

function Page() {
  // State to store the search text
  const [searchText, setSearchText] = useState("");

  // GraphQL query to fetch landing pages
  const GET_LANDING_PAGES = gql`
    query GetLandingPages($searchText: String!) {
      landingPages(
        filters: { blocks: { card: { heading: { contains: $searchText } } } }
      ) {
        blocks {
          ... on ComponentBlocksRow {
            card {
              image {
                url
              }
              heading
              description
              duration
              category
              rating
              reviews
              price
              slug
            }
          }
        }
      }
    }
  `;

  // Query hook to fetch data based on the search text
  const { loading, error, data } = useQuery(GET_LANDING_PAGES, {
    variables: { searchText },
    skip: !searchText, // Skip the query if there's no search text
  });

  // Handle loading and error states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Render the landing pages
  const landingPages = data?.landingPages || [];

  return (
    <div>
      <h1>Search for Landing Pages</h1>

      {/* Input field for search text */}
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)} // Update state on change
        placeholder="Search by heading..."
        style={{ padding: "8px", marginBottom: "20px", width: "100%" }}
      />

      {/* Display results */}
      <div>
        {landingPages.length > 0 ? (
          landingPages.map((page, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              <h3>{page?.blocks[0]?.card?.heading}</h3>
              <p>{page?.blocks[0]?.card?.description}</p>
              <img
                src={page?.blocks[0]?.card?.image?.url}
                alt={page?.blocks[0]?.card?.heading}
                style={{ width: "100px" }}
              />
            </div>
          ))
        ) : (
          <div>No results found for "{searchText}"</div>
        )}
      </div>
    </div>
  );
}

export default Page;

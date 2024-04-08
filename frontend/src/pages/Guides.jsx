import React, { useState, useEffect, Suspense } from "react";
import CommonSection from "../shared/CommonSection";

import "../styles/tour.css";
import GuideCard from "../shared/GuideCard";
import Newsletter from "./../shared/Newsletter";
import { Col, Container, Row } from "reactstrap";
import { Spinner } from "@chakra-ui/react";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

const Guides = () => {
  const [guides, setGuides] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  useEffect(() => {
    fetch(`${BASE_URL}/guides?limit=30`)
      .then((res) => res.json())
      .then((data) => {
        setGuides(data);
      }).catch(err => console.log(err));
  },[]);
  return (
    <>
      <CommonSection title={"All Guides"} />
      <section className="pt-0">
        <Container>
          {guides.length > 0 ? (
            <Row>
              {guides.map((guide) => (
                <Col md={4} key={guide._id}>
                  <Suspense
                    fallback={
                      <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="blue.500"
                        size="xl"
                      />
                    }
                  >
                    <GuideCard guide={guide} />
                  </Suspense>
                  <Col lg="12">
                    <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                      {[...Array(pageCount).keys()].map((number) => (
                        <span
                          key={number}
                          onClick={() => setPage(number)}
                          className={page === number ? "active__page" : ""}
                        >
                          {number + 1}
                        </span>
                      ))}
                    </div>
                  </Col>
                </Col>
              ))}
            </Row>
          ) : (
            <h1>No Guides Found</h1>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Guides;

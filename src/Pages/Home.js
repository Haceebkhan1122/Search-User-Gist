import React, { useState, useEffect, useCallback } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";
import GistCard from "../Components/gistCard/GistCard";

const Home = () => {
  const [myData, setMyData] = useState([]);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const getEvents = useCallback(async (value, page) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${value}/gists`,
        { params: { per_page: 5, page } }
      );
      setLoading(false);
      setMyData(data);
    } catch (error) {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setMyData([]);

    const id = setTimeout(() => {
      if (value) {
        getEvents(value, page);
      } else {
        setLoading(false);
      }
    }, 500);

    return () => {
      clearTimeout(id);
    };
  }, [value, page, getEvents]);

  const handleChange = async (e) => {
    e.preventDefault();

    setLoading(true);
    setValue(e.target.value);
  };

  const handlePrev = () => {
    setPage((page) => {
      if (page === 1) {
        return page;
      }
      setLoading(true);
      return page - 1;
    });
  };

  const handleNext = () => {
    setLoading(true);
    setPage((page) => {
      return page + 1;
    });
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={6} className="m-auto mt-5">
            <div className="my_form_content mb-5">
              <h1>Search User Gists</h1>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="Search..."
                    value={value}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Form>

              <div className="Loading">
                <h2>{loading ? "Loading..." : null}</h2>
                {!myData.length && !loading && value && <h2>No gists found</h2>}
              </div>

              <div className="my_list">
                <ul>
                  {myData.map((data) => (
                    <li key={data.id}>
                      <GistCard data={data} />
                    </li>
                  ))}
                </ul>
              </div>

              {value && (myData.length || page > 1) && (
                <div className="my_buttons d-flex align-items-center justify-content-end">
                  <Button
                    disabled={page === 1}
                    variant="primary"
                    className="mx-2"
                    onClick={handlePrev}
                  >
                    Prev
                  </Button>
                  <Button
                    disabled={page !== 1 && !myData.length}
                    variant="primary"
                    onClick={handleNext}
                  >
                    Next
                  </Button>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;

import Header from "../Components/Header";
import Sections from "../Components/Sections";
import News from "../Components/News";
import Summary from "../Components/Summary";
import Forecast from "../Components/Forecast";
import Culture from "../Components/Culture";
import Opinion from "../Components/Opinion";

import axios from "axios";
import { store } from "../store";
import { useQueries } from "react-query";

import { useQueryContext } from "../QueryContext";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const sections = [
    "World",
    "Business",
    "Health",
    "Sports",
    "Opinion",
    "Culture",
  ];

  const secondNews = [true, false, true, false];

  const { setQueries } = useQueryContext();

  const queries = useQueries(
    sections.map((section) => ({
      queryKey: section,
      queryFn: async () => {
        const response = await axios.get(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("${section}")&sort=newest&api-key=CQ0Wb4S5hnBB6DIjuCEEXwDgWS7YZaO0`
        );
        const data = response.data.response.docs;

        setQueries((prevQueries) => ({
          ...prevQueries,
          [section]: data,
        }));

        return data;
      },
    }))
  );

  return (
    <>
      <Header light={store} articles={queries} />
      <Sections articles={queries} />
      <div className="newsMain">
        <section className="sectionLeft">
          {queries.slice(0, 4).map((section, index) => {
            const sectionData = section.data;

            if (!sectionData) {
              return null;
            }

            return (
              <News
                key={index}
                news={{
                  section: section,
                  secondNews: secondNews[index],
                  call: queries[index].data,
                }}
              />
            );
          })}

          <Forecast />

          <div className="lineDiv"></div>

          <section>
            <h5 className="newsSummary">Culture</h5>
            {queries[5].data ? (
              <Row>
                {queries[5].data.slice(0, 4).map((section) => (
                  <Col key={section.web_url} xs={6} sm={6} md={3} lg={3} xl={3}>
                    <Culture call={section}></Culture>
                  </Col>
                ))}
              </Row>
            ) : (
              <div></div>
            )}
          </section>
        </section>
        <div className="lineVert"></div>

        <div className="line"></div>

        <section className="OpinionSection">
          <h5 className="newsSummary">Opinion</h5>

          <div>
            {queries[4].data ? (
              <Row>
                {queries[4].data.slice(0, 4).map((section, index) => (
                  <Col key={index} xs={6} sm={6} md={6} lg={6} xl={6}>
                    <Opinion call={section} />
                  </Col>
                ))}
              </Row>
            ) : (
              <div></div>
            )}
          </div>
        </section>
      </div>

      <div>
        <div className="lineDiv"></div>
        <div className="lineDiv"></div>
      </div>

      <h5 className="newsSummary">NEWS</h5>
      <section>
        <Row>
          {queries.map((section, index) => {
            const sectionData = section.data;
            if (!sectionData) return null;

            return (
              <Col key={index} xs={6} sm={4} md={3} lg={3} xl={3}>
                <Summary call={section.data} />
              </Col>
            );
          })}
        </Row>
      </section>

      <footer>
        <div className="lineDiv"></div>
        <p className="footer">2023 The New York Times Company</p>
      </footer>
    </>
  );
}

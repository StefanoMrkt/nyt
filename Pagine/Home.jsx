import Header from "../Componenti/Header";
import Sections from "../Componenti/Sections";
import News from "../Componenti/News";
import Summary from "../Componenti/Summary";
import Forecast from "../Componenti/Forecast";
import Culture from "../Componenti/Culture";
import Opinion from "../Componenti/Opinion";

import axios from "axios";
import { store } from "../store";
import { useQueries } from "react-query";

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

  const secondNews = [true, false, false, false];

  const queries = useQueries(
    sections.map((section) => ({
      queryKey: section,
      queryFn: async () => {
        const response = await axios.get(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("${section}")&sort=newest&api-key=CQ0Wb4S5hnBB6DIjuCEEXwDgWS7YZaO0`
        );
        return response.data.response.docs;
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
          {queries.map((section, index) => (
            <Col key={index} xs={6} sm={4} md={3} lg={3} xl={3}>
              <Summary call={section.data} />
            </Col>
          ))}
        </Row>
      </section>

      <footer>
        <div className="lineDiv"></div>
        <p className="footer">2023 The New York Times Company</p>
      </footer>
    </>
  );
}

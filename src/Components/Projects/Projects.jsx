import "./Projects.scss";
import { Card } from "antd";

export const Projects = () => {
  const { Meta } = Card;
  return (
    <section id="Projects">
      <h2>Projects</h2>
      <p>Here are some recent projects I have worked on</p>
      <div id="grid">
        <Card
        id="Gazetteer"
          hoverable
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
        >
          <Meta
            title="Gazetteer"
            description="Gazetteer is a mobile first app that provides live country information, weather and exchange rates. It uses technology including; ajax, leaflet.js, multiple api's."
          />
        </Card>
        <Card
        id="CompanyDirectory"
          hoverable
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
        >
          <Meta
            title="Company Directory"
            description="Company directory is a database interface with CRUD operations. It is a desktop website that can also run on a mobile, allowing the maintenance of a company personnel database to see who’s who, which department they are in and where they are located."
          />
        </Card>
      </div>
    </section>
  );
};

import "./Projects";
import { Card } from "antd";

export const Projects = () => {
  const { Meta } = Card;
  return (
    <section id="Projects">
      <h2>Projects</h2>
      <p>Here are some recent projects I have worked on</p>
      <Card
        hoverable
        style={{ 'width': '240px' }}
        // cover={
        //   <img
        //     alt="example"
        //     src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        //   />
        // }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </section>
  );
};

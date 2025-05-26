import Content from "./Content";
import Title from "./Title";

const Section = (props) => {
  return (
    <section>
      <Title title={props.sectionTitle} />
      <Content content={props.sectionContent} />
    </section>
  );
};

export default Section;

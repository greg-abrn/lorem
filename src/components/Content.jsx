import Description from "./Description";
import Title from "./Title";

const Content = (props) => {
  return (
    <section>
      <Title title={props.name} />
      <Description description={props.text} />
    </section>
  );
};

export default Content;

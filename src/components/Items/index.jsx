import Item from "../Item";
import content from "../../utils/content"
const Items = () => {
  return (
    <>
      <section className="container px-4 sm:px-0 mx-auto overflow-hidden">
        <h1 className="text-xl">Headphones For You!</h1>
        <div className="flex flex-wrap">
          {content.map((item) => (
            <Item key={item.key} {...item} index={item.key}/>
          ))}
        </div>
      </section>
    </>
  );
};

export default Items;

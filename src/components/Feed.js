import Videos from "./Videos";

function Feed(props) {
  return (
    <>
      <Videos items={props.items} />
    </>
  );
}

export default Feed;

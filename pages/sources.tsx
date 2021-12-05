import Navbar from "../components/navbar";

const Sources = () => {
  return (
    <>
      <Navbar />
      <embed
        src="workscited.pdf"
        style={{
          width: "100%",
          height: "calc(100vh - 4rem)",
        }}
      />
    </>
  );
};

export default Sources;

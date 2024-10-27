import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <p
        style={{
          fontSize: "18px",
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: "40px",
          marginLeft: "-50px",
          textAlign: "center",
        }}
      >
        Loading {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;

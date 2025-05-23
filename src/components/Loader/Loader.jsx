import { BarLoader, PulseLoader } from "react-spinners";
import ClipLoader from "react-spinners/ClipLoader";


const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Loader = ({color, loading}) => {
    return (
    <div>
      <PulseLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={16}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
export default Loader;

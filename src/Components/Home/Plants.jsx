import Card from "./Card";
import Container from "../Shared/Container";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../Shared/LoadingSpinner";
const Plants = () => {
  const { data: plants, isLoading } = useQuery({
    queryKey: ["plants"],
    queryFn: async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/plants`);
      return data;
    },
  });
  if (isLoading) return <LoadingSpinner />;
  return (
    <Container>
      <div className="mb-10">
        {plants && plants.length > 0 ? (
          // sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6
          <div className="pt-12 grid grid-cols-1  md:grid-cols-4  gap-8">
            {plants.map((plant) => (
              <Card key={plant._id} plant={plant} />
            ))}
          </div>
        ) : (
          <p>No Data Available</p>
        )}
      </div>
    </Container>
  );
};

export default Plants;

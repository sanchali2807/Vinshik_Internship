import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import Container from "./Container";


function App() {
   const products = [
    {
      id: 1,
      title: "Dolomites in Motion",
      description: "Ride through dramatic peaks and charming alpine villages in Italy’s iconic Dolomites.",
      location: "Dolomites, Italy",
      level: "Intermediate",
      duration: "8 days / 7 nights",
      price: "$400 – $600",
      image: "https://via.placeholder.com/500x300",
    },
    {
      id: 2,
      title: "Alpine Odyssey",
      description: "Challenge yourself on scenic Swiss Alpine routes with breathtaking mountain views.",
      location: "The Alps, Switzerland",
      level: "Novice",
      duration: "12 days / 11 nights",
      price: "$800 – $999",
      image: "https://via.placeholder.com/500x300",
    },
    {
      id: 3,
      title: "Fjord Horizons",
      description: "Explore deep fjords and stunning coastal landscapes on two wheels.",
      location: "Norwegian Fjords, Norway",
      level: "Intermediate",
      duration: "7 days / 6 nights",
      price: "$300 – $400",
      image: "https://via.placeholder.com/500x300",
    },
  ];
  return(
    <>
    <Container>
    {products.map(product => <Card key={product.id} product = {product}/>

    )}

    </Container>
    {/* <Header/> */}
    {/* <Footer/> */}
    </>
  );
}

export default App

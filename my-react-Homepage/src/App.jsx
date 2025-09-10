import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import Container from "./Container";
import img1 from "./assets/image.png";
import img2 from "./assets/image2.png";
import img3 from "./assets/image3.png";


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
      image: img1,
    },
    {
      id: 2,
      title: "Alpine Odyssey",
      description: "Challenge yourself on scenic Swiss Alpine routes with breathtaking mountain views.",
      location: "The Alps, Switzerland",
      level: "Novice",
      duration: "12 days / 11 nights",
      price: "$800 – $999",
      image: img2,
    },
    {
      id: 3,
      title: "Fjord Horizons",
      description: "Explore deep fjords and stunning coastal landscapes on two wheels.",
      location: "Norwegian Fjords, Norway",
      level: "Intermediate",
      duration: "7 days / 6 nights",
      price: "$300 – $400",
      image: img3,
    },
  ];
  return(
    <>
    <Container>
    {products.map(product => <Card key={product.id} product = {product}/>

    )}

    </Container>
    {/* <Header/> */}
    <Footer/>
    </>
  );
}

export default App

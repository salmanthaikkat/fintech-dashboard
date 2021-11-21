import NavigationBar from "./components/navigation-bar";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-container__navigation">
        <NavigationBar />
      </div>
      <div className="homepage-container__main">
        This is homepage
      </div>
    </div>
  )
}

export default Homepage;
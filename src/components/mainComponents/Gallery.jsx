import EventSliderContainer from "../subComponents/EventSliderContainer";
import PhotoGallery from "../subComponents/PhotoGallery";
function Gallery() {
  return (
    <div className="dark:bg-[radial-gradient(circle_at_center,#fff_1%,#ffedde_10%,#ffd4b3_40%)] px-3 justify-center">
      {/* <h1 className="lg:text-5xl sm:text-5xl text-4xl text-center font-bold text-textColor1 my-8">
        Glimpses
      </h1>
      <div className="h-1 bg-textColor1 lg:mx-20 mx-8 md:mx-4 sm:mx-8 mb-16  "></div>
      <EventSliderContainer />
      <div className="h-1 bg-textColor1 lg:mx-20 mx-8 md:mx-4 sm:mx-8 mt-16  "></div> */}

      <h1 className="md:text-5xl text-4xl text-center font-bold text-textColor1 mt-16 mb-5">
        Glimpses of Our Events
      </h1>
      <PhotoGallery />
    </div>
  );
}

export default Gallery;

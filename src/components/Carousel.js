import React from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const items = [
  {
    src: "http://www.lotustalk.com/forums/attachments/f105/371369d1396562564-nice-start-car-season-mini-lukas5.jpg",
    altText: "Slide 1",
    caption: "Exclusive Rentals"
  },
  {
    src: "http://www.lotustalk.com/forums/attachments/f105/371361d1396562564-nice-start-car-season-mini-lukas4.jpg",
    altText: "Slide 2",
    caption: "Variety of Exotics"
  },
  {
    src: "https://2p2bboli8d61fqhjiqzb8p1a-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/njmp-garages-1.jpg",
    altText: "Slide 3",
    caption: "Unique Garage"
  },
  {
    src: "https://vegasmagazine.com/get/files/image/galleries/lambo-adrian-unsplash.jpg",
    altText: "Slide 4",
    caption: "Best Cars"
  }
];




export default function App() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText="Exotic Rental Club"
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div className="container-fluid"> 
    <Carousel className="tron" activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
    </div>
  );
}
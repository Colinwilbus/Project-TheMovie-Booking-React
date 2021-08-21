function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <i className="fa fa-angle-right"></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <i className="fa fa-angle-left"></i>
    </div>
  );
}
export const settingCarousel = {
  arrows: false,
  fade: true,
};

export const settingsSliderNav = {
  slidesToShow: 6,
  slidesToScroll: 1,
  swipeToSlide: true,
  dots: false,
  arrows: true,
  infinite: false,
  focusOnSelect: true,
  centerMode: false,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        arrows: false,
      },
    },

    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        arrows: false,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        arrows: true,
      },
    },
  ],
};

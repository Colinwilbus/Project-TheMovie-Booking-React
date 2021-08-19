import React from "react";
import "./CarouselStyle.scss";
import scrollArrow from "../../../assets/img/scroll-arrow.svg";
import cr1 from "../../../assets/img/cr-1.jpg";
import cr2 from "../../../assets/img/cr-2.jpg";
import cr3 from "../../../assets/img/cr-3.jpg";
import cr4 from "../../../assets/img/cr-4.jpg";

export default function CarouselComponent() {
  return (
    <section className="myCarousel">
      <div className="myCarousel__content ">
        <div
          id="carouselMovie"
          className="carousel slide carousel-fade "
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselMovie"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselMovie" data-slide-to={1} />
            <li data-target="#carouselMovie" data-slide-to={2} />
            <li data-target="#carouselMovie" data-slide-to={3} />
          </ol>
          <div className="carousel-inner">
            <img src={scrollArrow} alt className="carousel__arrow" />
            <div className="carousel-item active">
              <img src={cr1} className="d-block w-100" alt="..." />
              <div className="carousel__overlay">
                <div className="carousel-caption  d-md-block ">
                  <p>ACTION, ADVENTURE, FANTASY</p>
                  <h5>End of the World: Part II</h5>
                  <p>
                    Claritas est etiam processus dynamicus, qui sequitur
                    mutationem consuetudium lectorum. Mirum est notare quam
                    littera gothica, quam nunc putamu.
                  </p>
                  <span className="carousel__span">PG</span>
                  <button>
                    <span>
                      <i className="fa fa-play" />
                      PLAY TRAILER
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={cr2} className="d-block w-100" alt="..." />
              <div className="carousel__overlay">
                <div className="carousel-caption  d-md-block ">
                  <p>ACTION, ADVENTURE, FANTASY</p>
                  <h5>End of the World: Part II</h5>
                  <p>
                    Claritas est etiam processus dynamicus, qui sequitur
                    mutationem consuetudium lectorum. Mirum est notare quam
                    littera gothica, quam nunc putamu.
                  </p>
                  <span className="carousel__span">PG</span>
                  <button>
                    <span>
                      <i className="fa fa-play" />
                      PLAY TRAILER
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={cr3} className="d-block w-100" alt="..." />
              <div className="carousel__overlay">
                <div className="carousel-caption  d-md-block ">
                  <p>ACTION, ADVENTURE, FANTASY</p>
                  <h5>End of the World: Part II</h5>
                  <p>
                    Claritas est etiam processus dynamicus, qui sequitur
                    mutationem consuetudium lectorum. Mirum est notare quam
                    littera gothica, quam nunc putamu.
                  </p>
                  <span className="carousel__span">PG</span>
                  <button>
                    <span>
                      <i className="fa fa-play" />
                      PLAY TRAILER
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={cr4} className="d-block w-100" alt="..." />
              <div className="carousel__overlay">
                <div className="carousel-caption   ">
                  <p>ACTION, ADVENTURE, FANTASY</p>
                  <h5>End of the World: Part II</h5>
                  <p>
                    Claritas est etiam processus dynamicus, qui sequitur
                    mutationem consuetudium lectorum. Mirum est notare quam
                    littera gothica, quam nunc putamu.
                  </p>
                  <span className="carousel__span">PG</span>
                  <button>
                    <span>
                      <i className="fa fa-play" />
                      PLAY TRAILER
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

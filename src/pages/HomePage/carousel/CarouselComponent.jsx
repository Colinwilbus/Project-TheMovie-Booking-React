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
      <div
        className="myCarousel__content "
        data-aos="zoom-out"
        data-aos-once="true"
      >
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
                  <h5>Sons of Anarchy</h5>
                  <p>
                    Sons of Anarchy là một bộ phim truyền hình tội phạm hành
                    động của Mỹ do Kurt Sutter tạo ra, được phát sóng từ năm
                    2008 đến năm 2014. Phim kể về cuộc sống của một câu lạc bộ
                    mô tô ...
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
                  <h5>John Wick</h5>
                  <p>
                    John Wick là một loạt tác phẩm giả tưởng thuộc thể loại hành
                    động giật gân của Mỹ, được tạo ra bởi Derek Kolstad và thuộc
                    sở hữu của Summit Entertainment...
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
                  <h5>Ghost Rider II</h5>
                  <p>
                    Ghost Rider là một bộ phim hành động - kinh dị của Mỹ phát
                    hành năm 2007, dựa trên nhân vật văn học trong tác phẩm hoạt
                    hình ăn khách Ghost Rider của hãng Marvel Comics...
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
                  <h5>Hobb and Shaw</h5>
                  <p>
                    Câu chuyện giữa hai người tưởng như không đội trời chung là
                    Đặc vụ An ninh Ngoại giao Mỹ Luke Hobbs và tên tội phạm đánh
                    thuê khét tiếng Deckard Shaw ...
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

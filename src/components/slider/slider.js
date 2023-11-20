import React from 'react'
import "./slider.css"

const Colors = ["#0088FE", "#00C49F", "#FFBB28", "#FFFF00", "#FF0000"];
const Texts = ["Music", "Life", "Tech", "Sport", "Politics"];
const delay = 1500;

export default function Slideshow() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);
    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }
    
      React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === Colors.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {
          resetTimeout();
        };
      }, [index]);
    
      return (
        <div className="slideshow">
          <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {Colors.map((backgroundColor, index) => (
              <div
                className="slide"
                key={index}
                style={{ backgroundColor }}
              >
                <div className="slideProps">
                <h1 className='slideDes'>{Texts[index]}</h1>
                <i className="icons fa-solid fa-volleyball"></i>

                </div>
              </div>
            ))}
          </div>
    
          <div className="slideshowDots">
            {Colors.map((_, idx) => (
              <div
                key={idx}
                className={`slideshowDot${index === idx ? " active" : ""}`}
                onClick={() => {
                  setIndex(idx);
                }}
              ></div>
            ))}
          </div>
        </div>
      );
    }

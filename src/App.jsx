import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const cursorRef = useRef();

  useEffect(() => {
    const moveCursor = (event) => {
      gsap.to(cursorRef.current, {
        x: Math.round(event.clientX),
        y: Math.round(event.clientY),
        duration: 0.15,
        ease: "power2.out",
      });
    };
    document.body.addEventListener("mousemove", moveCursor);

    let tl = gsap.timeline();

    tl.to("nav h1, nav h4, nav button", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay: 0.5,
      stagger: 0.15,
    });

    tl.to(".center-part1 h1", {
      x: 0,
      opacity: 1,
      duration: 0.5,
    });

    tl.to(".center-part1 p", {
      x: 0,
      opacity: 1,
      duration: 0.4,
    });

    tl.to(".center-part1 button", {
      opacity: 1,
      duration: 0.4,
    });

    tl.to(
      ".center-part2 img",
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
      },
      "-=0.5",
    );

    tl.to(".section1bottom img", {
      opacity: 1,
      y: 0,
      stagger: 0.15,
      duration: 0.6,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".section2",
          start: "top 50%",
          end: "top 0%",
          scrub: 2,
        },
      })
      .to(".services", { opacity: 1, y: 0, duration: 0.5 })
      .to(".elem.line1.left", { x: 0, opacity: 1, duration: 1 }, "anim2")
      .to(".elem.line1.right", { x: 0, opacity: 1, duration: 1 }, "anim2")
      .to(".elem.line2.left", { x: 0, opacity: 1, duration: 1 }, "anim")
      .to(".elem.line2.right", { x: 0, opacity: 1, duration: 1 }, "anim");

    return () => {
      document.body.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef}></div>

      <section className="section1">
        <nav>
          <h1>WizardZ</h1>
          <div className="part2">
            <h4>About Us</h4>
            <h4>Services</h4>
            <h4>Use Cases</h4>
            <h4>Pricing</h4>
            <h4>Blog</h4>
            <button>Request a quote</button>
          </div>
        </nav>

        <div className="center">
          <div className="center-part1">
            <h1>Navigating the digital landscape for success</h1>
            <p>
              Our digital marketing agency helps businesses grow and succeed
              online through SEO, PPC, social media marketing, and content
              creation.
            </p>
            <button>Book a consultation</button>
          </div>

          <div className="center-part2">
            <img src="/heroimg.png" alt="Wizard" />
          </div>
        </div>

        <div className="section1bottom">
          <img src="/amazon.jpeg" alt="Amazon" />
          <img src="/Dribbble-Logo.jpg" alt="Dribbble" />
          <img src="/hubspot.jpeg" alt="Hubspot" />
          <img src="/notion.png" alt="Notion" />
          <img src="/netflex.png" alt="Netflix" />
          <img src="/zoom-4.svg" alt="Zoom" />
        </div>
      </section>

      <section className="section2">
        <div className="services">
          <h3>Services</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            vitae fugit deleniti.
          </p>
        </div>

        <div className="container">
          <div className="elem line1 left">
            <div className="elem-part1">
              <h2>Search Engine Optimization</h2>
              <h4>Learn more</h4>
            </div>
            <div className="elem-part2">
              <img src="/seo.avif" alt="SEO" />
            </div>
          </div>

          <div className="elem black line1 right">
            <div className="elem-part1 color">
              <h2>Pay per Click Advertisement</h2>
              <h4>Learn more</h4>
            </div>
            <div className="elem-part2">
              <img src="/seo.avif" alt="PPC" />
            </div>
          </div>

          <div className="elem black line2 left">
            <div className="elem-part1 color">
              <h2>Social Media Marketing</h2>
              <h4>Learn more</h4>
            </div>
            <div className="elem-part2">
              <img src="/seo.avif" alt="Social Media" />
            </div>
          </div>

          <div className="elem line2 right">
            <div className="elem-part1">
              <h2>E-mail Marketing</h2>
              <h4>Learn more</h4>
            </div>
            <div className="elem-part2">
              <img src="/seo.avif" alt="Email Marketing" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

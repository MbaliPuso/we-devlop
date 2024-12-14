import AnimatedText from "@/components/common/AnimatedText";
import Footer6 from "@/components/footers/Footer6";
import Header6 from "@/components/headers/Header6";
import RelatedProjects5 from "@/components/portfolio/relatedProjects/RelatedProjects5";
import Link from "next/link";
import { fancyMultipage } from "@/data/menu";
import Image from "next/image";
import { allPortfolios } from "@/data/portfolio";
export const metadata = {
  title: "Portfolio Details",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function FancyPortfolioSinglePage({ params }) {
  const portfolioItem =
    allPortfolios.filter((elm) => elm.id == params.id)[0] || allPortfolios[0];
  return (
    <>
      <div className="theme-fancy">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar wch-unset">
            <Header6 links={fancyMultipage} />
          </nav>
          <main id="main">
            <section className="page-section bg-gradient-gray-light-1 bg-scroll overflow-hidden">
              {/* <!-- Background Shape --> */}
              <div className="bg-shape-1 wow fadeIn">
                <Image
                  width="1443"
                  height="844"
                  src="/assets/images/demo-fancy/bg-shape-1.svg"
                  alt=""
                />
              </div>
              {/* <!-- End Background Shape --> */}

              <div className="container position-relative pt-10 pt-sm-40 text-center">
                <div className="row">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                    <h1 className="hs-title-10 mb-10">
                      <span className="wow charsAnimIn" data-splitting="chars">
                        <AnimatedText
                          text={portfolioItem.title
                            .split(" ")
                            .slice(0, 1)
                            .join(" ")}
                        />
                        <span className="mark-decoration-3-wrap">
                          <AnimatedText
                            text={portfolioItem.title
                              .split(" ")
                              .slice(1)
                              .join(" ")}
                          />
                          <b
                            className="mark-decoration-3 wow scalexIn"
                            data-wow-delay="0.5s"
                          ></b>
                        </span>
                      </span>
                    </h1>

                    <p
                      className="section-descr mb-0 wow fadeIn"
                      data-wow-delay="0.2s"
                    >
                      UI/UX Design, Development
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <>
              {/* Section */}
              <section className="page-section">
                <div className="container position-relative">
                  <div className="row">
                    {/* Project Details */}
                    <div className="col-lg-4 mb-md-40 wow fadeInUp">
                      <div className="block-sticky">
                        <h2 className="h3 mb-20">Project Details</h2>
                        <hr className="mb-20" />
                        <div className="row text-gray small">
                          <div className="col-sm-4">
                            <b>Date:</b>
                          </div>
                          <div className="col-sm-8">October 21st, 2024</div>
                        </div>
                        <hr className="mb-20" />
                        <div className="row text-gray small">
                          <div className="col-sm-4">
                            <b>Client:</b>
                          </div>
                          <div className="col-sm-8">Suzuki Jimny Crew</div>
                        </div>
                        <hr className="mb-20" />
                        <div className="row text-gray small">
                          <div className="col-sm-4">
                            <b>Services:</b>
                          </div>
                          <div className="col-sm-8">
                            Front-end Development, Back-end Development, UI/UX
                            Design
                          </div>
                        </div>
                        <hr className="mb-20" />
                        <div className="row text-gray small">
                          <div className="col-sm-4">
                            <b>Tech Stack:</b>
                          </div>
                          <div className="col-sm-8">
                            ReactJs Frontend Framework, PHP Backend Framework, MySQL database
                          </div>
                        </div>
                        <hr className="mb-20" />
                        <div className="text-gray small">
                          <div>
                            <b>Description:</b>
                          </div>
                          <div>
                            <ul>
                              <li>
                                The Jimny Crew website provides a seamless and
                                user-friendly experience, allowing users to
                                register and log in to access personalized
                                features.
                              </li>
                              <li>
                                Once logged in, users can update their profiles,
                                ensuring their details are always up to date.
                                The site makes it easy to explore and save
                                events for future reference, book events with a
                                straightforward process, and receive booking
                                confirmation emails, which are sent to both the
                                user and the admin for transparency.
                              </li>
                              <li>
                                In case plans change, users can conveniently
                                cancel their bookings directly through the
                                platform.
                              </li>
                              <li>
                                For added security and convenience, the website
                                also includes a forgot password feature,
                                enabling users to quickly reset their passwords
                                and regain access.
                              </li>
                            </ul>
                            Every aspect of the platform is designed to
                              simplify event management and enhance user
                              engagement.
                          </div>
                        </div>
                        <hr className="mb-20" />
                      </div>
                    </div>
                    {/* End Project Details */}
                    <div className="col-lg-8">
                      <div className="mb-n30">
                        {/* Photo Item */}
                        <div className="mb-30 wow fadeInUp">
                          <Image
                            src="/assets/images/demo-fancy/portfolio/project-3-large.png"
                            className="round"
                            loading="lazy"
                            width={1200}
                            height={800}
                            alt="Image Description"
                          />
                        </div>
                        {/* End Photo Item */}
                        {/* Photo Item */}
                        <div className="mb-30 wow fadeInUp">
                          <Image
                            src="/assets/images/demo-fancy/portfolio/project-5-large.png"
                            className="round"
                            loading="lazy"
                            width={1200}
                            height={800}
                            alt="Image Description"
                          />
                        </div>
                        {/* End Photo Item */}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* End Section */}
              {/* Divider */}
              <hr className="mt-0 mb-0" />
            </>
            <section className="page-section">
              <RelatedProjects5 />
            </section>
            <>
              {/* Divider */}
              <hr className="mt-0 mb-0" />
              {/* End Divider */}
              {/* Work Navigation */}
              <div className="work-navigation clearfix">
                <Link href={`/main-portfolio-single-3/1`} className="work-prev">
                  <span>
                    <i className="mi-arrow-left size-24 align-middle color-primary-1" />
                    Previous
                  </span>
                </Link>
                <a href="#" className="work-all">
                  <span>
                    <i className="mi-close size-24 align-middle color-primary-1" />{" "}
                    All works
                  </span>
                </a>
                <Link href={`/main-portfolio-single-2/1`} className="work-next">
                  <span>
                    Next
                    <i className="mi-arrow-right size-24 align-middle color-primary-1" />
                  </span>
                </Link>
              </div>
              {/* End Work Navigation */}
            </>
          </main>
          <footer className="page-section footer bg-dark-1 light-content pb-30">
            <Footer6 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}

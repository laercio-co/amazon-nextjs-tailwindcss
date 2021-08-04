// import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

// import bannerImg1 from '../assets/images/0504-AMZN-GNBC-GatewayHero-1500x600_v5._CB669739807_.jpg';
// import bannerImg2 from '../assets/images/UGRR_S1_GWBleedingHero_ENG_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB669781769_.jpg';
// import bannerImg3 from '../assets/images/UK-EN_030821_SpringSitewide_ACQ_GW_Hero_D_1500x600_CV69._CB656397523_.jpg';

function Banner() {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          {/* <Image src={bannerImg1} /> */}
          <img loading="lazy" src="https://links.papareact.com/gi1" alt="" />
        </div>

        <div>
          {/* <Image src={bannerImg2} /> */}
          <img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
        </div>

        <div>
          {/* <Image src={bannerImg3} /> */}
          <img loading="lazy" src="https://links.papareact.com/7ma" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;

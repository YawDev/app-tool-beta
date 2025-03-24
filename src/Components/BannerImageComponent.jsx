import LearnMoreComponent from "./LearnMoreComponent";


function BannerImageComponent() {
    return (
        <div id="bannerWrapper">
            <img id='bannerImg' src='src/assets/ad-revenue.jpg' alt="banner-img" />
            <LearnMoreComponent/>
        </div>
    )
}

export default BannerImageComponent;
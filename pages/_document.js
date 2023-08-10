/* eslint-disable @next/next/next-script-for-ga */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="description" content=" " />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content=" " />
                    <meta property="og:description" content="" />
                    <meta property="og:image" content="#" />
                    <meta property="og:url" content="#" />
                    <meta property="og:site_name" content=" " />
                    {/* <link rel="shortcut icon" href="assets/img/favicon.png" title="Favicon" /> */}
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
                    />


                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Jost%3A0%2C100%3B0%2C200%3B0%2C300%3B0%2C400%3B0%2C500%3B0%2C600%3B0%2C700%3B0%2C800%3B0%2C900%3B1%2C100%3B1%2C200%3B1%2C300%3B1%2C400%3B1%2C500%3B1%2C600%3B1%2C700%3B1%2C800%3B1%2C900%7CCaveat%3A400%3B500%3B600%3B700&amp;display=swap" type="text/css" media="all" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&amp;display=auto" type="text/css" media="all" />

                    <link rel="stylesheet" href="assets/css/vendors/bootstrap.css" type="text/css" media="all" />
                    <link rel="stylesheet" href="assets/fonts/font-awesome/css/font-awesome.css" type="text/css" media="all" />
                    <link rel="stylesheet" href="assets/css/vendors/magnific-popup.css" type="text/css" media="all" />
                    <link rel="stylesheet" href="assets/css/vendors/splitting.css" type="text/css" media="all" />
                    <link rel="stylesheet" href="assets/css/vendors/swiper.css" type="text/css" media="all" />
                    <link rel="stylesheet" href="assets/css/vendors/animate.css" type="text/css" media="all" />
                    <link rel="stylesheet" href="assets/css/style.css" type="text/css" media="all" />
                    <link rel="stylesheet" href="assets/css/dark.css" type="text/css" media="all" />

                    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                    <link rel="icon" href="favicon.ico" type="image/x-icon" />


                </Head>

                <body class="home light-skin">
                    <div class="container-page">

                        <div class="preloader">
                            <div class="centrize full-width">
                                <div class="vertical-center">
                                    <div class="spinner-logo">
                                        <img src="assets/images/logo2.png" alt="Luique - Personal Portfolio HTML" />
                                        <div class="spinner-dot"></div>
                                        <div class="spinner spinner-line"></div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <Main />
                        <NextScript />
                    </div>

                    <div class="bsl-popup" data-theme="luique" data-category="html">
                        <div class="bsl-popup__buttons"></div>
                        <div class="bsl-popup__content bsl-popup__content-related">
                            <div class="bsl-popup__menu"></div>
                            <div class="bsl-popup__tabs">
                                <div class="bsl-popup__tab bsl-popup__tab-demo"></div>
                                <div class="bsl-popup__tab bsl-popup__tab-all"></div>
                                <div class="bsl-popup__tab bsl-popup__tab-related"></div>
                                <div class="bsl-popup__tab bsl-popup__tab-version"></div>
                            </div>
                        </div>
                        <div class="bsl-popup__content bsl-popup__content-help"></div>
                    </div>


                    <div class="cursor"></div>

                    <script src="assets/js/jquery.min.js"></script>
                    <script src="assets/js/jquery.validate.min.js"></script>
                    <script src="assets/js/bootstrap.js"></script>
                    <script src="assets/js/swiper.js"></script>
                    <script src="assets/js/splitting.js"></script>
                    <script src="assets/js/jarallax.min.js"></script>
                    <script src="assets/js/magnific-popup.js"></script>
                    <script src="assets/js/imagesloaded.pkgd.js"></script>
                    <script src="assets/js/isotope.pkgd.js"></script>
                    <script src="assets/js/jquery.scrolla.js"></script>
                    <script src="assets/js/skrollr.js"></script>
                    <script src="assets/js/jquery.cookie.js"></script>
                    <script src="assets/js/typed.js"></script>
                    <script src="assets/js/common.js"></script>


                </body>
            </Html>
        );
    }
}

export default MyDocument;

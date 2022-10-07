import React from "react";
import { Link } from "gatsby";
 
const menu = require('../contents/urls.json');

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        };
    }

    
    componentDidMount() {
        window.addEventListener("scroll", this.toggleHeaderClass);
        this.toggleHeaderClass();
    }
    toggleMenu = function () {
        document.getElementById('menu').classList.toggle('open');
    }
    toggleHeaderClass = () => {
        if (!document.getElementById("header").classList.contains('menu-opened')) {
            if (window.scrollY > 100) {
                document.getElementById("header").classList.add("blur");
            } else {
                document.getElementById("header").classList.remove("blur");
            }
        }
    };
    render() {
        return (
            <header id={'header'} className={this.state.menuOpen ? 'menu-opened blur' : 'blur'}>
                <div className={'header-bg'} />
                <div className={'container'}>
                    <Link to={'/'}>
                        <div className={'logo'}>
                            <svg width="280px" height="100px" viewBox="0 14 141 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.4675 17.5762L3.55992 26.0887L3.10496 25.6098L12.0126 17.0973L12.4795 17.1093L12.4675 17.5762ZM12.0126 17.0973C12.1443 16.9656 12.3598 16.9656 12.4795 17.1093C12.6112 17.241 12.6112 17.4445 12.4675 17.5762L12.0126 17.0973ZM20.6089 26.5796L12.0006 17.5643L12.4795 17.1093L21.0998 26.1127L21.0878 26.5796H20.6089ZM21.0998 26.1127C21.2195 26.2444 21.2195 26.4599 21.0878 26.5796C20.9561 26.7113 20.7406 26.7113 20.6089 26.5796L21.0998 26.1127ZM11.7133 34.6252L20.6209 26.1007L21.0878 26.5796L12.1682 35.1041L11.7013 35.0921L11.7133 34.6252ZM12.1682 35.1041C12.0365 35.2358 11.821 35.2238 11.7013 35.0921C11.5696 34.9604 11.5816 34.7449 11.7133 34.6252L12.1682 35.1041ZM3.57189 25.6218L12.1802 34.6372L11.7013 35.0921L3.09299 26.0887L3.10496 25.6098L3.57189 25.6218ZM3.09299 26.0887C2.96129 25.957 2.97327 25.7415 3.10496 25.6098C3.23666 25.4901 3.4402 25.4901 3.57189 25.6218L3.09299 26.0887Z" fill="black" />
                                <path d="M14.0483 24.2453L13.5694 24.7003L13.1982 24.3291L12.8391 23.958L12.4799 23.6107L12.1207 23.2635L11.7615 22.9283L11.4143 22.6051L11.0671 22.2938L10.708 21.9945L10.3727 21.7071L10.0375 21.4317L9.70225 21.1683L9.36702 20.9169L9.05573 20.6775L8.73247 20.45L8.43316 20.2465L8.13385 20.0549L7.8465 19.8633L7.57113 19.7077L7.29576 19.552L7.04434 19.4203L6.80489 19.3006L6.56544 19.2048L6.34993 19.121L6.1464 19.0492L5.96681 19.0013L5.79919 18.9774L5.64355 18.9534H5.52382L5.41607 18.9654L5.33226 18.9893L5.2724 19.0252L5.22451 19.0612L4.76955 18.5823L4.92519 18.4625L5.10478 18.3668L5.28437 18.3189L5.47593 18.2949H5.67947L5.89497 18.3189L6.11048 18.3548L6.33796 18.4146L6.57741 18.4985L6.81686 18.5942L7.08026 18.702L7.34365 18.8217L7.61902 18.9654L7.90637 19.133L8.19371 19.3006L8.49302 19.4922L8.80431 19.6957L9.1156 19.9112L9.43886 20.1387L9.77409 20.3901L10.1093 20.6415L10.4446 20.9169L10.7918 21.1923L11.139 21.4916L11.4981 21.8029L11.8573 22.1142L12.2165 22.4494L12.5757 22.7846L12.9468 23.1318L13.306 23.491L13.6772 23.8622L14.0483 24.2453ZM19.2803 33.7635L18.8254 33.2846L18.8613 33.2367L18.8972 33.1768L18.9211 33.093L18.9451 32.9973V32.8656L18.9331 32.7219L18.9092 32.5543L18.8733 32.3627L18.8134 32.1592L18.7416 31.9317L18.6458 31.7042L18.55 31.4528L18.4183 31.1894L18.2866 30.914L18.131 30.6267L17.9633 30.3393L17.7837 30.0281L17.5922 29.7168L17.3767 29.3935L17.1612 29.0583L16.9217 28.723L16.6703 28.3758L16.4069 28.0286L16.1435 27.6695L15.8562 27.3103L15.5568 26.9391L15.2456 26.58L14.9343 26.2088L14.611 25.8257L14.2638 25.4545L13.9166 25.0834L13.5694 24.7003L14.0483 24.2453L14.4075 24.6284L14.7547 25.0115L15.1019 25.3947L15.4371 25.7658L15.7604 26.1489L16.0717 26.5201L16.371 26.8912L16.6583 27.2624L16.9457 27.6216L17.2091 27.9807L17.4605 28.3399L17.6999 28.6871L17.9274 29.0224L18.1429 29.3576L18.3465 29.6809L18.538 30.0041L18.7176 30.3154L18.8733 30.6147L19.0169 30.9021L19.1486 31.1774L19.2684 31.4528L19.3641 31.7162L19.4479 31.9676L19.5198 32.2071L19.5677 32.4345L19.5916 32.6501L19.6156 32.8656L19.6036 33.0691L19.5677 33.2607L19.5078 33.4402L19.412 33.6079L19.2803 33.7635ZM10.0135 28.1005L10.4924 27.6335L10.8516 28.0167L11.2108 28.3758L11.57 28.735L11.9292 29.0702L12.2883 29.4055L12.6475 29.7287L12.9947 30.04L13.3419 30.3393L13.6891 30.6387L14.0244 30.914L14.3596 31.1774L14.6828 31.4288L15.0061 31.6563L15.3174 31.8838L15.6167 32.0993L15.916 32.2909L16.2034 32.4705L16.4907 32.6381L16.7541 32.7817L17.0055 32.9134L17.257 33.0332L17.4844 33.1409L17.6999 33.2247L17.9035 33.2846L18.095 33.3325L18.2627 33.3684L18.4063 33.3804H18.538L18.6338 33.3684L18.7176 33.3445L18.7775 33.3205L18.8254 33.2846L19.2803 33.7635L19.1247 33.8832L18.9571 33.967L18.7655 34.0269L18.5739 34.0508H18.3704L18.1669 34.0269L17.9394 33.979L17.7119 33.9191L17.4844 33.8473L17.233 33.7515L16.9816 33.6438L16.7182 33.5121L16.4428 33.3684L16.1555 33.2128L15.8562 33.0332L15.5568 32.8536L15.2575 32.6501L14.9343 32.4345L14.611 32.1951L14.2878 31.9556L13.9525 31.6922L13.6053 31.4288L13.2581 31.1415L12.9109 30.8542L12.5517 30.5429L12.1926 30.2196L11.8334 29.8964L11.4742 29.5611L11.115 29.2019L10.7439 28.8428L10.3727 28.4716L10.0135 28.1005ZM4.76955 18.5823L5.22451 19.0612L5.18859 19.0971L5.16464 19.1569L5.12873 19.2408L5.11675 19.3485L5.10478 19.4682L5.11675 19.6239L5.1407 19.7915L5.18859 19.9711L5.23648 20.1866L5.30832 20.4021L5.4041 20.6415L5.51185 20.893L5.63157 21.1444L5.76327 21.4198L5.91892 21.7071L6.08653 22.0064L6.26612 22.3057L6.46966 22.629L6.67319 22.9523L6.90067 23.2755L7.14012 23.6227L7.37957 23.958L7.64297 24.3171L7.91834 24.6643L8.20568 25.0355L8.49302 25.3947L8.80431 25.7658L9.1156 26.137L9.45083 26.5081L9.78606 26.8793L10.1333 27.2624L10.4924 27.6335L10.0135 28.1005L9.65436 27.7173L9.29519 27.3342L8.94798 26.9511L8.62472 26.568L8.30146 26.1968L7.99017 25.8137L7.67889 25.4426L7.39155 25.0714L7.11618 24.7122L6.85278 24.353L6.58938 24.0058L6.34993 23.6586L6.12245 23.3114L5.90694 22.9762L5.70341 22.6529L5.51185 22.3417L5.34423 22.0304L5.17662 21.7311L5.03295 21.4437L4.90125 21.1564L4.79349 20.893L4.68574 20.6296L4.60193 20.3782L4.54207 20.1387L4.49418 19.9112L4.45826 19.6837L4.44629 19.4802L4.45826 19.2767L4.49418 19.0851L4.55404 18.8936L4.64982 18.7259L4.76955 18.5823Z" fill="black" />
                                <path d="M10.0729 24.1136L10.4561 23.7545L10.8392 23.4073L11.2223 23.0601L11.6054 22.7248L11.9766 22.4016L12.3597 22.0903L12.7308 21.791L13.09 21.5036L13.4612 21.2163L13.8204 20.9529L14.1676 20.7015L14.5148 20.462L14.85 20.2345L15.1852 20.019L15.5085 19.8155L15.8317 19.6239L16.143 19.4443L16.4423 19.2887L16.7297 19.145L17.017 19.0133L17.2804 18.8936L17.5438 18.7978L17.7952 18.714L18.0347 18.6422L18.2622 18.5943L18.4777 18.5703L18.6932 18.5464L18.8967 18.5584L19.0883 18.5943L19.2679 18.6541L19.4475 18.7499L19.5911 18.8816L19.1122 19.3366L19.0643 19.3007L19.0045 19.2647L18.9326 19.2408L18.8249 19.2169H18.7052L18.5495 19.2288L18.3819 19.2528L18.1903 19.2887L17.9868 19.3485L17.7713 19.4204L17.5319 19.5162L17.2804 19.6119L17.017 19.7436L16.7417 19.8753L16.4663 20.031L16.167 20.1986L15.8557 20.3782L15.5444 20.5698L15.2211 20.7853L14.8859 21.0008L14.5507 21.2402L14.2035 21.4916L13.8563 21.755L13.4971 22.0184L13.1379 22.3058L12.7787 22.6051L12.4076 22.9164L12.0364 23.2277L11.6653 23.5509L11.2822 23.8981L10.911 24.2453L10.5279 24.5925L10.0729 24.1136ZM4.4099 33.3924L4.29017 33.2367L4.20637 33.0572L4.1465 32.8776L4.12256 32.686V32.4825L4.1465 32.267L4.18242 32.0515L4.24228 31.824L4.32609 31.5845L4.42187 31.3451L4.52963 31.0817L4.66132 30.8183L4.805 30.5429L4.96064 30.2556L5.12826 29.9682L5.31982 29.6689L5.52335 29.3576L5.73886 29.0463L5.96634 28.7231L6.21776 28.3879L6.46919 28.0526L6.74455 27.7174L7.0319 27.3702L7.31924 27.023L7.63053 26.6638L7.94181 26.3046L8.27705 25.9454L8.61228 25.5863L8.95948 25.2151L9.31866 24.8559L9.68981 24.4848L10.0729 24.1136L10.5279 24.5925L10.1567 24.9637L9.79756 25.3229L9.43839 25.682L9.09118 26.0412L8.75595 26.4004L8.44466 26.7476L8.1214 27.0948L7.82209 27.442L7.53475 27.7892L7.25938 28.1245L6.99598 28.4597L6.74455 28.7949L6.5051 29.1062L6.2896 29.4295L6.07409 29.7288L5.88253 30.0281L5.70294 30.3154L5.53532 30.5908L5.37968 30.8662L5.24798 31.1176L5.12826 31.3571L5.03248 31.5965L4.94867 31.812L4.87683 32.0155L4.82894 32.1951L4.805 32.3628L4.78105 32.5184V32.6381L4.805 32.7459L4.81697 32.8297L4.85289 32.8895L4.8888 32.9374L4.4099 33.3924ZM13.9281 28.1484L13.545 28.5076L13.1619 28.8668L12.7787 29.214L12.3956 29.5372L12.0245 29.8605L11.6413 30.1718L11.2702 30.4831L10.911 30.7704L10.5399 31.0458L10.1807 31.3092L9.83348 31.5726L9.48628 31.812L9.15104 32.0395L8.81581 32.255L8.48058 32.4585L8.16929 32.6501L7.85801 32.8177L7.55869 32.9853L7.27135 33.129L6.98401 33.2607L6.72061 33.3684L6.45721 33.4762L6.20579 33.56L5.96634 33.6199L5.73886 33.6678L5.52335 33.7037L5.30784 33.7157L5.10431 33.7037L4.91275 33.6678L4.72119 33.6079L4.55357 33.5121L4.4099 33.3924L4.8888 32.9374L4.93669 32.9734L4.99656 32.9973L5.06839 33.0332L5.17615 33.0452L5.29587 33.0572L5.45152 33.0452L5.61913 33.0212L5.81069 32.9734L6.01423 32.9255L6.22973 32.8536L6.46919 32.7578L6.72061 32.6501L6.98401 32.5304L7.25938 32.3867L7.53475 32.243L7.83406 32.0754L8.14535 31.8958L8.45663 31.6923L8.77989 31.4888L9.11513 31.2613L9.45036 31.0218L9.79756 30.7824L10.1448 30.519L10.5039 30.2436L10.8631 29.9563L11.2223 29.6689L11.5935 29.3576L11.9646 29.0344L12.3358 28.7111L12.7189 28.3759L13.09 28.0287L13.4731 27.6695L13.9281 28.1484ZM19.5911 18.8816L19.7109 19.0373L19.7947 19.2049L19.8545 19.3964L19.8785 19.588V19.7915L19.8545 19.9951L19.8186 20.2225L19.7588 20.45L19.6749 20.6775L19.5792 20.9289L19.4714 21.1804L19.3397 21.4438L19.196 21.7191L19.0404 22.0065L18.8728 22.3058L18.6812 22.6051L18.4777 22.9044L18.2622 23.2277L18.0227 23.5509L17.7833 23.8742L17.5319 24.2094L17.2565 24.5566L16.9691 24.9038L16.6818 25.251L16.3705 25.6102L16.0592 25.9574L15.724 26.3286L15.3888 26.6877L15.0416 27.0469L14.6824 27.4181L14.3112 27.7892L13.9281 28.1484L13.4731 27.6695L13.8443 27.3103L14.2035 26.9511L14.5627 26.592L14.9099 26.2328L15.2331 25.8736L15.5564 25.5144L15.8796 25.1672L16.179 24.82L16.4663 24.4728L16.7417 24.1376L17.0051 23.8024L17.2565 23.4791L17.4959 23.1558L17.7114 22.8445L17.9269 22.5333L18.1185 22.2459L18.2981 21.9586L18.4657 21.6712L18.6214 21.4078L18.7531 21.1564L18.8728 20.905L18.9686 20.6775L19.0524 20.462L19.1122 20.2585L19.1721 20.0669L19.196 19.8993L19.22 19.7556V19.6239L19.196 19.5281L19.1841 19.4443L19.1482 19.3845L19.1122 19.3366L19.5911 18.8816Z" fill="black" />
                                <path d="M11.9781 27.1279C12.5269 27.1403 12.9818 26.7055 12.9942 26.1567C13.0066 25.6079 12.5718 25.153 12.023 25.1406C11.4742 25.1282 11.0192 25.563 11.0069 26.1118C10.9945 26.6606 11.4293 27.1156 11.9781 27.1279Z" fill="black" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3063 26.0292C11.2944 26.2447 11.3303 26.4004 11.474 26.556C11.6655 26.7595 11.9888 26.7955 12.2522 26.6997C12.4797 26.6159 12.6712 26.4004 12.6832 26.1489C12.6832 25.9693 12.6832 25.8257 12.5754 25.67C12.312 25.2869 11.7134 25.3109 11.438 25.6461C11.3542 25.7538 11.3063 25.8855 11.3063 26.0292Z" fill="black" />
                                <path d="M34.2217 24.9395C34.2217 25.0353 34.1738 25.0951 34.066 25.0951H29.5284C29.4326 25.0951 29.3488 25.1191 29.289 25.1909L28.7263 25.7057C28.7023 25.7416 28.6784 25.7895 28.6784 25.8494V29.2376C28.6784 29.3095 28.7023 29.3693 28.7502 29.4172L29.4326 30.0638C29.4686 30.0997 29.5284 30.1236 29.5883 30.1236H32.7131C32.8209 30.1236 32.8807 30.0518 32.8807 29.9201V27.3579C32.8807 27.2502 32.9406 27.1903 33.0364 27.1903H34.3294C34.4372 27.1903 34.497 27.2502 34.497 27.3579V30.9018C34.497 31.1173 34.3893 31.2131 34.1858 31.2131H28.4629C28.3551 31.2131 28.2713 31.1892 28.1995 31.1293L26.7867 29.8004C26.7268 29.7285 26.6909 29.6567 26.6909 29.5609V25.3106C26.6909 25.2149 26.7268 25.143 26.7867 25.0832L27.8044 24.1134C27.8762 24.0296 27.972 23.9937 28.0678 23.9937H34.066C34.1738 23.9937 34.2217 24.0535 34.2217 24.1613V24.9395Z" fill="black" />
                                <path d="M37.8611 31.0574C37.8611 31.1651 37.8012 31.213 37.6935 31.213H36.4843C36.3885 31.213 36.3286 31.1651 36.3286 31.0574V25.6458C36.3286 25.538 36.3885 25.4782 36.4843 25.4782H37.6935C37.8012 25.4782 37.8611 25.538 37.8611 25.6458V31.0574ZM37.8611 24.7478C37.8611 24.8556 37.8012 24.9035 37.6935 24.9035H36.4843C36.3885 24.9035 36.3286 24.8556 36.3286 24.7478V23.6823C36.3286 23.5625 36.3885 23.5146 36.4843 23.5146H37.6935C37.8012 23.5146 37.8611 23.5625 37.8611 23.6823V24.7478Z" fill="black" />
                                <path d="M41.6804 25.4782H42.9854C43.0811 25.4782 43.141 25.538 43.141 25.6458V26.0409C43.141 26.1366 43.0931 26.1845 42.9854 26.1965L41.6804 26.2803V31.0574C41.6804 31.1651 41.6325 31.213 41.5127 31.213H40.3155C40.2077 31.213 40.1479 31.1651 40.1479 31.0574V26.2803L39.4894 26.1965C39.3936 26.1845 39.3457 26.1366 39.3457 26.0409V25.6458C39.3457 25.538 39.3936 25.4782 39.5133 25.4782H40.1958L40.4113 23.6823C40.4113 23.5625 40.4831 23.5146 40.6148 23.5146H41.5127C41.6325 23.5146 41.6804 23.5625 41.6804 23.6823V25.4782Z" fill="black" />
                                <path d="M50.8398 26.1126C50.8398 26.2323 50.792 26.2802 50.6722 26.2802H46.5297C46.4699 26.2802 46.41 26.3041 46.3621 26.352L46.0748 26.6633C46.0388 26.6992 46.0149 26.7471 46.0149 26.807V27.2979C46.0149 27.3936 46.0388 27.4535 46.0867 27.5014L46.2903 27.7528C46.3621 27.8247 46.422 27.8486 46.4938 27.8486H49.882C50.0377 27.8486 50.1574 27.8965 50.2532 27.9923L50.8279 28.5789C50.8877 28.6388 50.9237 28.7465 50.9237 28.8782V30.1473C50.9237 30.2192 50.8997 30.291 50.8279 30.3509L50.0616 31.1051C49.9778 31.177 49.882 31.2129 49.7623 31.2129H44.662C44.5542 31.2129 44.5063 31.165 44.5063 31.0573V30.5783C44.5063 30.4706 44.5542 30.4107 44.662 30.4107H48.8644C48.9482 30.4107 49.02 30.3868 49.0799 30.3269L49.4151 30.0156C49.451 29.9797 49.463 29.9438 49.463 29.9079V29.3093C49.463 29.2614 49.451 29.2135 49.4151 29.1776L49.0559 28.8663C49.02 28.8304 48.9721 28.8184 48.9123 28.8184H45.512C45.4282 28.8184 45.3564 28.7825 45.2965 28.7226L44.674 28.1C44.6141 28.0402 44.5782 27.9564 44.5782 27.8606V26.5436C44.5782 26.4598 44.6021 26.3879 44.662 26.3401L45.4043 25.5618C45.4642 25.502 45.536 25.478 45.6198 25.478H50.6722C50.792 25.478 50.8398 25.5379 50.8398 25.6456V26.1126Z" fill="black" />
                                <path d="M59.0887 26.3522C59.1485 26.4 59.1845 26.4719 59.1845 26.5677V31.0574C59.1845 31.1651 59.1246 31.213 59.0168 31.213H57.8196C57.6999 31.213 57.652 31.1651 57.652 31.0574V26.9747C57.652 26.9268 57.628 26.8909 57.5921 26.855L57.209 26.4599C57.1731 26.424 57.1252 26.412 57.0773 26.412H54.2398V31.0574C54.2398 31.1651 54.1919 31.213 54.0841 31.213H52.851C52.7432 31.213 52.6953 31.1651 52.6953 31.0574V25.4662C52.6953 25.3465 52.6953 25.2387 52.7073 25.1309C52.7073 25.0232 52.7193 24.9035 52.7312 24.7837L52.8749 23.6463C52.8749 23.5625 52.9348 23.5146 53.0425 23.5146H54.0841C54.1919 23.5146 54.2398 23.5625 54.2398 23.6823V25.4782H58.0351C58.1309 25.4782 58.2266 25.5141 58.3105 25.5739L59.0887 26.3522Z" fill="black" />
                                <path d="M67.2781 26.352C67.338 26.4119 67.3739 26.4837 67.3739 26.5675V30.1354C67.3739 30.2192 67.338 30.291 67.2781 30.3509L66.4879 31.1291C66.4281 31.189 66.3562 31.2129 66.2844 31.2129H61.9982C61.9264 31.2129 61.8545 31.189 61.7827 31.1291L61.0045 30.3509C60.9446 30.291 60.9087 30.2192 60.9087 30.1354V26.5675C60.9087 26.4837 60.9446 26.4119 61.0045 26.352L61.7827 25.5738C61.8545 25.5139 61.9264 25.478 61.9982 25.478H66.2844C66.3562 25.478 66.4281 25.5139 66.4879 25.5738L67.2781 26.352ZM62.968 26.4119C62.9201 26.4119 62.8842 26.4358 62.8483 26.4837L62.513 26.8788C62.4651 26.9267 62.4412 26.9746 62.4412 27.0584V29.5607C62.4412 29.6445 62.4651 29.7043 62.513 29.7403L62.8483 30.1473C62.8842 30.1952 62.9201 30.2192 62.968 30.2192H65.3146C65.3625 30.2192 65.3984 30.1952 65.4343 30.1473L65.7696 29.7403C65.8175 29.7043 65.8294 29.6445 65.8294 29.5607V27.0584C65.8294 26.9746 65.8175 26.9267 65.7696 26.8788L65.4343 26.4837C65.3984 26.4358 65.3625 26.4119 65.3146 26.4119H62.968Z" fill="black" />
                                <path d="M74.9762 26.2802C74.9762 26.3999 74.9164 26.4478 74.8086 26.4478H71.1809C71.1091 26.4478 71.0612 26.4718 71.0253 26.5077L70.6541 26.8668C70.6062 26.9147 70.5943 26.9626 70.5943 27.0225V29.5008C70.5943 29.5607 70.6062 29.6086 70.6302 29.6445L71.145 30.1473C71.1809 30.1952 71.2528 30.2311 71.3366 30.2311H74.7607C74.8685 30.2311 74.9283 30.279 74.9283 30.3868V31.0573C74.9283 31.165 74.8685 31.2129 74.7607 31.2129H70.4027C70.3069 31.2129 70.2351 31.189 70.1872 31.1291L69.1456 30.0755C69.1216 30.0396 69.0977 30.0156 69.0857 29.9797C69.0618 29.9438 69.0498 29.9079 69.0498 29.872V26.5675C69.0498 26.4837 69.0857 26.4119 69.1456 26.352L69.9238 25.5858C69.9956 25.5139 70.0675 25.478 70.1393 25.478H74.8086C74.9164 25.478 74.9762 25.5379 74.9762 25.6456V26.2802Z" fill="black" />
                                <path d="M83.1771 25.8134C83.1771 25.8852 83.1532 25.9571 83.1053 26.0289L81.8601 27.9325L83.3567 30.7341C83.3807 30.782 83.3926 30.8299 83.3926 30.8898V31.0454C83.3926 31.0933 83.3807 31.1412 83.3567 31.1771C83.3328 31.201 83.2849 31.213 83.213 31.213H82.0637C81.944 31.213 81.8601 31.1651 81.8123 31.0693L80.4474 28.5791H78.2325V31.0574C78.2325 31.1651 78.1846 31.213 78.0768 31.213H76.8436C76.7359 31.213 76.688 31.1651 76.688 31.0574V25.4662C76.688 25.3465 76.688 25.2387 76.7 25.1309C76.7 25.0232 76.7119 24.9035 76.7239 24.7837L76.8676 23.6463C76.8676 23.5625 76.9274 23.5146 77.0352 23.5146H78.0768C78.1846 23.5146 78.2325 23.5625 78.2325 23.6823V27.6572H80.4354L81.5728 25.6218C81.6087 25.5739 81.6446 25.526 81.6686 25.5141C81.7045 25.4901 81.7524 25.4782 81.8242 25.4782H82.9856C83.1173 25.4782 83.1771 25.526 83.1771 25.6338V25.8134Z" fill="black" />
                                <path d="M94.4074 24.9395C94.4074 25.0353 94.3595 25.0951 94.2517 25.0951H90.3127C90.2409 25.0951 90.193 25.1071 90.1571 25.155L89.6542 25.6219C89.6064 25.6698 89.5824 25.7177 89.5824 25.7776V27.4178H94.1799C94.2876 27.4178 94.3355 27.4657 94.3355 27.5854V28.3277C94.3355 28.4475 94.2876 28.4953 94.1799 28.4953H89.5824V31.0575C89.5824 31.1652 89.5345 31.2131 89.4148 31.2131H87.7626C87.6548 31.2131 87.6069 31.1652 87.6069 31.0575V25.3106C87.6069 25.2149 87.6309 25.131 87.6907 25.0832L88.6964 24.1134C88.7802 24.0296 88.8641 23.9937 88.9838 23.9937H94.2517C94.3595 23.9937 94.4074 24.0535 94.4074 24.1613V24.9395Z" fill="black" />
                                <path d="M97.5803 31.0574C97.5803 31.1651 97.5205 31.213 97.4127 31.213H96.2035C96.0957 31.213 96.0479 31.1651 96.0479 31.0574V25.6458C96.0479 25.538 96.0957 25.4782 96.2035 25.4782H97.4127C97.5205 25.4782 97.5803 25.538 97.5803 25.6458V31.0574ZM97.5803 24.7478C97.5803 24.8556 97.5205 24.9035 97.4127 24.9035H96.2035C96.0957 24.9035 96.0479 24.8556 96.0479 24.7478V23.6823C96.0479 23.5625 96.0957 23.5146 96.2035 23.5146H97.4127C97.5205 23.5146 97.5803 23.5625 97.5803 23.6823V24.7478Z" fill="black" />
                                <path d="M105.853 26.352C105.913 26.4119 105.949 26.4837 105.949 26.5915V31.0573C105.949 31.165 105.889 31.2129 105.781 31.2129H104.584C104.465 31.2129 104.417 31.165 104.417 31.0573V26.9866C104.417 26.9387 104.393 26.8908 104.357 26.8549L103.974 26.4598C103.938 26.4239 103.89 26.4119 103.842 26.4119H102.285C102.202 26.4119 102.106 26.4239 102.022 26.4358L101.148 26.6633C101.052 26.6753 101.004 26.7471 101.004 26.8429V31.0573C101.004 31.165 100.957 31.2129 100.849 31.2129H99.6156C99.5079 31.2129 99.46 31.165 99.46 31.0573V26.352C99.46 26.1724 99.5318 26.0647 99.6755 26.0168L101.328 25.5379C101.459 25.502 101.591 25.478 101.711 25.478H104.848C104.943 25.478 105.015 25.5139 105.075 25.5738L105.853 26.352Z" fill="black" />
                                <path d="M113.983 26.6154C113.995 26.6274 114.007 26.6633 114.031 26.7112C114.055 26.7591 114.067 26.795 114.067 26.8309V30.9016C114.067 31.1171 113.959 31.2129 113.756 31.2129H108.907C108.823 31.2129 108.727 31.189 108.644 31.1291L107.805 30.3509C107.746 30.303 107.722 30.2311 107.722 30.1354V28.1838C107.722 27.9803 107.817 27.8725 108.009 27.8725H112.523V27.0943C112.523 27.0345 112.499 26.9746 112.451 26.9267L111.972 26.4239C111.936 26.3999 111.888 26.376 111.828 26.376H107.877C107.77 26.376 107.722 26.3161 107.722 26.2084V25.6456C107.722 25.5379 107.77 25.478 107.877 25.478H112.714C112.798 25.478 112.87 25.5139 112.93 25.5738L113.983 26.6154ZM109.314 28.531C109.194 28.531 109.134 28.5909 109.134 28.7106V29.6684C109.134 29.7522 109.17 29.8241 109.218 29.8839L109.589 30.2072C109.649 30.2551 109.709 30.291 109.781 30.291H112.355C112.475 30.291 112.523 30.2311 112.523 30.1114V28.531H109.314Z" fill="black" />
                                <path d="M122.28 26.352C122.339 26.4119 122.375 26.4837 122.375 26.5915V31.0573C122.375 31.165 122.316 31.2129 122.208 31.2129H120.999C120.891 31.2129 120.831 31.165 120.831 31.0573V26.9866C120.831 26.9387 120.819 26.8908 120.783 26.8549L120.4 26.4598C120.364 26.4239 120.316 26.4119 120.256 26.4119H118.712C118.628 26.4119 118.532 26.4239 118.436 26.4358L117.574 26.6633C117.479 26.6753 117.431 26.7471 117.431 26.8429V31.0573C117.431 31.165 117.371 31.2129 117.275 31.2129H116.042C115.934 31.2129 115.886 31.165 115.886 31.0573V26.352C115.886 26.1724 115.958 26.0647 116.102 26.0168L117.754 25.5379C117.886 25.502 118.017 25.478 118.137 25.478H121.274C121.37 25.478 121.442 25.5139 121.489 25.5738L122.28 26.352Z" fill="black" />
                                <path d="M130.014 26.2802C130.014 26.3999 129.966 26.4478 129.846 26.4478H126.219C126.159 26.4478 126.111 26.4718 126.063 26.5077L125.692 26.8668C125.656 26.9147 125.632 26.9626 125.632 27.0225V29.5008C125.632 29.5607 125.644 29.6086 125.68 29.6445L126.195 30.1473C126.231 30.1952 126.291 30.2311 126.374 30.2311H129.811C129.918 30.2311 129.978 30.279 129.978 30.3868V31.0573C129.978 31.165 129.918 31.2129 129.811 31.2129H125.453C125.357 31.2129 125.285 31.189 125.225 31.1291L124.195 30.0755C124.159 30.0396 124.147 30.0156 124.124 29.9797C124.112 29.9438 124.1 29.9079 124.1 29.872V26.5675C124.1 26.4837 124.124 26.4119 124.195 26.352L124.962 25.5858C125.033 25.5139 125.105 25.478 125.189 25.478H129.846C129.966 25.478 130.014 25.5379 130.014 25.6456V26.2802Z" fill="black" />
                                <path d="M138 28.4472C138 28.6508 137.904 28.7465 137.701 28.7465H133.199V29.5607C133.199 29.6445 133.211 29.7043 133.247 29.7283L133.786 30.279C133.822 30.303 133.87 30.315 133.942 30.315H137.833C137.952 30.315 138 30.3748 138 30.4826V31.0573C138 31.165 137.952 31.2129 137.833 31.2129H133.008C132.912 31.2129 132.84 31.189 132.792 31.1291L131.739 30.0635C131.691 30.0156 131.655 29.9438 131.655 29.872V26.5675C131.655 26.4837 131.691 26.4119 131.751 26.352L132.517 25.5978C132.589 25.5139 132.672 25.478 132.756 25.478H137.701C137.904 25.478 138 25.5738 138 25.7773V28.4472ZM133.786 26.4119C133.726 26.4119 133.678 26.4239 133.63 26.4718L133.271 26.8309C133.223 26.8788 133.199 26.9387 133.199 27.0105V28.0641H136.408C136.528 28.0641 136.587 28.0042 136.587 27.9085V26.5795C136.587 26.4598 136.528 26.4119 136.408 26.4119H133.786Z" fill="black" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M66.6719 23.7952L67.605 24.4041L61.5091 33.0923L60.5761 32.4834L66.6719 23.7952Z" fill="black" />
                            </svg>
                        </div>
                    </Link>

                    <button className={this.state.menuOpen ? 'hamburger hamburger--slider is-active' : 'hamburger hamburger--slider'} type="button" onClick={() => this.setState({ menuOpen: !this.state.menuOpen })}>
                        <span className="hamburger-box">
                            <span className="hamburger-inner" />
                        </span>
                    </button>

                    <nav>
                        <ul>
                            <li><Link to={menu.ecosystem}>Ecosystem</Link></li>
                            <li><a href={menu.docs} target={'_blank'} rel={'noreferrer'}>Docs</a></li>
                            <li><a href={menu.blog} target={'_blank'} rel={'noreferrer'}>Blog</a></li>
                            <li><a href={menu.updates} target={'_blank'} rel={'noreferrer'}>Learn</a></li>
                            <li><Link to={menu.grants}>About Us</Link></li>
                            <li><Link to={menu.grants}>Buy GTFX</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Divider, Grid, Header, Image, Segment, Card } from 'semantic-ui-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faGraduationCap, faListOl, faStar, faLocationArrow, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faDiscord, faTwitter, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';

import 'pure-react-carousel/dist/react-carousel.es.css';

import Carousel from './carousel';

import Logo from '../../layouts/shared/assets/logo.svg';
import OpenSource from './open-source.svg';
import Statistics from './statistics.svg';

import localStyles from './styles.less';
import globalStyles from '../../layouts/shared/assets/global.less';

function Home() {
    return (
        <>
            <Segment inverted className={localStyles.heroSegment} vertical>
                <Grid container stackable verticalAlign="middle">
                    <Grid.Row>
                        <Grid.Column computer={16} largeScreen={10} widescreen={10}>
                            <Header
                                as="h1"
                                content="açık kaynak"
                                inverted
                                hidden
                            />
                            <Image size="medium" src={Logo} />
                            <Header
                                as="h2"
                                inverted
                            >
                                2015'den bu yana açık kaynak farkındalığı
                                oluşturuyor, projelerimizi listeliyor ve
                                yardımlaşıyoruz
                            </Header>

                            <Button primary as={Link} to="/about/" size="large" className={globalStyles.padded}>
                                <FontAwesomeIcon icon={faLocationArrow} />
                                {' '}
                                Manifesto ve Bilgilendirme
                            </Button>
                        </Grid.Column>
                        <Grid.Column width={6} only="large screen" floated="right">
                            <Image size="large" src={OpenSource} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className={localStyles.asymClip}
            >
                <polygon fill="white" points="0,100 100,0 100,100" />
            </svg>

            <Segment className={localStyles.infoSegment} vertical>
                <Grid container stackable verticalAlign="middle">
                    <Grid.Row>
                        <Grid.Column computer={16} largeScreen={10} widescreen={10}>
                            <Header as="h3">
                                Yerel Hareket Eden Bir Ekosistem
                            </Header>
                            <p>
                                Türkiye'deki ve Türkçe konuşan geliştiricilerin
                                oluşturduğu açık kaynak ekosisteminin
                                lokomotifi olmak, insanları açık kaynak geliştirmeye
                                motive etmek, farkındalık yaratmak ve engelleri ortadan
                                kaldırmayı amaçlıyoruz.
                            </p>

                            <Header as="h3">
                                Potansiyel Oluşturmak ve Görünür Kılmak
                            </Header>
                            <p>
                                Amacımız hem mevcut açık kaynak projeler ile bir katalog
                                oluşturarak projelere ulaşılabilirlik sağlamak,
                                hem de açık kaynak felsefesini çeşitli desteklerle
                                yaygınlaştırmak için rehberlik etmek.
                            </p>
                        </Grid.Column>
                        <Grid.Column width={6} only="large screen" floated="right" textAlign="center">
                            <Image size="huge" src={Statistics} />

                            <Button
                                as={Link}
                                to="/stats/"
                                size="large"
                                primary
                                className={localStyles.buttonBelowImage}
                            >
                                <FontAwesomeIcon icon={faChartLine} />
                                {' '}
                                İstatistikler
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <Segment className={localStyles.pagesSegment} vertical>
                <Grid container stackable>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as="h3">
                                <Link to="/news/">
                                    <i aria-hidden="true" className="circular icon">
                                        <FontAwesomeIcon icon={faNewspaper} />
                                    </i>
                                    Haberler
                                </Link>
                            </Header>
                            <p>
                                Açık kaynak projelerden ve açık kaynak destekçisi
                                organizasyonlardan haberler paylaşarak topluluk
                                içerisinde geniş bir ağ oluşmasına katkıda
                                bulunmak istiyoruz.
                            </p>
                        </Grid.Column>
                        <Grid.Column floated="right" width={8}>
                            <Header as="h3">
                                <Link to="/lists/">
                                    <i aria-hidden="true" className="circular icon">
                                        <FontAwesomeIcon icon={faListOl} />
                                    </i>
                                    Listeler
                                </Link>
                            </Header>
                            <p>
                                <Link to="/lists/projects/">Açık kaynak projeler</Link>
                                ,
                                {' '}
                                <Link to="/lists/organizations/">Açık kaynak destekçisi organizasyonlar</Link>
                                {' '}
                                ve
                                {' '}
                                <Link to="/lists/sponsors/">Sponsorlar</Link>
                                ı indeksleyerek bu girişimlerin hem görünürlüklerini
                                sağlamaya hem de dışarıdan erişilebilirliğini
                                arttırmaya çalışıyoruz.
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as="h3">
                                <Link to="/learn/">
                                    <i aria-hidden="true" className="circular icon">
                                        <FontAwesomeIcon icon={faGraduationCap} />
                                    </i>
                                    Eğitim ve İçerikler
                                </Link>
                            </Header>
                            <p>
                                Açık kaynak geliştirme yapmak isteyen kişi ve kuruluşlara
                                ilk adımlarını atmaları ve ilerlemeleri için destek olmaya
                                çalışıyoruz. Bu doğrultuda eğitim bölümü altında
                                {' '}
                                <Link to="/learn/get-started/">Başlarken</Link>
                                ,
                                {' '}
                                <Link to="/learn/licenses/">Lisanslar</Link>
                                ,
                                {' '}
                                <Link to="/learn/for-corporations/">Kurumlar İçin</Link>
                                {' '}
                                ve devamında
                                {' '}
                                <Link to="/learn/guide/">Rehber</Link>
                                {' '}
                                bölümlerimiz yer almakta ve her geçen gün içeriğimizi
                                genişletmekteyiz.
                            </p>
                        </Grid.Column>
                        <Grid.Column floated="right" width={8}>
                            <Header as="h3">
                                <Link to="/stats/">
                                    <i aria-hidden="true" className="circular icon">
                                        <FontAwesomeIcon icon={faStar} />
                                    </i>
                                    İstatistikler
                                </Link>
                            </Header>
                            <p>
                                Topluluğun açık kaynak'a gerçekleştirdiği katkıyı görünür
                                kılmak için, sistemimize GitHub hesabı ile giriş yapmış
                                kullanıcıların bilgilerini kısa aralıklarla derliyor ve
                                paylaşıyoruz.
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <Segment className={localStyles.projectsSegment} vertical>
                <Divider
                    as="h4"
                    horizontal
                    className={localStyles.withDiv}
                >
                    ÖRNEK AÇIK KAYNAK PROJELER
                </Divider>
                <Carousel>
                    <Carousel.Item>
                        <Card fluid>
                            <div className="image">
                                <img src="https://picsum.photos/280?random=1" alt="Restoran Uygulaması Resim" />
                            </div>
                            <div className="user-picture">
                                <img src="https://avatars3.githubusercontent.com/u/16848490?s=460&v=4" alt="Restoran Uygulaması Geliştirici Resmi" />
                            </div>
                            <Card.Content>
                                <Card.Header>
                                    Restoran Uygulaması
                                </Card.Header>
                                <Card.Description>
                                    Restoranlarda kağıt menü devrini kapatan onun yerine
                                    müşterilere, masalarda bulunan QR Kod ile sipariş
                                    verebilme olanağı sağlayan ve siparişin takibini
                                    kolaylaştıran android uygulama.
                                </Card.Description>
                                <Card.Meta as="a" className="user-name" href="https://github.com/yusufcakal" rel="nofollow noreferrer noopener">
                                    Yusuf Çakal
                                </Card.Meta>
                            </Card.Content>
                            <a className="repo" href="https://github.com/yusufcakal/RestaurantApp" rel="nofollow noreferrer noopener">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card fluid>
                            <div className="image">
                                <img src="https://picsum.photos/280?random=2" alt="WholeCMS Resim" />
                            </div>
                            <div className="user-picture">
                                <img src="https://avatars2.githubusercontent.com/u/13615431?s=460&v=4" alt="WholeCMS Geliştirici Resmi" />
                            </div>
                            <Card.Content>
                                <Card.Header>
                                    WholeCMS
                                </Card.Header>
                                <Card.Description>
                                    PHP/Laravel kullanılarak hazırlanmış, içerik yönetim
                                    sistemi. Sınırsızca genişletebileceğiniz bağımlılıkları
                                    olmadan oluşturacağınız modüllerinizi dahil edip içerik
                                    yönetim sisteminden daha fazlasını elde edebilirsiniz.
                                    İstediğiniz temaya entegre ederek kolayca
                                    kullanabileceğiniz bir sistem.
                                </Card.Description>
                                <Card.Meta as="a" className="user-name" href="https://github.com/wholecms" rel="nofollow noreferrer noopener">
                                    Whole CMS
                                </Card.Meta>
                            </Card.Content>
                            <a className="repo" href="https://github.com/wholecms/core" rel="nofollow noreferrer noopener">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </Card>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Card fluid>
                            <div className="image">
                                <img src="https://picsum.photos/280/?random=3" alt="prototurk.com Resim" />
                            </div>
                            <div className="user-picture">
                                <img src="https://avatars1.githubusercontent.com/u/2500557?s=460&v=4" alt="prototurk.com Geliştirici Resmi" />
                            </div>
                            <Card.Content>
                                <Card.Header>
                                    prototurk.com
                                </Card.Header>
                                <Card.Description>
                                    Prototürk'te yer alan, web dilleriyle ilgili referans JSON
                                    dosyalarının yer aldığı repodur. Siz de bu reponun gelişmesine
                                    katkı sağlayarak Türkçe kaynağın yayılmasında etkili
                                    bir rol oynayabilirsiniz.
                                </Card.Description>
                                <Card.Meta as="a" className="user-name" href="https://github.com/tayfunerbilen" rel="nofollow noreferrer noopener">
                                    Tayfun Erbilen
                                </Card.Meta>
                            </Card.Content>
                            <a className="repo" href="https://github.com/tayfunerbilen/prototurk.com" rel="nofollow noreferrer noopener">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </Card>
                    </Carousel.Item>
                </Carousel>
            </Segment>

            <Segment className={localStyles.socialSegment} vertical>
                <Divider
                    as="h4"
                    horizontal
                    className={localStyles.withDiv}
                >
                    İLETİŞİM KANALLARIMIZ
                </Divider>

                <Card.Group centered>
                    <Card as="a" aria-label="GitHub" href="https://github.com/acikkaynak">
                        <Card.Content>
                            <div className={localStyles.cardLeft}>
                                <Card.Header>GitHub</Card.Header>
                                <Card.Meta>/acikkaynak</Card.Meta>
                            </div>
                            <div className={localStyles.cardRight}>
                                <span className={localStyles.cardIcon}>
                                    <FontAwesomeIcon
                                        size="2x"
                                        icon={faGithub}
                                    />
                                </span>
                            </div>
                        </Card.Content>
                    </Card>

                    <Card as="a" aria-label="Twitter" href="https://twitter.com/_acikkaynak">
                        <Card.Content>
                            <div className={localStyles.cardLeft}>
                                <Card.Header>Twitter</Card.Header>
                                <Card.Meta>@_acikkaynak</Card.Meta>
                            </div>
                            <div className={localStyles.cardRight}>
                                <span className={localStyles.cardIcon}>
                                    <FontAwesomeIcon
                                        size="2x"
                                        className={localStyles.flip}
                                        icon={faTwitter}
                                    />
                                </span>
                            </div>
                        </Card.Content>
                    </Card>

                    <Card as="a" aria-label="Telegram" href="https://t.me/acikkaynak">
                        <Card.Content>
                            <div className={localStyles.cardLeft}>
                                <Card.Header>Telegram</Card.Header>
                                <Card.Meta>t.me/acikkaynak</Card.Meta>
                            </div>
                            <div className={localStyles.cardRight}>
                                <span className={localStyles.cardIcon}>
                                    <FontAwesomeIcon
                                        size="2x"
                                        className={localStyles.flip}
                                        icon={faTelegramPlane}
                                    />
                                </span>
                            </div>
                        </Card.Content>
                    </Card>

                    <Card as="a" aria-label="Discord" href="https://discordapp.com/invite/BRtenzs">

                        <Card.Content>
                            <div className={localStyles.cardLeft}>
                                <Card.Header>Discord</Card.Header>
                                <Card.Meta>discord/BRtenzs</Card.Meta>
                            </div>
                            <div className={localStyles.cardRight}>
                                <span className={localStyles.cardIcon}>
                                    <FontAwesomeIcon
                                        size="2x"
                                        icon={faDiscord}
                                    />
                                </span>
                            </div>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </Segment>
        </>
    );
}

export {
    Home as default,
};

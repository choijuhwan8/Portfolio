import { useState, useCallback, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
// import headerImg from '../assets/img/header-img.svg';
import profileImage from '../assets/img/profile-image.png';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    const tick = useCallback(() => {
        const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }, [loopNum, isDeleting, text, period]);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [delta, tick]); // Include 'tick' in the dependency array of useEffect

	return (
		<section className='banner' id='home'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>Hi I'm <span className="webdecoded">Choi Juhwan</span><br /><span className="wrap">{text}</span></h1>
                        <Col xs={12} className="d-xl-none text-center">
                        	<img className='profileImage' src={profileImage} alt='Profile Img' />
                    	</Col>
						<p>As a student of Information Systems at Singapore Management University, I am passionate about leveraging technology to drive business success. With a focus on front-end development, I am skilled in creating intuitive and visually appealing user interfaces that improve user experience. I am eager to connect with professionals in the industry and learn more about how technology can be leveraged to drive business growth.</p>
                        <button onClick={() => window.open('https://www.linkedin.com/in/juhwan-choi-861970219/')}>Let's connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} xl={5} className="d-none d-xl-flex justify-content-end align-items-center">
                        <img className='profileImage' src={profileImage} alt='Profile Img' />
                    </Col>
               
                </Row>
            </Container>
        </section>
	)
}
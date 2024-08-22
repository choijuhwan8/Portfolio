import { useState, useCallback, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
// import profileImage from '../assets/img/profile-image.png';

const Banner = () => {
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
    }, [delta, tick]);

    return (
        <section className='relative mt-0 pt-[260px] pb-[100px] bg-black bg-cover bg-center h-screen' id='home'>
            <Container>
                <Row className="items-center lowercase">
                    <Col xs={12} xl={7}>
                        <span className="font-bold text-white text-sm py-2 px-3 bg-gradient-to-r from-pink-500 to-blue-500 border border-white border-opacity-50 rounded-lg inline-block mb-4">Welcome to my Portfolio</span>
                        <h1 className='text-white text-[65px] font-bold leading-tight mb-5'>
                            Hi I'm <span className="whitespace-nowrap">Choi Juhwan</span><br /><span className="inline-block text-[#ca03fc] text-[20px] mt-2 h-[50px] overflow-hidden border-r-2 border-gray-600">{text}</span>
                        </h1>
                        <p className='text-gray-400 text-[18px] leading-relaxed w-[96%] lowercase'>
                            As a student of Information Systems at Singapore Management University, I am passionate about leveraging technology to drive business success. With a focus on front-end development, I am skilled in creating intuitive and visually appealing user interfaces that improve user experience. I am eager to connect with professionals in the industry and learn more about how technology can be leveraged to drive business growth.
                        </p>
                        <button onClick={() => window.open('https://www.linkedin.com/in/juhwan-choi-861970219/')} className='text-white font-bold text-[20px] mt-8 flex items-center'>
                            Let's connect <ArrowRightCircle size={25} className='ml-2 transition-transform duration-300 hover:translate-x-4' />
                        </button>
                    </Col>
                
                </Row>
            </Container>
        </section>
    )
}

export default Banner;

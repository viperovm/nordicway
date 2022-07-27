import logo1 from './logo1.png';
import phone from './phone.svg';
import whatsapp from './whatsapp.svg';
import './App.css';

function App() {
  return (
    <>
      <section>
        <div className="wrapper">
          <div className="image" style={{backgroundImage: `url(${logo1})`}}/>
          <div className="text">
            <div className={'title'}>
              Сайт на реконструкции
            </div>
            <div className={'subtitle'}>
              Наши контакты:
            </div>
            <div className={'contact'}>
              <img src={phone} alt=""/>
              <div>
                <a href="tel:+74991300275">+7 (499) 1300 275</a>
                <a href="tel:+79295073560">+7 (929) 507 35 60</a>
              </div>
            </div>
            <div className={'contact'}>
              <img src={whatsapp} alt=""/>
              <div>
                <a href="https://tap.link/@newwavecasual">@newwavecasual</a>
              </div>

            </div>

          </div>

          <div className="mobile-text">
            <div className="text-wrapper">
              <div className={'title'}>
                Сайт на реконструкции
              </div>
              <div className={'subtitle'}>
                Наши контакты:
              </div>
              <div className={'contact'}>
                <img src={phone} alt=""/>
                <div>
                  <a href="tel:+74991300275">+7 (499) 1300 275</a>
                  <a href="tel:+79295073560">+7 (929) 507 35 60</a>
                </div>
              </div>
              <div className={'contact'}>
                <img src={whatsapp} alt=""/>
                <div>
                  <a href="https://tap.link/@newwavecasual">@newwavecasual</a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default App;

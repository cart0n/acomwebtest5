import React from 'react';
import ReactDOM from 'react-dom';
import Modal from "../Modal";
import useModal from '../useModal';



function Support() {
    const {isShowing, toggle} = useModal();
  return (
    <main>
    <section class="container support-first-page">
        <div class="background-place">
            <div class="support-top-nav">
                <a href="/">Головна</a>
                <i class="fas fa-long-arrow-alt-right"></i>
                <a>Підтримка</a>
            </div>
            <h1>Підтримка</h1>

            <h2>Зворотній зв'язок</h2>

            <div class="support-btns">
                <div>
                    <h3>Передзвоніть мені</h3>
                    <button class="pulse"  onClick={toggle}><i class="fas fa-phone-alt"></i></button>
                    <Modal
                    isShowing={isShowing}
                    hide={toggle}
                  />
                </div>
            </div>
        </div>
    </section>
    <section class="support-ref">
    <h2>Відповіді на популярні запитання</h2>
    <div class="answers">
    <div class="accordion-item" id="margn">
            <input type="checkbox" id="accordion-1" class="accordion-item-input" />
            <label for="accordion-1" class="answers-accordion-item-trigger">Заголовок</label>
            <div class="accordion-item-content">
                content 1
            </div>
        </div>
        <div class="accordion-item">
            <input type="checkbox" id="accordion-2" class="accordion-item-input" />
            <label for="accordion-2" class="answers-accordion-item-trigger">Заголовок</label>
            <div class="accordion-item-content">
                content 1
            </div>
        </div>
        <div class="accordion-item">
            <input type="checkbox" id="accordion-3" class="accordion-item-input" />
            <label for="accordion-3" class="answers-accordion-item-trigger">Заголовок</label>
            <div class="accordion-item-content">
                content 1
            </div>
        </div>
        <div class="accordion-item">
            <input type="checkbox" id="accordion-4" class="accordion-item-input" />
            <label for="accordion-4" class="answers-accordion-item-trigger">Заголовок</label>
            <div class="accordion-item-content">
                content 1
            </div>
        </div>
        <div class="accordion-item">
            <input type="checkbox" id="accordion-5" class="accordion-item-input" />
            <label for="accordion-5" class="answers-accordion-item-trigger">Заголовок</label>
            <div class="accordion-item-content">
                content 1
            </div>
        </div>
        <div class="accordion-item">
            <input type="checkbox" id="accordion-6" class="accordion-item-input" />
            <label for="accordion-6" class="answers-accordion-item-trigger">Заголовок</label>
            <div class="accordion-item-content">
                content 1
            </div>
        </div>
        <div class="accordion-item">
            <input type="checkbox" id="accordion-7" class="accordion-item-input" />
            <label for="accordion-7" class="answers-accordion-item-trigger">Заголовок</label>
            <div class="accordion-item-content">
                content 1
            </div>
        </div>
        <div class="accordion-item">
            <input type="checkbox" id="accordion-8" class="accordion-item-input" />
            <label for="accordion-8" class="answers-accordion-item-trigger">Заголовок</label>
            <div class="accordion-item-content">
                content 1
            </div>
        </div>
        <div class="accordion-item">
            <input type="checkbox" id="accordion-9" class="accordion-item-input" />
            <label for="accordion-9" class="answers-accordion-item-trigger">Заголовок</label>
            <div class="accordion-item-content">
                content 1
            </div>
        </div>
    </div>
    </section>
    <section class="support-ref">
        <h2>Помилки при підключенні</h2>
        <div class="answers">
            <div class="accordion-item" id="margn2">
                <input type="checkbox" id="accordion-10" class="accordion-item-input" />
                <label for="accordion-10" class="answers-accordion-item-trigger">Заголовок</label>
                <div class="accordion-item-content">
                    content 1
                </div>
            </div>
            <div class="accordion-item">
                <input type="checkbox" id="accordion-11" class="accordion-item-input" />
                <label for="accordion-11" class="answers-accordion-item-trigger">Заголовок</label>
                <div class="accordion-item-content">
                    content 1
                </div>
            </div>
            <div class="accordion-item">
                <input type="checkbox" id="accordion13" class="accordion-item-input" />
                <label for="accordion-13" class="answers-accordion-item-trigger">Заголовок</label>
                <div class="accordion-item-content">
                    content 1
                </div>
            </div>
            <div class="accordion-item">
                <input type="checkbox" id="accordion-14" class="accordion-item-input" />
                <label for="accordion-14" class="answers-accordion-item-trigger">Заголовок</label>
                <div class="accordion-item-content">
                    content 1
                </div>
            </div>
            <div class="accordion-item">
                <input type="checkbox" id="accordion-15" class="accordion-item-input" />
                <label for="accordion-15" class="answers-accordion-item-trigger">Заголовок</label>
                <div class="accordion-item-content">
                    content 1
                </div>
            </div>
            <div class="accordion-item">
                <input type="checkbox" id="accordion-16" class="accordion-item-input" />
                <label for="accordion-16" class="answers-accordion-item-trigger">Заголовок</label>
                <div class="accordion-item-content">
                    content 1
                </div>
            </div>
            <div class="accordion-item">
                <input type="checkbox" id="accordion-17" class="accordion-item-input" />
                <label for="accordion-17" class="answers-accordion-item-trigger">Заголовок</label>
                <div class="accordion-item-content">
                    content 1
                </div>
            </div>
            <div class="accordion-item">
                <input type="checkbox" id="accordion-18" class="accordion-item-input" />
                <label for="accordion-18" class="answers-accordion-item-trigger">Заголовок</label>
                <div class="accordion-item-content">
                    content 1
                </div>
            </div>
            <div class="accordion-item">
                <input type="checkbox" id="accordion-19" class="accordion-item-input" />
                <label for="accordion-19" class="answers-accordion-item-trigger">Заголовок</label>
                <div class="accordion-item-content">
                    content 1
                </div>
            </div>
        </div>
    </section>
    <footer className="container">
        <div className="main-footer" id="main-footer">
            <div className="footer-section">
                <img src="images/ArgoCom_logo.png" alt="" />
                <h5>Ваш надійний інтернет провайдер</h5>
            </div>
            <div className="footer-section">
                <h3>Посилання</h3>
                <div className="footer-nav">            
                    <a href="/"><i className="fas fa-home"></i>Головна</a>
                    <a href="/Акції"><i className="fas fa-tags"></i>Акції</a>
                    <a href="/Новини"><i className="fas fa-newspaper"></i>Новини</a>
                    <a href="/Тарифи"><i className="fas fa-piggy-bank"></i>Тарифи</a>
                    <a href="/Підтримка"><i className="fas fa-question"></i>Підтримка</a>
                    <a href="/Контакти"><i  className="fas fa-map-marker-alt"></i>Контакти</a>
                </div>
            </div>
            <div className="footer-section">
                <h3>Де ми розміщені</h3>
                <div className="footer-nav">
                    <p className="districts-footer">Борщівський район</p>
                    <p className="districts-footer">Гусятинський район</p>
                    <p className="districts-footer">Збаразький район</p>
                    <p className="districts-footer">Лановецький район</p>
                    <p className="districts-footer">Шумський район</p>
                </div>
            </div>
            <div class="footer-section">
                <h3>Контакти</h3>
                <p><i className="fas fa-map-marker-alt"></i>Тернопіль вулиця Лозовецька дім 3a</p>
                <p><i className="fas fa-phone-alt"></i>+3800000000</p>
                <p><i className="fas fa-envelope"></i>acom@gmail.com</p>
            </div>
        </div>
        <div className="smaller-footer">
            <h6>©2020 @cart0n_mc</h6>
        </div>
        </footer>
    </main>
  );
}

export default Support;

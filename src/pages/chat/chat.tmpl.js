const template = `
    <div class="chat-wrapper">
    <aside class="history-panel">
        <div class="history-panel__toolbar">
            <div class="history-panel__profile">
                <span>Профиль</span>
            </div>
            <input class="search-input" type="text" placeholder="Поиск">
        </div>
        <div class="history-panel__chat">
            <div class="message">
                <div class="avatar-rounded">
                    <img src="https://via.placeholder.com/150" alt="">
                </div>
                <div class="message__body">
                    <span class="message__name">Андрей</span>
                    <span class="message__preview">Изображение</span>
                </div>
                <div class="message__info">
                    <div class="message__date">10:49</div>
                    <div class="message__bage">
                        <span class="message__count">2</span>
                    </div>
                </div>
            </div>
            <div class="message">
                <div class="avatar-rounded">
                    <img src="https://via.placeholder.com/150" alt="">
                </div>
                <div class="message__body">
                    <span class="message__name">Андрей</span>
                    <span class="message__preview">Изображение</span>
                </div>
                <div class="message__info">
                    <div class="message__date">10:49</div>
                    <div class="message__bage">
                        <span class="message__count">2</span>
                    </div>
                </div>
            </div>
        </div>
    </aside>
    <main class="chat-current">
        <div class="chat-current__info-panel">
            <div class="chat-current__info">
                <div class="avatar-rounded">
                    <img src="https://via.placeholder.com/150" alt="">
                </div>
                <div>
                    <span>Вадим</span>
                </div>
            </div>
            <div class="chat-current__options">
                ...
            </div>
        </div>
        <div class="chat">
            <div class="chat__date">
                <span>19 июня</span>
            </div>
            <div class="chat__message message-left">
                <div>
                    <p>
                        Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то
                        момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все
                        знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер
                        все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты
                        с пленкой.

                        Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они
                        так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали
                        на аукционе за 45000 евро.
                    </p>
                </div>
                <div class="message-time"> <span> 11:56</span></div>
            </div>
            <div class="chat__message message-right">
                <div>
                    <p> Супер!</p>
                </div>
                <div class="message-time"> <span> 11:58</span></div>
            </div>
        </div>
        <div class="message-toolbar">
            <button class="clip-button">^</button>
            <input placeholder="Message" value="{{ message }}" class="message-input" type="text">
            <button class="send-message-button">-></button>
        </div>
    </main>
</div>
`;
export default template;

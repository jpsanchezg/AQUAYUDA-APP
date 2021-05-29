import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import chat from "components/chat/Chatbot.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import Chat, { Bubble, useMessages } from "@chatui/core";
import "@chatui/core/dist/index.css";

const initialMessages = [
  {
    type: 'text',
    content: { text: 'Bienvenido al chat de aquayuda' },
    user: { avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg' },
  },
];

const initialMessages2 = [
  {
    type: 'text',
    content: { text: 'En que te podemos ayudar?' },
    user: { avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg' },
  },
];


const defaultQuickReplies = [
  {
    icon: 'message',
    name: 'Reportar',
    isNew: true,
    isHighlight: true,
  },
  {
    name: 'Soporte',
    isNew: true,
  },
  {
    name: 'PQR',
    isHighlight: true,
  },
  {
    name: 'FAQS',
  },
];

export default () => {
  // 消息列表
  const { messages, appendMsg, setTyping } = useMessages(initialMessages,initialMessages2);

  // 发送回调
  function handleSend(type, val) {
    if (type === 'text' && val.trim()) {
      // TODO: 发送请求
      appendMsg({
        type: 'text',
        content: { text: val },
        position: 'right',
      });

      setTyping(true);

      // 模拟回复消息
      setTimeout(() => {
        appendMsg({
          type: 'text',
          content: { text: 'Dentro de unos minutos te va a atender una persona ' },
        });
      }, 1000);
    }
  }

  function handleQuickReplyClick(item) {
    handleSend('text', item.name);
  }

  function renderMessageContent(msg) {
    const { type, content } = msg;

    // 根据消息类型来渲染
    switch (type) {
      case 'text':
        return <Bubble content={content.text} />;
      case 'image':
        return (
          <Bubble type="image">
            <img src={content.picUrl} alt="" />
          </Bubble>
        );
      default:
        return null;
    }
  }

return (
  <AnimationRevealPage>
    <Header />
    <Chat
      navbar={{ title: 'Asistente' }}
      messages={messages}
      renderMessageContent={renderMessageContent}
      quickReplies={defaultQuickReplies}
      onQuickReplyClick={handleQuickReplyClick}
      onSend={handleSend}
    />

    <Footer />
  </AnimationRevealPage>
);
};

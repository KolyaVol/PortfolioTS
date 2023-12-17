import { createSlice } from "@reduxjs/toolkit";
interface LangState {
  lang: {
    myProjectsTitle: string;
    contacts: string;
    hello: string;
    myName: string;
    mySurname: string;
    firstWords: string;
    myStory: string;
    mySkills: string;
    prItemButton: string;
    dataMolaDescr: string;
    itlogyDescr: string;
    webshopDescr: string;
    shelterDescr: string;
  };
}
let initialState: LangState = {
  lang: {
    myProjectsTitle: "Pet projects",
    contacts: "Contacts",
    hello: "Hello!",
    myName: `I'm Nikolai`,
    mySurname: "Voloshchik",
    firstWords:
      "I've been doing front-end and some back-end development since 2021. Do you need a responsive website, SPA, or maybe a deploing your app? Then contact me!",
    myStory:
      "Hello again everyone! A little about myself: I've graduated Belarusian State Technological University in 2021, went through the army and worked as a designer in the chemical industry for one year. I'm learning JS since 2022. What you really need to know about me is that I always reach my goal, and right now that goal is to be a good IT specialist. My hobbies are sport, travelling, computer games and the new one - programming. By trusting me, you will get maximum return for your project!",
    mySkills: "My Skills",
    prItemButton: "Watch full",
    dataMolaDescr: "Test project created on JS HTML/CSS",
    itlogyDescr: "Angular car rent service",
    webshopDescr: "React/Redux web shop with auth and cart",
    shelterDescr:
      "JS site for pets shelter with infinite sliders and navigation",
  },
};

export const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    toEnLang(state) {
      state.lang = {
        myProjectsTitle: "Pet projects",
        contacts: "Contacts",
        hello: "Hello!",
        myName: `I'm Nikolai`,
        mySurname: "Voloshchik",
        firstWords:
          "I've been doing front-end development since 2021. Do you need a responsive website, SPA, or maybe a deploing your app? Then contact me!",
        myStory:
          "Hello again everyone! A little about myself: I've graduated Belarusian State Technological University in 2021, went through the army and worked as a designer in the chemical industry for one year. I'm learning JS since 2022. What you really need to know about me is that I always reach my goal, and right now that goal is to be a good IT specialist. My hobbies are sport, travelling, computer games and the new one - programming. By trusting me, you will get maximum return for your project!",
        mySkills: "My Skills",
        prItemButton: "Watch full",
        dataMolaDescr: "Test project created on JS HTML/CSS",
        itlogyDescr: "Angular car rent service",
        webshopDescr: "React/Redux web shop with auth and cart",
        shelterDescr:
          "JS site for pets shelter with infinite sliders and navigation",
      };
    },
    toRuLang(state) {
      state.lang = {
        myProjectsTitle: "Пет проекты",
        contacts: "Контакты",
        hello: "Привет!",
        myName: `Меня зовут Николай`,
        mySurname: "Волощик",
        firstWords:
          "Я занимаюсь фронтендом и бэкендом c 2021. Вам нужен адаптивный веб-сайт, SPA или, может быть, развертывание вашего приложения? Тогда свяжитесь со мной!",
        myStory:
          "Привет снова всем! Немного о себе: в 2021 году закончил БГТУ, прошел армию, год работал конструктором в химической промышленности. Я изучаю JS с 2022 года. Что вам действительно нужно знать обо мне, так это то, что я всегда достигаю своей цели, и прямо сейчас эта цель — стать хорошим ИТ-специалистом. Мои увлечения - спорт, путешествия, компьютерные игры и новое - программирование. Доверившись мне, вы получите максимальную отдачу для своего проекта!",
        mySkills: "Мои навыки",
        prItemButton: "Посмотреть",
        dataMolaDescr: "Тестовый проект написанный на JS HTML/CSS",
        itlogyDescr: "Приложение для аренды авто на Angular",
        webshopDescr: "React/Redux магазин с авторизацией и корзиной",
        shelterDescr:
          "Сайт приюта животных на чистом JS с бесконечными слайдерами и навигацией",
      };
    },
  },
});
export const { toEnLang, toRuLang } = langSlice.actions;
export default langSlice.reducer;

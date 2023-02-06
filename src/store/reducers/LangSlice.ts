import { createSlice } from "@reduxjs/toolkit";
interface LangState { 
	lang:
	{
	aboutMe: string;
	myProjects: string;
	contacts: string;
	hello: string;
	myName: string;
	mySurname: string;
	firstWords: string;
	myStory: string;
	mySkills:string
	
}
	
}
let initialState: LangState = {
	lang: {
		aboutMe: "About me",
		myProjects: "My projects",
		contacts: "Contacts",
		hello: "Hello!",
		myName: `I'm Nikolai`,
		mySurname: "Valoshchik",
		firstWords:
			"I've been doing front-end and some back-end development for a year now. Do you need a responsive website, SPA, or maybe a deploing your app? Then contact me",
		myStory:
			"Hello again everyone! A little about myself: I've graduated Belarusian State Technological University in 2021, went through the army and worked as a designer in the chemical industry for one year. I start thinking about programming 2 years ago but start learning right after army. Now I've almost a year of experiance in web-programming and I realy enjoy this profession. What you really need to know about me is that I always reach my goal, and right now that goal is to be a good IT specialist. My hobbies are sport, travelling, computer games and the new one - writting code. By trusting me, you will get maximum return for your project!",
		mySkills: 'My Skills',
	},
};

export const langSlice = createSlice({
	name: "lang",
	initialState,
	reducers: {
		toEnLang(state) {
			state.lang = {
				aboutMe: "About me",
				myProjects: "My projects",
				contacts: "Contacts",
				hello: "Hello!",
				myName: `I'm Nikolai`,
				mySurname: "Valoshchik",
				firstWords:
					"I've been doing front-end and some back-end development for a year now. Do you need a responsive website, SPA, or maybe a deploing your app? Then contact me",
				myStory:
					"Hello again everyone! A little about myself: I've graduated Belarusian State Technological University in 2021, went through the army and worked as a designer in the chemical industry for one year. I start thinking about programming 2 years ago but start learning right after army. Now I've almost a year of experiance in web-programming and I realy enjoy this profession. What you really need to know about me is that I always reach my goal, and right now that goal is to be a good IT specialist. My hobbies are sport, travelling, computer games and the new one - writting code. By trusting me, you will get maximum return for your project!",
				mySkills: "My Skills",
			};
		},
		toRuLang(state) {
			state.lang = {
				aboutMe: "Обо мне",
				myProjects: "Мои проекты",
				contacts: "Контакты",
				hello: "Привет!",
				myName: `Меня зовут Николай`,
				mySurname: "Волощик",
				firstWords:
					"Я занимаюсь фронтендом и бэкендом уже год. Вам нужен адаптивный веб-сайт, SPA или, может быть, развертывание вашего приложения? Тогда свяжитесь со мной",
				myStory:
					"Привет снова всем! Немного о себе: в 2021 году закончил БГТУ, прошел армию, год работал конструктором в химической промышленности. Я начал думать о программировании 2 года назад, но начал учиться сразу после армии. Сейчас у меня почти год опыта в веб-программировании и мне очень нравится эта профессия. Что вам действительно нужно знать обо мне, так это то, что я всегда достигаю своей цели, и прямо сейчас эта цель — стать хорошим ИТ-специалистом. Мои увлечения - спорт, путешествия, компьютерные игры и новое - написание кода. Доверившись мне, вы получите максимальную отдачу для своего проекта!",
				mySkills: "Мои навыки",
			};
		},
	},
});
export const { toEnLang, toRuLang } = langSlice.actions;
export default langSlice.reducer;

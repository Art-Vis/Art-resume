import { QuestionProps } from './interface';

export const questionsFrontend: QuestionProps[] = [
	{
		question: 'Что такое JSX?',
		options: ['Функция в React', 'Расширение JavaScript', 'Библиотека'],
		correctAnswer: 'Расширение JavaScript',
	},
	{
		question: 'Какой хук используется для управления состоянием в React?',
		options: ['useEffect', 'useState', 'useRef'],
		correctAnswer: 'useState',
	},
	{
		question: 'Что такое TypeScript?',
		options: [
			'Язык программирования',
			'Надстройка над JavaScript',
			'Библиотека',
		],
		correctAnswer: 'Надстройка над JavaScript',
	},
	{
		question: 'Что делает метод Array.prototype.map()?',
		options: [
			'Изменяет оригинальный массив',
			'Возвращает новый массив',
			'Добавляет элементы в массив',
		],
		correctAnswer: 'Возвращает новый массив',
	},
	{
		question:
			'Какой метод используется для отправки асинхронных запросов в JavaScript?',
		options: ['setTimeout', 'fetch', 'async/await'],
		correctAnswer: 'fetch',
	},
	{
		question: 'Что такое Virtual DOM?',
		options: [
			'Метод рендеринга в React',
			'Копия реального DOM в памяти',
			'API для работы с DOM',
		],
		correctAnswer: 'Копия реального DOM в памяти',
	},
	{
		question: 'Что такое Flexbox?',
		options: [
			'Метод для создания адаптивных сеток',
			'JavaScript-библиотека',
			'CSS-фреймворк',
		],
		correctAnswer: 'Метод для создания адаптивных сеток',
	},
	{
		question: 'Какой атрибут HTML используется для создания текстового поля?',
		options: ['<input>', '<textarea>', '<text>'],
		correctAnswer: '<textarea>',
	},
	{
		question:
			'Какое значение свойства display используется для скрытия элемента с сохранением его пространства?',
		options: ['none', 'block', 'visibility: hidden'],
		correctAnswer: 'visibility: hidden',
	},
	{
		question: 'Что такое Webpack?',
		options: [
			'Язык программирования',
			'CSS-фреймворк',
			'Инструмент для сборки модулей',
		],
		correctAnswer: 'Инструмент для сборки модулей',
	},
	{
		question: 'Для чего используется хук useEffect в React?',
		options: [
			'Для управления состоянием',
			'Для побочных эффектов в компонентах',
			'Для создания рефов',
		],
		correctAnswer: 'Для побочных эффектов в компонентах',
	},
	{
		question: 'Что такое CORS и для чего он нужен?',
		options: [
			'Метод защиты от XSS-атак',
			'Механизм контроля доступа к ресурсам между доменами',
			'Библиотека для запросов к серверу',
		],
		correctAnswer: 'Механизм контроля доступа к ресурсам между доменами',
	},
	{
		question: 'Какой HTTP-метод используется для отправки данных на сервер?',
		options: ['GET', 'POST', 'DELETE'],
		correctAnswer: 'POST',
	},
	{
		question:
			'Какой из нижеперечисленных селекторов CSS имеет наибольшую специфичность?',
		options: ['#header', '.header', 'div'],
		correctAnswer: '#header',
	},
	{
		question: 'Что такое Promise в JavaScript?',
		options: [
			'Функция для работы с массивами',
			'Объект для обработки асинхронных операций',
			'Событие, связанное с пользовательским вводом',
		],
		correctAnswer: 'Объект для обработки асинхронных операций',
	},
	{
		question:
			'Какое свойство Flexbox используется для управления выравниванием элементов по главной оси?',
		options: ['justify-content', 'align-items', 'flex-direction'],
		correctAnswer: 'justify-content',
	},
	{
		question:
			'Какое из утверждений о "стрелочных функциях" в JavaScript верно?',
		options: [
			'Стрелочные функции имеют собственное значение this',
			'Стрелочные функции не могут быть анонимными',
			'Стрелочные функции не имеют собственного значения this',
		],
		correctAnswer: 'Стрелочные функции не имеют собственного значения this',
	},
	{
		question:
			'Какое значение свойства position используется для фиксированного позиционирования элемента относительно окна браузера?',
		options: ['relative', 'absolute', 'fixed'],
		correctAnswer: 'fixed',
	},
	{
		question: 'Какое значение display делает элемент блочно-строчным?',
		options: ['block', 'inline', 'inline-block'],
		correctAnswer: 'inline-block',
	},
	{
		question: 'Что делает оператор "===" в JavaScript?',
		options: [
			'Проверяет равенство значений и типов',
			'Проверяет равенство значений',
			'Присваивает значение переменной',
		],
		correctAnswer: 'Проверяет равенство значений и типов',
	},
	{
		question: 'Что такое "поднятие" (hoisting) в JavaScript?',
		options: [
			'Автоматическое поднятие переменных и функций в начало их области видимости',
			'Процесс создания экземпляра объекта',
			'Механизм обработки ошибок в асинхронных операциях',
		],
		correctAnswer:
			'Автоматическое поднятие переменных и функций в начало их области видимости',
	},
	{
		question: 'Сколько основных типов данных существует в JavaScript?',
		options: ['6', '7', '8'],
		correctAnswer: '7',
	},
	{
		question: 'Какие типы данных в JavaScript являются примитивными?',
		options: [
			'string, number, boolean, object, null, undefined, symbol',
			'string, number, boolean, null, undefined, symbol, bigint',
			'string, number, boolean, object, null, undefined, bigint',
		],
		correctAnswer: 'string, number, boolean, null, undefined, symbol, bigint',
	},
	{
		question:
			'Что будет в консоли, если сравнить null и undefined с помощью оператора "==", и почему?',
		options: [
			'true, потому что оба значения считаются равными при нестрогом сравнении',
			'false, потому что null и undefined — разные типы данных',
			'undefined, потому что выражение некорректно',
		],
		correctAnswer:
			'true, потому что оба значения считаются равными при нестрогом сравнении',
	},
	{
		question: 'Что такое замыкание в JavaScript?',
		options: [
			'Способ создания новых объектов',
			'Функция внутри другой функции, которая запоминает окружение, в котором была создана',
			'Механизм для обработки асинхронных операций',
		],
		correctAnswer:
			'Функция внутри другой функции, которая запоминает окружение, в котором была создана',
	},
	{
		question: 'Что вернет следующая строка кода: typeof NaN?',
		options: ['"number"', '"NaN"', '"undefined"'],
		correctAnswer: '"number"',
	},
	{
		question:
			'Какой результат даст сравнение строки и числа с помощью оператора "==="?',
		options: [
			'"true", если значения равны',
			'"false", потому что типы данных разные',
			'Возникнет ошибка',
		],
		correctAnswer: '"false", потому что типы данных разные',
	},
	{
		question:
			'Какое ключевое слово используется для объявления переменной, значение которой нельзя изменить?',
		options: ['let', 'const', 'var'],
		correctAnswer: 'const',
	},
	{
		question: 'Что делает оператор "typeof" в JavaScript?',
		options: [
			'Возвращает тип переменной',
			'Проверяет, существует ли переменная',
			'Сравнивает типы данных',
		],
		correctAnswer: 'Возвращает тип переменной',
	},
	{
		question:
			'Что произойдет, если объявить переменную с использованием let после того, как она уже была объявлена с var?',
		options: [
			'Переменная будет переопределена',
			'Произойдет ошибка',
			'Будет использовано значение переменной, объявленной с var',
		],
		correctAnswer: 'Произойдет ошибка',
	},
	{
		question:
			'Какое значение будет у переменной после выполнения следующего кода?\nlet x;\nconsole.log(x);',
		options: ['undefined', 'null', 'NaN'],
		correctAnswer: 'undefined',
	},
	{
		question: 'Что вернет следующий код: [] == []?',
		options: ['true', 'false', 'undefined'],
		correctAnswer: 'false',
	},
	{
		question: 'Какой тип данных в TypeScript описывает любой тип значения?',
		options: ['unknown', 'any', 'void'],
		correctAnswer: 'any',
	},
	{
		question: 'Что такое interface в TypeScript?',
		options: [
			'Тип данных, позволяющий описывать структуру объекта',
			'Метод для создания классов',
			'Тип данных, используемый для типизации переменных',
		],
		correctAnswer: 'Тип данных, позволяющий описывать структуру объекта',
	},
	{
		question:
			'Что произойдет, если в TypeScript сравнить строку и число с помощью оператора "==="?',
		options: [
			'"true", если значения равны',
			'"false", потому что типы данных разные',
			'Возникнет ошибка',
		],
		correctAnswer: '"false", потому что типы данных разные',
	},
	{
		question:
			'Какое значение будет у переменной после выполнения следующего кода?\nlet x: any = "hello";\nconsole.log(x);',
		options: ['undefined', '"hello"', 'Ошибка'],
		correctAnswer: '"hello"',
	},
	{
		question: 'Что такое generics в TypeScript?',
		options: [
			'Механизм для создания компонентов и функций, которые работают с любыми типами данных',
			'Специальный тип данных для обработки массивов',
			'Метод создания функций',
		],
		correctAnswer:
			'Механизм для создания компонентов и функций, которые работают с любыми типами данных',
	},
	{
		question: 'Что такое tuple в TypeScript?',
		options: [
			'Тип данных для работы с массивами',
			'Тип данных, который позволяет хранить элементы разных типов в одном массиве',
			'Тип данных для создания интерфейсов',
		],
		correctAnswer:
			'Тип данных, который позволяет хранить элементы разных типов в одном массиве',
	},
	{
		question:
			'Что произойдет, если в TypeScript присвоить переменной с типом string значение числа?',
		options: [
			'Тип данных переменной автоматически изменится на number',
			'Произойдет ошибка компиляции',
			'Значение будет приведено к строке',
		],
		correctAnswer: 'Произойдет ошибка компиляции',
	},
	{
		question: 'Что делает оператор "===" в TypeScript?',
		options: [
			'Проверяет равенство значений и типов',
			'Проверяет равенство значений',
			'Присваивает значение переменной',
		],
		correctAnswer: 'Проверяет равенство значений и типов',
	},
];

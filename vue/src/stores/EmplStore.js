import { defineStore } from "pinia";
export const useEmplStore = defineStore("EmplStore", {
  state: () => ({
    empls: [
      {
        id: 1,
        name: "Alexandrov.H.976b48f0-7fd3-4d03-82ce-395ddeafe5d5",
        hide: true,
        thumbnail: true,
        gender: "m",
        first_name: "Герман", //name
        last_name: "Александров", // surname
        middle_name: "Евгеньевич", // patronymic
        birthday: "25.01",
        email: "hermansochi@ya.ru",
        cn: "Александров Герман Евгеньевич",
        telephone: "6677",
        mobile: "9899001010",
        title: "Web developer",
        department: "Dream team",
        company: "Looking for a job",
        city: "Сочи",
        created_at: "2022-10-11T12:19:10.000000Z",
        updated_at: "2022-10-11T12:19:10.000000Z",
      },
      {
        id: 2,
        name: "K.Romanova",
        hide: false,
        thumbnail: true,
        gender: "f",
        first_name: "Клеопатра",
        last_name: "Романова",
        middle_name: "Ивановна ",
        birthday: "0202",
        email: "K.Romanova@ya.ru",
        cn: "Романова Клеопатра Ивановна",
        telephone: "2222",
        mobile: "92222222222",
        title: "doctor",
        department: "Dream team",
        company: "Looking for a job",
        city: "Сочи",
        created_at: "2022-10-11T12:19:10.000000Z",
        updated_at: "2022-10-11T12:19:10.000000Z",
      },
      {
        id: 3,
        name: "M.Petrova",
        hide: true,
        thumbnail: true,
        gender: "u",
        first_name: "Молибдена",
        last_name: "Петрова",
        middle_name: "Ильинична",
        birthday: "0303",
        email: "M.Petrova@ya.ru",
        cn: "Петрова Молибдена Ильинична",
        telephone: "3333",
        mobile: "93333333333",
        title: "designer && designer, designer && designer",
        department: "Dream door",
        company: "Looking for a exit",
        city: "Moskow",
        created_at: "2022-10-11T12:19:10.000000Z",
        updated_at: "2022-10-11T12:19:10.000000Z",
      },
      {
        id: 4,
        name: "O.Pupkin",
        hide: true,
        thumbnail: true,
        gender: "",
        first_name: "Осип",
        last_name: "Пупкин",
        middle_name: "Мандельштанович",
        birthday: "0404",
        email: "O.Pupkin@ya.ru",
        cn: "Пупкин Осип Мандельштанович",
        telephone: "4444",
        mobile: "94444444444",
        title: "freak",
        department: "Dream in door",
        company: "Looking for a door",
        city: "Feo",
        created_at: "2022-10-11T12:19:10.000000Z",
        updated_at: "2022-10-11T12:19:10.000000Z",
      },
    ],
  }),
});

const yumekawa = (animal: string) =>
  `src/assets/images/yumekawa_animal_${animal}.png`;

const animals = ['inu', 'panda', 'penguin', 'usagi'];

const animalsBy = (mul: number) =>
  Array.from({ length: mul }).flatMap(() => animals);

type Animal = {
  id: string;
  src: string;
  name: string;
};

export const animalList: Animal[] = animalsBy(3).map((animal, idx) => ({
  id: animal + idx,
  src: yumekawa(animal),
  name: animal,
}));

import { faker } from "@faker-js/faker";

export const genrateUser = () => {
  return {
    id: faker.random.numeric(8),
    email: faker.internet.email(),
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    avatar: faker.image.avatar(),
  };
};
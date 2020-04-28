interface createUserData {
  name?: string;
  email: string;
  password: string;
}

const CreateUser = ({ name, email, password }: createUserData) => {
  const user = {
    name,
    email,
    password,
  };

  return user;
};

export default CreateUser;

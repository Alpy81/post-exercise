import axios from "axios";

const Home = () => {
  const handleSubmit = async (e) => {
    const formData = new FormData(e.target);
    e.preventDefault();
    console.log(formData);
    const response = await axios.post(
      "http://localhost:3001/api/sendenpost",
      formData
    );
    console.log(response);
  };

  return (
    <>
      <h1>Home</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text" placeholder="Title.." />
        <label htmlFor="adress">Adress</label>
        <input id="adress" name="adress" type="text" placeholder="Adress.." />
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Name.." />
        <label htmlFor="smoker">Smoker</label>
        <select htmlFor="smoker" id="smoker">
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
        <label htmlFor="Birthday">Birthday</label>
        <input
          id="birthday"
          name="birthday"
          type="text"
          placeholder="Birthday.."
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default Home;

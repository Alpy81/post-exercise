import axios from "axios";

const AddItem = () => {
  const handleSubmit = async (e) => {
    const formData = new FormData(e.target);
    e.preventDefault();
    console.log(formData);
    const response = await axios.post(
      "http://localhost:3001/api/additem",
      formData
    );
    console.log(response);
  };

  return (
    <>
      <h1>AddItem</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="category">Category</label>
        <select htmlFor="category" id="category">
          <option value="big stuff">Big Stuff</option>
          <option value="middle stuff">Middle Stuff</option>
          <option value="small stuff">Small Stuff</option>
        </select>
        <label htmlFor="image">Image</label>
        <input type="file" name="image" id="image" />
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default AddItem;

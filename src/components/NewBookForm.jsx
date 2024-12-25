import React, { useEffect, useState } from "react";
import Card from "./Card";
import classes from "./NewBookForm.module.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewBookForm({ onClose, refreshBooks }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  let [authorList, setAuthorList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/author/all")
      .then((response) => {
        console.log("List fetched successfully:", response.data);

        setAuthorList(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the authors:", error);
      });
  }, []);

  function submitHandler(data) {
    console.log(data);
    axios
      .post("http://localhost:3000/book/add", data)
      .then((response) => {
        console.log("Book added successfully:", response.data);
        //navigate("/all-books");
        onClose();
        refreshBooks();
      })
      .catch((error) => {
        console.error("There was an error adding the book:", error);
      });
    // fetch("http://localhost:3000/book/add", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log("Book added successfully:", data);
    //     navigate("/all-books");
    //   })
    //   .catch((error) => {
    //     console.error("There was an error adding the book:", error);
    //   });
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={handleSubmit(submitHandler)}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input
            {...register("title", { required: true })}
            type="text"
            id="title"
          />
          {errors.title?.type === "required" && (
            <p className="alert alert-danger">title is required</p>
          )}
        </div>
        <div className={classes.control}>
          <label htmlFor="author">Author</label>

          <select {...register("author", { required: true })} id="author">
            {authorList.map((author) => (
              <option key={author.id} value={author.id}>
                {author.prenom + " " + author.nom}
              </option>
            ))}
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <input
            defaultValue="2004"
            {...register("year", { min: 1900, max: 2030 })}
            type="number"
            id="year"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="publisher">Publisher</label>
          <input {...register("publisher")} type="text" id="publisher" />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image</label>
          <input {...register("image")} type="url" id="image" />
        </div>
        <div className={classes.actions}>
          <button>Add Book</button>
        </div>
      </form>
    </Card>
  );
}

export default NewBookForm;

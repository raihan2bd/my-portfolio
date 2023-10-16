"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGlobalState } from "@/context/store";
import Spinner from "@/components/UI/Spinner";
import axios from "axios";

const AddProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [tags, setTags] = useState("");
  const [projectDemo, setProjectDemo] = useState('');
  const [projectSource, setProjectSource] = useState('');
  const [isFeatured, seIsFeatured] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);

  const { user, dispatchAuth } = useGlobalState();
  const router = useRouter();

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };
  const imageChangeHandler = (event) => {
    setImage(event.target.value);
  };
  const tagsChangeHandler = (event) => {
    setTags(event.target.value);
  };
  const projectDemoChangeHandler = (event) => {
    setProjectDemo(event.target.value);
  };
  const projectSourceChangeHandler = (event) => {
    setProjectSource(event.target.value);
  };
  const isFeaturedChangeHandler = (event) => {
    seIsFeatured((prevState) => {
      return !prevState;
    });
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const newTags = tags.split(",")
    if(title.length < 2 || title.length> 255) {
      setHasError("Title is required. Title should be in between 3-255 character long.")
      return
    }

    if(description.length< 2 || description.length> 3000) {
      setHasError("Description is required. Description should be in between 3-255 character long.")
      return
    }

    if(image.length <= 0) {
      setHasError("Image is required.")
      return
    }

    if(newTags.length <= 0 || newTags> 10) {
      setHasError('Tags is required. Tags should be no more than 10')
      return
    }
    setHasError(true)

    try {
      setIsLoading(true)
      const res = await axios.post('/api/admin/create-project', {title, description, image, tags: newTags, projectDemo, projectSource, isFeatured})
      console.log(res)
      setIsLoading(false)
      router.push('/')
    } catch(error) {
      setIsLoading(false)
      let errMsg = 'Something went wrong. Please try again';
      if(error.response && error.response.data && error.response.data.error) {
        errMsg = error.response.data.error;
      }

      setHasError(errMsg)
      if(error.response.status === 403) {
        dispatchAuth()
      }
    }
  }

  useEffect(() => {
    if(user.isAuthFetched) {
      if(!user.uid) {
        router.push('/login')
        return
      }
      if(user.role !== 'admin') {
        router.push('/')
      }
    }
  }, [user])

  if (isLoading) {
    return (
      <div className="w-598px max-w-[100%] pt-6 flex justify-center items-center min-h-[350px] max-h-[100%]">
        <Spinner />
      </div>
    );
  }

  return (
    <section className="pt-6 flex flex-col justify-center items-center min-h-[500px]">
      <form
        onSubmit={formSubmitHandler}
        className="flex flex-col gap-3 p-4 w-[598px] max-w-[100%] mx-auto overflow-hidden border rounded-lg"
      >
        <h3 className="text-2xl text-center font-bold mb-2">
          Create new project
        </h3>
        {hasError && <p className="text-center p-4 text-red-500">{hasError}</p>}

        <div className="flex flex-col gap-1">
          <label className="text-white/70" htmlFor="title">
            Title
          </label>
          <input
            className="w-full text-black/80 rounded-sm px-4 py-2"
            type="text"
            name="title"
            id="title"
            placeholder="Enter your title address here"
            required
            value={title}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-white/70" htmlFor="description">
            Description
          </label>
          <textarea rows={4} className="w-full px-4 py-2 text-white bg-white/20" name="description" id="description" onChange={descriptionChangeHandler} placeholder="Enter your description address here" value={description} required></textarea>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-white/70" htmlFor="image">
            Image
          </label>
          <input
            className="w-full text-black/80 rounded-sm px-4 py-2"
            type="text"
            name="image"
            id="image"
            placeholder="Enter your image address here"
            required
            value={image}
            onChange={imageChangeHandler}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-white/70" htmlFor="projectDemo">
            Project Demo Link
          </label>
          <input
            className="w-full text-black/80 rounded-sm px-4 py-2"
            type="text"
            name="projectDemo"
            id="projectDemo"
            placeholder="Enter your projectDemo address here"
            required
            value={projectDemo}
            onChange={projectDemoChangeHandler}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-white/70" htmlFor="projectSource">
            Project Source Link
          </label>
          <input
            className="w-full text-black/80 rounded-sm px-4 py-2"
            type="text"
            name="projectSource"
            id="projectSource"
            placeholder="Enter your projectSource address here"
            required
            value={projectSource}
            onChange={projectSourceChangeHandler}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-white/70" htmlFor="tags">
            Tags
          </label>
          <input
            className="w-full text-black/80 rounded-sm px-4 py-2"
            type="text"
            name="tags"
            id="tags"
            placeholder="Enter your tags address here"
            required
            value={tags}
            onChange={tagsChangeHandler}
          />
        </div>

        <div className="flex flex-row gap-2 items-center">
          <label className="text-white/70" htmlFor="isFeatured">
            Is Featured
          </label>
          <input
            className="text-black/80 rounded-sm px-4 py-2 h-fit"
            type="checkbox"
            name="isFeatured"
            id="isFeatured"
            placeholder="Enter your isFeatured address here"
            required
            value={isFeatured}
            onChange={isFeaturedChangeHandler}
          />
        </div>

        <button
          className="bg-sky-500 px-4 py-2 w-fit ms-auto mt-2"
          disabled={isLoading}
          type="submit"
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default AddProject;

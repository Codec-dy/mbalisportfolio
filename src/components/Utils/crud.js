import axios from "axios";
import { toast } from "react-toastify";
import { PortfolioContext } from "../../context/PortfolioContext";
import { useContext } from "react";


const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

  const handleDelete = async (api,id,model) => {
    await axios.delete(`${api}/${id}?${model}`)
      .then((response) => {
        // setRefresh(!refresh);
        toast.success(response.data);
      }).catch((error) => {
        console.log(error);
        toast.error('An error occurred while deleting');
      });
  };


  const handleEdit = async (api, updatedExperience,model) => {
    const formData = new FormData();
    for(var key in updatedExperience){
      formData.append(key, updatedExperience[key]);
    }
    await axios.put(`${api}?${model}`, formData, { headers: { "Content-Type": "multipart/form-data" } })
      .then((response) => {
        toast.success(response.data);
        // setRefresh(!refresh);
      }).catch((error) => {
        console.log(error);
        toast.error('An error occurred while updating');
      });
  };

  const handleAdd = async (api,content) => {
    // Logic to add experience
    const formData = new FormData();
    for(var key in content){
      formData.append(key, content[key]);
    }
    console.log(api)
    // axios.post("/upload", formData, { headers: { "Content-Type": "multipart/form-data" } });
    await axios.post(api,formData, { headers: { "Content-Type": "multipart/form-data" } })
          .then((response) => {
            toast.success(response.data);
          }).catch((error) => {
            console.log(error);
            toast.error('An error occurred while deleting');
          });
      };
  const getData = async (api,setter) => {
      await axios.get(api  
      ).then((response) => {
        setter(response.data);
      }).catch((error) => {
          console.log(error);
          toast.error('An error occured');});
    }

    const handleFileChange = (file,setPreview) => {
      if (file) {
        setPreview(URL.createObjectURL(file)); 
        return file
      }
    };

export {handleDelete,handleEdit,handleAdd,getData, convertBase64,handleFileChange};

import axios from "axios";

class BannerService{
   callBannerData = async ()=>{
        try{
          const response = await axios.get("http://127.0.0.1:8000/api/home/banners");
          console.log("success");
          return response.data;
         
        }
        catch(error){
          console.log(error);
        }
      }
}

export default new BannerService();
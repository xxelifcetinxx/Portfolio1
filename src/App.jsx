import { useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Toastify CSS'i import et
import Anasayfa from "./components/Anasayfa";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";



function App() {
  useEffect(() => {
    // Gönderilecek obje
    const myData = {
      name: "Mustafa",
      role: "Full-stack Developer",
      message: "Hello, World!",
    };

    // POST isteği
    const postData = async () => {
      try {
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts", myData);
        console.log("Response:", response.data);

        // Başarılı istekte Toastify ile mesaj gönder
        toast.success("Portfolyo siteme hoş geldiniz!");
      } catch (error) {
        console.error("Error posting data:", error);

        // Hata durumunda Toastify ile mesaj gönder
        toast.error("Veri gönderme hatası!");
      }
    };

    postData();
  }, []); // Boş bağımlılık dizisi: Sadece ilk render'da çalışır.

  return (
    <div className="w-full">
      {/* Çubuğun konumunu ve boyutunu gözden geçirelim */}
      
      <ThemeProvider>
        <LanguageProvider>
          <Anasayfa />
        </LanguageProvider>
      </ThemeProvider>

      {/* Toastify mesajlarını göstermek için burada ekliyoruz */}
      <ToastContainer />
    </div>
  );
}

export default App;

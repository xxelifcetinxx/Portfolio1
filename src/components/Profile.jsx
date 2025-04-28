import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const Profile = () => {
  const { darkMode } = useTheme();
  const { language } = useLanguage();

  return (
    <section
      className={`flex justify-center items-center my-8 p-8 ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
      }`}
    >
      <div
        className={`flex flex-col justify-center md:flex-row w-full md:w-2/3 gap-24`}
      >
        {/* Profil Bilgileri */}
        <div
          className={`flex flex-col w-full md:w-1/3 p-6 md:ml-24 rounded-lg border-2 hover:scale-105 ${
          darkMode ? "bg-gray-700 text-white border-gray-600" : "bg-white text-black border-gray-300"
          } shadow-lg shadow-[15px_15px_20px_rgba(0,0,0,95)]`}
        >
          <h2 className="text-2xl font-bold mb-2">
            {language === "tr" ? "Profil" : "Profile"}
          </h2>
          <h3 className="text-red-500 font-bold mb-4">
            {language === "tr" ? "Temel Bilgiler" : "Basic Information"}
          </h3>

          {/* Bilgi Listesi */}
          <div className="space-y-4">
            {/* Doğum Tarihi */}
            <div className="flex flex-col sm:flex-row">
              <p className="font-bold sm:w-1/2">{language === "tr" ? "Doğum Tarihi" : "Birth Date"}</p>
              <p className="font-normal sm:w-1/2">{language === "tr" ? "07.01.1998" : "07.01.1998"}</p>
            </div>

            {/* İkamet Şehri */}
            <div className="flex flex-col sm:flex-row">
              <p className="font-bold sm:w-1/2">{language === "tr" ? "İkamet Şehri" : "Residence City"}</p>
              <p className="font-normal sm:w-1/2">{language === "tr" ? "Sakarya" : "Sakarya"}</p>
            </div>

            {/* Eğitim Durumu */}
            <div className="flex flex-col sm:flex-row">
              <p className="font-bold sm:w-1/2">{language === "tr" ? "Eğitim Durumu" : "Education"}</p>
              <p className="font-normal sm:w-1/2">
                {language === "tr"
                  ? "Sakarya Uni-Env Engineering, 2021"
                  : "Sakarya Uni-Env Engineering, 2021"}
              </p>
            </div>

            {/* Tercih Ettiği Rol */}
            <div className="flex flex-col sm:flex-row">
              <p className="font-bold sm:w-1/2">{language === "tr" ? "Tercih Ettiği Rol" : "Preferred Role"}</p>
              <p className="font-normal sm:w-1/2">{language === "tr" ? "FullStack" : "FullStack"}</p>
            </div>
          </div>
        </div>

        {/* About Me Bölümü */}
<div
  className={`flex flex-col w-full md:w-1/3 p-6 rounded-lg ${
    darkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
  }`}>
  <h3
  className={`text-2xl font-semibold ${darkMode ? "text-white" : "text-black"} 
    mb-3`}>
  {language === "tr" ? "Hakkımda" : "About Me"}
  <div
    className={`w-[5rem] h-4 opacity-65 ${darkMode ? "bg-blue-400" : "bg-blue-600"} rounded-full mx-auto`}
    style={{ marginLeft: "-1%", marginTop: "-3%" }}  // Çizgiyi sola kaydırır
  />
</h3>













  {/* Hakkımda metnini sınırlamak ve taşmaması için */}
  <p className="max-w-sm mt-3 overflow-hidden text-ellipsis">
    {language === "tr"
      ? "Merhaba, ben Elif. Yazılım geliştirmeye olan ilgim genç yaşlarda başladı ve şu anda frontend geliştirme konusunda uzmanlaşıyorum. Yeni teknolojileri öğrenmeye ve projeler geliştirmeye her zaman açığım. Takım çalışmasına yatkınım ve sorumluluk almayı seviyorum."
      : "Hello, I'm Elif. My interest in software development started at a young age, and now I specialize in frontend development. I am always open to learning new technologies and developing projects. I am a team player and enjoy taking responsibility."}
  </p>
       {/*    
        <div className="relative flex justify-center w-full">
          <div className="absolute translate-x-[-1.5rem] translate-y-[-4.8rem]"></div>
        <div className="w-full sm:w-[10rem] h-[1rem] border-[0.6rem] border-blue-500 rounded-l-3xl rounded-r-3xl opacity-65 absolute translate-x-[-6rem] translate-y-[-10.5rem] md:w-[20rem] md:h-[1rem] md:border-[0.6rem] md:border-blue-500 md:rounded-l-3xl md:rounded-r-3xl md:opacity-65 md:absolute md:translate-x-[-6rem] md:translate-y-[-10.5rem]" style={{ maxWidth: "90%" }}></div>
      </div>
      */}
</div>

      </div>
    </section>
  );
};

export default Profile;

import Marquee from "react-fast-marquee";

const Merquee = () => {
  return (
    // TODO: Making all the image Links in a constant file and importing and maping
    <section className="max-w-5xl mx-auto  px-8 min-h-[30vh] text-center flex items-center flex-col">
        <h1 className="subhead-text mb-10">Trusted <span className="text-[#1065DC]">Clients</span></h1>
        <Marquee speed={70}>
        <div className="flex gap-[5rem] items-center justify-center">
        <img src="https://alkaram.com/wp-content/themes/ak/images/logo-alkaram-black.png" alt="alkaram" className="h-10 w-[10%] "/>
        <img src="https://www.zamantextile.com/wp-content/uploads/2022/11/logo-2.png" className="w-[10%] h-[10%] " alt="zaman" />
        <img src="https://amnatextile.com/images/logo.png" alt="amna" className="w-[10%] h-16"/>
        <img src="https://www.admdenim.com/_next/static/media/adm-logo-dark.c3c12edf.svg" alt="adm" className="h-16 w-[10%]"/>
        <img src="./orient.svg" alt="orient"/>
        <img src="https://www.ibrahimtex.com/Welcome%20to%20Ibrhaim%20Textile%20Textile,%20Pakistan_files/logo.jpg" alt="" />
        <img src="https://apag.com.pk/wp-content/themes/apag_new/assets/images/soya-suprem-logo.png" alt="" className="h-20"/>
        <img src="https://igloofun.com/wp-content/uploads/2023/03/igloo_logo.png" alt="" className="h-16"/>
        <img src="http://garibsons.com/wp-content/uploads/2020/03/Garibsons-Logo-name.jpg" alt="" className="h-10 mr-10"/>
        </div>
        
    </Marquee>
    </section>
  )
}

export default Merquee